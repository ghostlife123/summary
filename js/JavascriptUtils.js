//非空判断
function isSpace(strMain) {
	var strComp = strMain;
	try {
		if (strComp == "  " || strComp == "" || strComp == " "
				|| strComp == null || strComp == "null" || strComp.length == 0
				|| typeof strMain == "undefined" || strMain == "undefined") {
			return true;
		} else {
			return false;
		}
	} catch (e) {
		return false;
	}
}

//中文汉字特殊字符转码
function codeURI(strMain){
	return encodeURI(encodeURI(strMain));
}

/*
 * 格式化日期 无汉字
	格式一:yyyy-MM-dd hh:mm:ss
	格式二:yyyy-MM-dd
 * 
*/
Date.prototype.formatNoCh = function(fmt) { 
     var o = { 
        "M+" : this.getMonth()+1,                 //月份 
        "d+" : this.getDate(),                    //日 
        "h+" : this.getHours(),                   //小时 
        "m+" : this.getMinutes(),                 //分 
        "s+" : this.getSeconds(),                 //秒 
        "q+" : Math.floor((this.getMonth()+3)/3), //季度 
        "S"  : this.getMilliseconds()             //毫秒 
    }; 
    if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    }
     for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
         }
     }
    return fmt; 
}   

/*
 * 格式化日期 汉字形式
	年-月-日
*/
Date.prototype.format2Ch=function(){
    var year = this.getFullYear()+'年';
    var month = this.getMonth()+1+'月';
    if(this.getMonth().length=1){
    	month='0'+month;
    }
    var date = this.getDate()+'日';
    if(this.getDate().length=1){
    	date='0'+date;
    }
    return ([year,month,date].join('-'));
}

/**
 * 正在表达式判断
 * 	"g"、"i"		全局匹配,区分大小写
 */
function isRegex(reg,strMain){
	try{
		var reg_= new RegExp(reg,"i");
		if(reg_.test(strMain)){
			return true;
		}else{
			return false;
		}
	}catch(e){
		return false;
	}
	
}
/**
 * 非法字符判断
 * 
 * */
function isIllegalStr(strMain){
	try{
		var pat=new RegExp("[^a-zA-Z0-9\_\u4e00-\u9fa5]","i"); 
		var str=strMain.trim();
	  	if(pat.test(str)){   
	    	return true;
	  	}else{
	  		return false;   
	  	}
  	}catch(e){
		return false;
	}
}



