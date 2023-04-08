//导入 fs和path模块
const fs=require('fs')
const path=require('path')
//导入path路径处理模块

//匹配<style></style>标签正则
// 其中 \s表示空白符   \S表示非空白符   *表示匹配任意次数
const regStyle=/<style>[\s\S]*<\/style>/
//匹配<scrip></script>标签正则
const regScript=/<script>[\s\S]*<\/script>/

//读取需要被处理的HTML文件
fs.readFile(path.join(__dirname,'./素材/index.html'),'utf8',function(err,dataStr){
    //读取文件失败，打印错误信息
    if(err){
        console.log('读取文件失败',err.message);
    }
    //读取文件成功，调用三个方法，分别拆解出 css,js和html文件
    //console.log(dataStr);
    //处理css样式
    resolveCSS(dataStr)
    //处理js样式
    resolveJs(dataStr)
    //处理html样式
    resolveHtml(dataStr)


})

//读取html文件成功后，调用对应的方法，拆解出css,js和HTML文件
//定义处理css样式的方法
function resolveCSS(htmlStr){
    //使用正则提取需要的内容,exec函数使用指定的正则表达式模式去字符串中查找匹配项，
    //并以数组形式返回，如果未查找到则返回null
   const css= regStyle.exec(htmlStr)
  
   //将提取出来的样式字符串,进行字符串的relace替换
   const newCss= css[0].replace('<style>','').replace('</style>','')                    
    //调用fs.writeFile()方法将提取的样式写入到clock 目录中index.css的文件中
    fs.writeFile(path.join(__dirname,'./clock/index.css'),newCss,function(err){
        if(err){
            console.log('写入css失败',err.message);
        }
        console.log('css样式写入成功');
    })                                   
}
//定义处理js样式的方法
function resolveJs(jsStr){
    //使用正则提取需要的内容,exec函数使用指定的正则表达式模式去字符串中查找匹配项，
    //并以数组形式返回，如果未查找到则返回null
    const jss= regScript.exec(jsStr)
     //将提取出来的样式字符串,进行字符串的relace替换
     const newJs=jss[0].replace('<script>','').replace('</script>','')
     //调用fs.writeFile()方法将提取的样式写入到clock 目录中index.js的文件中
     fs.writeFile(path.join(__dirname,'./clock/index.js'),newJs,function(err){
         if(err){
             console.log('写入js失败',err.message);
         }
         console.log('js样式写入成功');
     }) 

}
 //定义处理html结构的方法
 function resolveHtml(htmlStr){
    //将字符串调用replace方法，把内嵌的style和script标签，替换为外联的link和script标签
    const newHtml= htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css"/>')
    .replace(regScript,'  <script src="./index.js"></script>')
    //写入index.html这个文件
    fs.writeFile(path.join(__dirname,'./clock/index.html'),newHtml,function(err){
            if(err){
                return console.log('写入html文件失败',err.message);
            }
            console.log('写入html页面成功');
            
    })
 }   