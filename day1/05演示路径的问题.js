const fs=require('fs')
// ./或../绝对路径出现路径拼接错误的问题，是因为提供了./或../开头的相对路径
//如果要解决这个问题，可以提供一个完整的文件存放路径就行
// fs.readFile('./file/1.txt','utf8',function(err,dataStr){
//     if(err){
//         return console.log('读取文件失败',err.message);
//     }
//     console.log('读取文件成功'+dataStr);
// })

//移植性特别差，不利于后期维护
// fs.readFile('C:\\Users\\15353\\Desktop\\Node\\day1\\file\\1.txt','utf8',function(err,dataStr){
//     if(err){
//         return console.log('读取文件失败',err.message);
//     }
//     console.log('读取文件成功'+dataStr);
// })


// __dirname表示当前文件所处的目录
console.log(__dirname);
fs.readFile(__dirname+'/file/1.txt','utf8',function(err,dataStr){
    if(err){
        return console.log('读取文件失败',err.message);
    }
    console.log('读取文件成功'+dataStr);
})

