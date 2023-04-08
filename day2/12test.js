//在外界使用require导入一个自定义模块的时候 得到的成员就是那个模块中module.exports={}
const custom= require('./11自定义模块')
console.log(custom);
custom.SayHi()

