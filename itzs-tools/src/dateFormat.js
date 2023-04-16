//格式化时间的方法
function dateFormat(dateStr){
    const dt=new Date(dateStr)

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

//补零方法
function padZore(dateStr){
    return dateStr>9 ? dateStr:'0'+9
}

module.exports={
    dateFormat
}