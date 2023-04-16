//导入express
const express=require('express')
//创建web服务器
const app=express()
//导入路由模块
//配置解析数据的中间件
app.use(express.urlencoded({extended:false}))

//使用jsonp必须在配置cors中间件之前，配置jsonp的接口,只支持get请求，他不是ajax
app.get('/api/jsonp',(req,res)=>{
    //TODO:定JSONP接口具体的实现过程
    //1.获取客户端发送过来的回调函数名字
        const funcName=req.query.callback
    //2.得到要通过JSONP形式发送给客户端的数据
        const data={name:'zs',age:'25'}
    //3.根据前两步得到的数据，拼接成一个函数调用的字符串
        const scriptStr=`${funcName}(${JSON.stringify(data)})`
    //4.把上一步拼接得到的字符串，响应给客户端的<script>标签进行解析
    res.send(scriptStr)
})

//一定要在路由之前进行调用app.use(cors()),从而解决接口跨域的问题
const cors=require('cors')
app.use(cors())

const router=require('./14apiRouter')
//把路由模块注册到app上

app.use('/api',router)


//启动web服务器
app.listen(8080,()=>{
    console.log('expressweb服务器启动成功！');
    console.log('express server running at http://127.0.0.1:8080');
})