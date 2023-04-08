const http=require('http')
//创建web服务器
const server=http.createServer()
//监听web服务器的request事件
server.on('request',(req,res)=>{
    // 获取请求的URL地址
    const url= req.url
    console.log(url);
    // 设置默认的请求内容有404 Not Found
    let content='<h1>404 Not Found!!!</h1>'
    // 判断用户请求是否为 /或index.html首页
        // 判断用户请求是否为 /或about.html首页
    if(url=='/'||url=='/index.html'){
        content='<h1>首页</h1>' 
    }else if(url=='/about.html'){
        content='<h1>关于页面</h1>'
    }

    // 设置Content-Type响应头，防止中文乱码
    res.setHeader('Content-Type','text/html; charset=utf-8')
    // 使用res.end()把内容响应给客户端
    res.end(content)

})
//启动服务器 端口号8080
server.listen(8080,()=>{
    console.log('sever running at http://127.0.0.1:8080')
})