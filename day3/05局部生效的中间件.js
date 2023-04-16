//导入express
const express=require('express')
const app=express()
//定义一个简单的中间件函数
const mw=function(req,res,next){
    console.log('这是最简单的中间件函数');
    //把流转关系，转交给下一个中间件或路由
    next()
}
//将mw注册为局部生效的中间件
app.get('/',mw,(req,res)=>{
    res.send('Home page.')
})
app.post('/',(req,res)=>{
    res.send('user page')
})


app.listen(8080,()=>{
    console.log('Server running at http://127.0.0.1:8080');
})