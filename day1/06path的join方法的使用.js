const path=require('path')
const fs=require('fs')
//注意../会抵消前面的上一级路径
const pathStr= path.join('/a','/b/c','../','./d','e')
console.log(pathStr);

fs.readFile(path.join(__dirname,'/file/1.txt'),'utf8',function(err,dataStr){
    if(err){
        return console.log('读取失败'+err.message);
    }
    console.log('读取成功'+dataStr);
})