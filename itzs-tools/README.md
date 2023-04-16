## 安装
```
npm instal itzs-tools
```
## 导入
```js
const itzs=require('itzs-tools')
```
## 格式化时间
```js
//调用dateFormat对时间进行格式化
const time= itzs.dateFormat(new Date())
//结果  2023-09-10 14:59:09
console.log(time);
```

## 转义html中的特殊字符
```js
//转义html标签  调用htmlEscape方法
const htmlStr='<h1 title="sabc">这是h1<span>123&nbsp;钱${}钱 点\'点</span></h1>'
const str= itzs.htmlEscape(htmlStr)
console.log(str);
```
## 将特殊字符转义为html标签
```js
//s将转义的标签 转换为符号  调用htmlUnEscape方法
const str2=itzs.htmlUnEscape(htmlStr)
console.log(str2);
```

### 开源协议
ISC


