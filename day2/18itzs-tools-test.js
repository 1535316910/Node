const itzs=require('../itzs-tools')

const a= itzs.dateFormat(new Date())
console.log(a);
console.log('-------------------');
//转义html标签
const htmlStr='<h1 title="sabc">这是h1<span>123&nbsp;钱${}钱 点\'点</span></h1>'
const str= itzs.htmlEscape(htmlStr)
console.log(str);
console.log('-------------------');
//s将转义的标签 转换为符号
const str2=itzs.htmlUnEscape(htmlStr)
console.log(str2);