//导入express
const experss=require('express')
//安装 @hapi/joi 包，为表单中携带的每个数据项，定义验证规则
//const joi=require('@hapi/joi')
const joi = require("joi")
// 解析 token 的中间件
const experssJWT=require('express-jwt')

//创建服务器实例对象
const app=experss()

//导入cors中间件
const cors=require('cors')
//将cors注册为全局中间件
app.use(cors())
// 托管静态资源文件  第一个uploads是虚拟前缀
app.use('/uploads',experss.static('./uploads'))

//配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件
app.use(experss.urlencoded({extended:false}))

//所有路由之前，声明一个全局中间件，为 res 对象挂载一个 res.cc() 函数
app.use((req,res,next)=>{
res.cc=function (err,status=1) {
  res.send({
    //状态
    status,
    // 状态描述，判断 err 是 错误对象 还是 字符串
    message:err instanceof Error ? err.message:err
  })
}
  next()
})
//注册路由之前，配置解析 Token 的中间件

// 导入配置文件
const config=require('./config')


// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(
  experssJWT.expressjwt({secret:config.jwtSecreKey,algorithms:["HS256"]}).unless({
    path:[/^\/api\//]
  })
);


//导入和使用用户路由模块
const userRouter=require('./router/user')
app.use('/api',userRouter)
// 导入并使用用户信息路由模块
const userinfoRouter = require('./router/userinfo')
// 注意：以 /my 开头的接口，都是有权限的接口，需要进行 Token 身份认证
app.use('/my', userinfoRouter)

// 导入并使用文章分类路由模块
const artCateRouter = require('./router/artcate')
// 为文章分类的路由挂载统一的访问前缀 /my/article
app.use('/my/artcate', artCateRouter)
// 导入并使用文章路由模块
const articleRouter =require('./router/article')
// 为文章的路由挂载统一的访问前缀 /my/article
app.use('/my/article',articleRouter)




//定义全局错误级别中间件中，捕获验证失败的错误，并把验证失败的结果响应给客户端
app.use(function (err,req,res,next){
  //数据验证失败
  if(err instanceof joi.ValidationError)
  return res.cc(err)
  // 捕获身份认证失败的错误
  if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
  //未知错误
  res.cc(err)
})


//启动服务器

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8080, function () {
    console.log('api server running at http://127.0.0.1:8080')
  })