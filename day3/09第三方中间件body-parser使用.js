//第一步安装这个 body-parser的包
// npm i body-parser
//导入body-perser
const parser=require('body-parser')

//导入express
const express=require('express')
const app=express()
//除了错误级别的中间件，其他中间件必须在路由之前
//通过body-parser 来解析表单中的json格式数据
app.use(parser.urlencoded({extended:false}))

//定义路由
app.post('/user',(req,res)=>{
    //在服务器，可以使用res.body这个属性，来接受客户端发送过来的请求数据
    //默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
    console.log(req.body);
   res.send('Home page Ok.')
})

//定义路由
app.post('/book',(req,res)=>{
     //在服务器，可以使用res.body这个属性，来获取json格式的表单数据和url-encoded格式的数据
    //默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于{}
    console.log(req.body);
   res.send('Ok.')
})


//定义错误级别的中间件，捕获整个项目的异常信息,防止程序的崩溃  错误级别的中间件必须注册在所有路由之后
app.use((err,req,res,next)=>{
    console.log('发生了错误:'+err.message);
    res.send(err.message)
})



app.listen(8080,()=>{
    console.log('Server running at http://127.0.0.1:8080');
})