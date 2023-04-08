const path=require('path')
//定义文件的存放路径
const fpath='/a/b/c/index.html'
const fullName= path.basename(fpath)
console.log(fullName);

//不想要后缀名（扩展名）
const nameWithoutExt=path.basename(fpath,'.html')
console.log(nameWithoutExt);

//获取路径中的文件扩展名
const ext= path.extname(fpath)
console.log('获取路径中的文件扩展名'+ext);