
//导入express
const express=require('express')
const app=express()
//导入nodejs的内置模块query string
const querystring=require('querystring')

//这是解析表单数据的中间件
app.use((req,res,next)=>{
    //定义中间件的具体业务逻辑
    //定义一个str字符串  专门用来存储客户端发送过来的请求jutishuju
    let str=''
    //监听req的data事件
    req.on('data',(chunk)=>{
        str+=chunk
    })
    //监听req的end事件，拿到并处理完整的请求体数据（请求体发送发送完毕自动触发）
    req.on('end',()=>{
        //打印完整的数据
        console.log(str);
        //TODO:把字符串格式的请求体数据，解析成对象格式
        let body=querystring.parse(str)
        req.body=body   //将body挂载到req.body 供下文使用  上下的req和res是共用一个的
        next()
    })

})
//定义路由
app.post('/user',(req,res)=>{
    //在服务器，可以使用res.body这个属性，来接受客户端发送过来的请求数据
    //默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
    console.log(req.body);
   res.send(req.body)
})

//定义错误级别的中间件，捕获整个项目的异常信息,防止程序的崩溃  错误级别的中间件必须注册在所有路由之后
app.use((err,req,res,next)=>{
    console.log('发生了错误:'+err.message);
    res.send(err.message)
})



app.listen(8080,()=>{
    console.log('Server running at http://127.0.0.1:8080');
})