//1.导入fs文件，来操作文件
const { log } = require('console');
const fs=require('fs')

fs.readFile('./file/1.txt','utf8',function(err,dataStr){
    if(err){
        return console.log('读取文件失败'+err.message+'\n'+'错误码'+err.errno);
    }
    console.log("读取文件成功:"+'\n'+dataStr);
})