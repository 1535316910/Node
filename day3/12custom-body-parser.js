//导入nodejs的内置模块query string
const querystring=require('querystring')
//这是解析表单数据的中间件
const bodyparser=(req,res,next)=>{
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

}

module.exports=bodyparser