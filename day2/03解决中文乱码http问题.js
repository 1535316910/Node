const http=require('http')
//创建web服务器
const server= http.createServer()
//监听web服务器的request事件
server.on('request',(req,res)=>{
    //定义一个字符串，包含中文的内容
    const str=`您请求的url地址是${req.url}，请求的method类型为：${req.method}`
    //调用res.setHead()方法，设置content-type响应头，解决中文乱码的问题
    res.setHeader('Content-Type','text/html;charset=utf-8')
    //将内容响应给客户端
    res.end(str)

})
//启动服务器 端口号8080
server.listen(8080,()=>{
    console.log('server running at http://127.0.0.1')
})