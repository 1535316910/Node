//在一个自定义模块中，默认情况下，module.exports={}
//向module.exports对象挂载username属性
const age=20
module.exports.username='zs'
module.exports.age=age

module.exports.sayHello=function(){
    console.log('hello'+this.username);
}

//让module.exports指向一个全新的对象
module.exports={
    nickname:'小黑',
    SayHi(){
        console.log('Hi!');
    }
}