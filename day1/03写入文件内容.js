// //导入系统模块
// const fs=require('fs')
// // 引入readline模块
// let readLine=require('readline')
// let read=readLine.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// var line='';
// read.question("输入的内容",answer=>{
//     console.log('输入的'+answer);
//     line=answer;
   

//     read.close()
// })
//     //调用fs的wirteFile()方法，写入文件的内容
//     //参数1：写入文件的路径   参数2：写入的内容  参数3：回调函数
//     fs.writeFile('./file/1.txt',line,function(err){
//         //err成功为Null  错误为错误的信息
//         console.log('err'+err);
     
//     })


// 上面异步输入
// 导入系统模块
const fs=require('fs')
const readline = require('readline-sync'); 
// process.stdin.setEncoding('utf-8');
// process.stdout.setEncoding('utf-8');

var name = readline.question("请输入内容：",{encoding:'utf-8'});
       //调用fs的wirteFile()方法，写入文件的内容
    //参数1：写入文件的路径   参数2：写入的内容  参数3：回调函数
    fs.writeFile('./file/1.txt',name,function(err){
        //err成功为Null  错误为错误的信息
       
        if(err){
            console.log('文件写入失败'+err.message);
        }
     
    })


