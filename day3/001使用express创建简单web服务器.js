//导入express
const express=require('express')
//创建web服务器
const app=express()
//监听客户端的get和post请求,并向客户端响应具体的请求
//参数1：客户端请求的url地址
//参数2：请求对应的处理函数
//req:请求对象（包含了请求相关的属性和方法）
//res:响应对象（包含了与响应相关的属性和方法）
app.get('/user',(req,res)=>{
    //调用express提供的res.send()方法，向客户端响应一个json对象
    res.send({
        name:'张三get',
        age:20,
        gender:'男'
    })
})
app.post('/user',(req,res)=>{
    //调用express提供的res.send()方法，向客户端响应一个json对象
    res.send({
        name:'李四post',
        age:20,
        gender:'男'
    })
})
app.get('/',(req,res)=>{
    //通过req.query可以获取到客户端发送过来的查询参数
    //注意默认req.query是一个空对象
    console.log(req.query);
    res.send(req.query)
})
app.get('/users/:id/:name',(req,res)=>{
    //这里的冒号id是一个动态id
    //req.params是动态匹配的URL参数  默认也是一个空对象
    console.log(req.params)
    res.send(req.params)
    const id=req.params.id
    console.log("id:"+id)

})


//启动web服务器
app.listen(8080,()=>{
    console.log('expressweb服务器启动成功！');
    console.log('express server running at http://127.0.0.1:8080');
})