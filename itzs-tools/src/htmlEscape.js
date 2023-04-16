//定义转义html的方法
function htmlEscape (htmlstr) {
    // //g代表全局匹配
   return htmlstr.replace(/<|>|"|&|$|'/g,(match)=>{
        switch(match){
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp'
            case '$':
               return '&dollar'
            case "'":
               return '&lsquo'
        }
   })
}
//还原转义的html的方法
function htmlUnEscape (str) {
    return str.replace(/&lt;|&gt;|&quot;|&amp|&dollar|&lsquo/g,(match)=>{
        switch(match){
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case '&quot;':
                return '"'
            case '&amp':
                return '&'
            case '&dollar':
               return '$'
            case "&lsquo":
               return "'"
        }
    })
    
}
module.exports={
    htmlEscape,
    htmlUnEscape
}