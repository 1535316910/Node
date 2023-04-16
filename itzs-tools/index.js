//这是包的入口文件
//将src的js方法导入
const date=require('./src/dateFormat')
const escape=require('./src/htmlEscape')


//向外的暴露的成员
module.exports={
    ...date,
    ...escape
}

