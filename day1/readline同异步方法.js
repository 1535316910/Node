var readline = require('readline');
var  rl = readline.createInterface(process.stdin, process.stdout);

/*
*  方法setPromat(promat)，就是给每一行设置一个提示符，就好比window命令行的> ，我们这里设置的是Test>
*  promat()可以算是最重要的方法了，因为它才体现了Readline的核心作用，以行为单位读取数据，premat方法就是在等待用户输入数据
*  这里又监听了’line’ 事件，因为promat方法调用一次就只会读取一次数据，所以，在这个方法又调用了一次promat方法，这样就可以继续读取用户输入，从而达到一种命令行的效果
*/

rl.setPrompt('Test> ');
rl.prompt();
 var a=null;


rl.on('line', function(line) {
    switch(line.trim()) {
        case 'copy':
            console.log("复制");
            break;
        case 'hello':
            console.log('world!');
            break;
        case 'close':
            rl.close();
            break;
        default:
            console.log('没有找到命令！');
            break;
    }
    rl.prompt();
    a=line.trim();
    console.log("哈哈"+line.trim());

});
console.log("哈哈哈哈"+a);

rl.on('close', function() {
    console.log('bye bye!');
    process.exit(0);
});


//上面都是异步  下面同步
//引入readline-sync模块
const readline = require('readline-sync');  
var name = readline.question("你叫什么名字？"); 
console.log("嗨"+name+"，很高兴见到你。");
//你叫什么名字？terry
//嗨terry，很高兴见到你。
