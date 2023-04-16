//导入需要的包 moment
const moment=require('moment')


const newTime1=moment().format('YYYY-MM-DD HH:mm:ss')
const newTime2=moment().format('YYYY年MM月DD日 HH时:mm分:ss秒')

console.log(newTime1);console.log(newTime2);
