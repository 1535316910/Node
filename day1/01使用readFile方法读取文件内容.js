//1.导入fs文件，来操作文件
const fs=require('fs')
//2.调用fs.readFile()方法读取文件
//参数1：读取文件的存放路径
//参数2：读取文件的时候采用的编码格式，一般默认utf-8
fs.readFile('./file/11.txt','utf8',function(err,dataStr){
    //2.打印成功的结果
    //如果读取成功，则err值为null   读取失败err的值为错误对象，datastr的值为undefined
    console.log(err);
    console.log('-----');
    //打印失败的结果
    console.log(dataStr);
})