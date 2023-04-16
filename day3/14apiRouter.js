const express=require('express')

const router= express.Router()
//挂载路由 get
router.get('/get',(req,res)=>{
    //通过req.qurey获取客户端通过查询字符串，发送到服务器
    const query=req.query
    //调用res.send()方法,向客户端响应处理的结果
    res.send(
        {
            status:0,  //0表示处理成功，1表示处理失败
            msg:'GET请求成功！',  //状态描述
            data:query //需要响应给客户端的数据
        }
    )
})

//定义post接口
router.post('/post',(req,res)=>{
    //通过req.body获取请求体包含的url-encoded格式的数据
    const body=req.body
    //调用res.send（）方法向客户端响应请求
    res.send(
        {
            status:0,  //0 成功 1失败
            msg:'POST请求成功!',
            data:body
        }
    )
})

//定义delete接口
router.delete('/delete',(req,res)=>{
    //调用res.send（）方法向客户端响应请求
    res.send(
        {
            status:0,  //0 成功 1失败
            msg:'DELETE请求成功!'

        }
    )
})
module.exports=router