// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

// TODO_01：安装并导入 JWT 相关的两个包，分别是 jsonwebtoken 和 express-jwt
const jwt=require('jsonwebtoken')
//const expressJwt = require('express-jwt');
const expressJWT = require('express-jwt')
// 允许跨域资源共享
const cors = require('cors')
app.use(cors())

// 解析 post 表单数据的中间件
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// TODO_02：定义 secret 密钥，建议将密钥命名为 secretKey
const secretKey='itzs No1 ^-^'

// TODO_04：注册将 JWT 字符串解析还原成 JSON 对象的中间件
//使用app.use()来注册中间件
//expressJWT({secret:secretKey})  就是用来解析Token的中间件
//.unless({path:[/^\/api\//]})  用来指定那些接口不需要访问权限
//注意只要配置成功expressJwt这个中间件，就可以把解析出来的用户信息挂载到req.user属性上,旧版的用注释写法
//app.use(expressJwt({ secret:secretKey ,algorithms:['HS256']}).unless({path:[/^\/api\//]}));
//app.use(expressJwt({ secret: secretKey,algorithms: ["HS256"] }).unless({ path: [/^\/api\//] }));
app.use(
  expressJWT.expressjwt({ secret: secretKey, algorithms: ["HS256"] }).unless({
    path: [/^\/api\//],
  })
);


// 登录接口
app.post('/api/login', function (req, res) {
  // 将 req.body 请求体中的数据，转存为 userinfo 常量
  const userinfo = req.body
  console.log('信息',userinfo);
  // 登录失败
  if (userinfo.username !== '123' || userinfo.password !== '123') {
    return res.send({
      status: 400,
      message: '登录失败！'
    })
  }
  // 登录成功
  // TODO_03：在登录成功之后，调用 jwt.sign() 方法生成 JWT 字符串。并通过 token 属性发送给客户端
  //  jwt.sign()三个参数，参数1：用户的信息对象
  //参数2：加密的密钥
  //参数3：配置对象，可以配置当前token的有效期  秒s  小时h
  //记住千万不要将密码加密在token中
 const tokenStr= jwt.sign({username:userinfo.username},secretKey,{expiresIn:'30s'})
  res.send({
    status: 200,
    message: '登录成功！',
    token: tokenStr, // 要发送给客户端的 token 字符串
  })
})

// 这是一个有权限的 API 接口
app.get('/admin/getinfo', function (req, res) {
  // TODO_05：使用 req.user 获取用户信息，并使用 data 属性将用户信息发送给客户端
  //注意 注意注意 experss-jwt 7.0版本前是 req.user  之后是req.auth
  console.log(req.auth);
  res.send({
    status: 200,
    message: '获取用户信息成功！',
    data: req.auth, // 要发送给客户端的用户信息
  })
})

// TODO_06：使用全局错误处理中间件，捕获解析 JWT 失败后产生的错误
//定义错误级别的中间件，捕获整个项目的异常信息,防止程序的崩溃  错误级别的中间件必须注册在所有路由之后
app.use((err,req,res,next)=>{
  //token解析失败导致的错误
  if(err.name === 'UnauthorizedError'){
    return res.send({status:401,message:'无效的token'})
  }
  console.log();
  res.send({status:500,message:'未知的错误'})
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(8080, function () {
  console.log('Express server running at http://127.0.0.1:8080')
})
