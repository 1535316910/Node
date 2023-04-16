//导入mysql模块
const mysql=require('mysql')
//建立与mysql数据库的连接关系
const db=mysql.createConnection({
    host: '127.0.0.1',
    port:'3306',
    user:'root',
    password:'root',
    database:'my_db_01'
})

//测试mysql模块能否正常工作
db.query('select * from users',(err,results)=>{
    //失败
    if(err)return console.log(err.message);
    //成功
    console.log(results);
    if(results)
   {
     for(var i = 0; i < results.length; i++)
     {
       console.log("%d\t%s\t%s\t%s", results[i].id, results[i].username, results[i].password,results[i].status);
     }
   }

})

// //mysql的插入语句  
// const user={username:'hahaha',password:'pcc321'}
// //待执行的sql语句 其中的英文 ? 表示占位符
// const sqlstr='insert into users (username,password)values(?,?)'
// db.query(sqlstr,[user.username,user.password],(err,results)=>{
//     if(err)return console.log(err.message);
//     if(results.affectedRows === 1){
//         console.log('插入数据成功');
//     }
// })


// //mysql的插入语句  2
// const user2={username:'hahaha2',password:'pcc123'}
// //待执行的sql语句 其中的英文 ? 表示占位符
// const sqlstr2='insert into users set ?'
// db.query(sqlstr2,user2,(err,results)=>{
//     if(err)return console.log(err.message);
//     if(results.affectedRows === 1){
//         console.log('插入数据成功');
//     }
// })

//mysql的修改语句  1
const user3={id:7,username:'aaa',password:'000'}
//待执行的sql语句 其中的英文 ? 表示占位符
const sqlstr3='update users set username=?,password=? where id=?'
db.query(sqlstr3,[user3.username,user3.password,user3.id],(err,results)=>{
    if(err)return console.log(err.message);
    if(results.affectedRows === 1){
        console.log('修改数据成功1');
    }
})

//mysql的修改语句  2
const user4={id:8,username:'bbb',password:'111'}
//待执行的sql语句 其中的英文 ? 表示占位符
const sqlstr4='update users set ? where id=?'
db.query(sqlstr4,[user4,user4.id],(err,results)=>{
    if(err)return console.log(err.message);
    if(results.affectedRows === 1){
        console.log('修改数据成功2');
    }
})

//mysql的删除语句  

//待执行的sql语句 其中的英文 ? 表示占位符
const sqlstr5='delete from users where id=?'
db.query(sqlstr5,10,(err,results)=>{
    if(err)return console.log(err.message);
    if(results.affectedRows === 1){
        console.log('删除数据成功');
    }
})

//标记删除  将delete替换为update
const sqlstr6='update users set status=? where id=?'
db.query(sqlstr6,[1,11],(err,results)=>{
    if(err)return console.log(err.message);
    if(results.affectedRows === 1){
        console.log('标记删除数据成功');
    }
})