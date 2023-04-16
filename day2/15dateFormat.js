//定义格式化时间的方法
function dateFormat(dateStr){
   const dt= new Date(dateStr)

   const y=dt.getFullYear()
   //月份要+1
   const m=padZore(dt.getMonth()+1)
   const d=padZore(dt.getDate())
   const hh=padZore(dt.getHours())
   const mm=padZore(dt.getMinutes())
   const ss=padZore(dt.getSeconds())

//    return `YYYY-MM-DD HH:mm:ss`
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
//定义补零函数
function padZore(n){
   return n>9 ? n:'0'+n
}

module.exports={
    dateFormat 
}