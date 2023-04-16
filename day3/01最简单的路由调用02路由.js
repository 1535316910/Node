//导入express框架
const express=require('express')

const app=express()
// //挂载路由
// app.get('/',(req,res)=>{
//     res.send('hello world.')
// })
// app.post('/',(req,res)=>{
//     res.send('post request.')
// })

//导入路由模块
const router=require('./02创建路由模块')
app.use(express.static('./public'))
//注册路由模块
//app.use()这个函数是注册全局中间件
//  /api统一访问前缀
app.use('/api',router)

app.listen(8080,()=>{
    console.log('Server running at http://127.0.0.1:8080');
})