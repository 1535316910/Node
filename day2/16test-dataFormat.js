//导入自定义的时间格式化模块

const time=require('./15dateFormat')

//调用方法进行格式化

const dt=new Date()
console.log(dt);
const newDate=time.dateFormat(dt);
console.log('格式化后的日期：'+newDate);