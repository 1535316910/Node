//导入 fs、path、http三个模块
const fs=require('fs')
const path=require('path')
const http=require('http')
//创建web服务器
const server= http.createServer()
//监听web服务器的request事件
server.on('request',(req,res)=>{
    // /clock/index.html
    // /clock/index.css
    // /clock/index.js

    //获取客户端请求的url地址
    const url=req.url
    console.log(url);
    //把请求的url地址，映射到本地文件的存放路径s
   // const fpath=path.join(__dirname, url)
   let fpath='';
   if(url==='/'){
    //如果请求的路径是否为 / ，则手动指定文件的存放路径
    fpath=path.join(__dirname,'/clock/index.html')  
   }else{
    //如果请求的路径不为 /  则动态拼接文件的存放路径s
    fpath=path.join(__dirname,'./clock',url)
   }

    //根据映射过来的文件路径读取文件内容
    fs.readFile(fpath,'utf8',(err,dataStr)=>{
        //读取失败向客户端响应固定的错误信息
        if(err){
            return res.end('<h1>404 Not Found</h1>')
        }
        //读取成功，将读取成功的内容，相应带客户端
        res.end(dataStr)

    })

})
//启动服务器 端口号8080
server.listen(8080,()=>{

    console.log('sever running at http://127.0.0.1:8080')

})