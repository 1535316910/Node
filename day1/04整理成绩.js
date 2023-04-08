//导入fs模块
const { log } = require('console')
const fs=require('fs')
//调用fs.readfile（）读取文件内容
fs.readFile('./file/成绩.txt','utf8',function(err,dataStr){
    //判断文件是否读取成功
    if(err){
        return console.log('文件读取失败',err.message);
    }
   // console.log('读取文件成功',dataStr);
   //先把成绩的数据按空格进行分割
   const arrold=dataStr.split(' ')
   console.log(arrold);
   //循环分割后的数组，对每一项数据，进行字符串的替换操作
    const arrNew=[]
    arrold.forEach(item=>{
        arrNew.push(item.replace('=',':'))
    })
    console.log(arrNew);
   //把新数组中的每一项，进行合并，得到一个新的字符串
   const newStr=arrNew.join('\r\n')
   console.log(newStr);

   //调用fs.writerFile()方法把处理完毕的成绩，写入到成绩-ok.txt中
   fs.writeFile('./file/成绩-ok.txt',newStr,function(err){
    if(err){
        return console.log('写入文件失败',err.message);
    }
    console.log('写入成绩成功');
    fs.appendFile('./file/1.txt',newStr+'\r\n',function(err){
        if(err){
            return console.log('写入文件失败',err.message);
        }
        console.log('追加成功');
       })
   })
 
})