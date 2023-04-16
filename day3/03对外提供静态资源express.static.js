//导入express
const express=require('express')
const path=require('path')
//创建web服务器

//设置utf8格式s
const app=express()
// app.use((req, res, next) => {
//     res.setHeader('Content-Type', 'text/html;charset=utf-8');
//     next();
//   });
//在这里，调用express.static()方法，快速的对外提供静态资源
//第一个静态
//app.use(express.static('./public'))

//第二个静态
app.use('/public',express.static('./public'))




app.listen(8080,()=>{
    console.log('expressweb服务器启动成功！');
    console.log('express server running at http://127.0.0.1:8080');
})