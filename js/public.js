
//通过id名称获取元素
function $id(id){
	return document.getElementById(id);
}

//获取minNum-maxNum的随机数；
function getRand(minNum,maxNum){
	return parseInt(Math.random()*(maxNum - minNum +1))+minNum;
}

//随机获取十六进制颜色
function getColor(){
	var str = "0123456789abcdef";
	var color = "#";
	var rand = 0;
	for (var i = 0; i < 6; i++) {
		rand = getRand(0,15);
		color += str[rand];
	}
	return color;
}
//随机获取验证码
function getYZM(num){
	var yzm = "";
	for (var i = 0; i < num; i++) {
		var rand = getRand(48,122);
		if((rand >= 48 && rand <= 57) || (rand >= 65 && rand <= 90) || (rand >= 97 && rand <= 122)){
			var ch = String.fromCharCode(rand);
			yzm += ch;
		}else{
			i--;
		}
	}
	return yzm;
}

//把日期转化为字符串日期格式
function dateToString(date){//yy - MM - dd HH:mm:SS
	var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
	var y = date.getFullYear();
	var m = date.getMonth()+1;
	var d = date.getDate();
	var h = date.getHours();
	var f = date.getMinutes();
	var s = date.getSeconds();
	var w = date.getDay();//0-6;
	return y+"年"+dbNum(m)+"月"+dbNum(d)+"日 "+dbNum(h)+":"+dbNum(f)+":"+dbNum(s)+" "+week[w];
}
function dbNum(num){
	return num/10 < 1 ? 0 + "" + num : num;
}
//获取两个时间的时间差的秒数。
function diffTime(startTime,endTime){
	return (endTime.getTime() - startTime.getTime())/1000;
}

//跨浏览器兼容ie8及以下浏览器获取class命名的元素集合。
function getEleByClass(className){
	var tag = document.getElementsByTagName("*");
	var eleArr = [];
	for (var i = 0; i < tag.length; i++) {
		if(tag[i].className == className){
			eleArr.push(tag[i]);
		}
	}
	return eleArr;
}
//判断浏览器是否是ie
function isIE(name,ver){
	var appName = navigator.appName;
	var version = navigator.appVersion;
	var str = version.split(";")[1];
	var reg = /\s/g;
	//console.log(str.replace(reg,""))
	if(appName == name && str.replace(reg,"") == ver){
		return true;
	}
	return false;
}
//添加一个新的dom节点到指定节点的后面
function insertAfter(targetEle,newEle){
	var parentEle = targetEle.parentNode;
	if(parentEle.lastElementChild === targetEle){
		parentEle.appendChild(newEle);
	}else{
		parentEle.insertBefore(newEle,targetEle.nextElementSibling);
	}
}

//跨浏览器兼容ie8以下获取事件对象的button属性。
function getButton(eve){
	if(eve){
		return eve.button;
	}else{
		var button = event.button;
		switch(button){
			case 1:
				return 0;
			case 4:
				return 1;
			case 2:
				return 2;	
		}
	}
}

//跨浏览器兼容ie8以下获阻止冒泡
function stopBubbling(eve){
	var e = eve || event;
	if(typeof e.stopPropagation == "undefined"){
		e.cancelBubble = true;
	}else{
		e.stopPropagation();
	}
}

//跨浏览器兼容ie8以下获阻止事件默认行为
function preventdefault(eve){
	var e = eve || event;
	if(typeof e.preventDefault == "undefined"){
		e.returnValue = false;
	}else{
		e.preventDefault();
	}
}
//创建cookie
function setCookie(key,val,date){
	if(date){//如果传递了一个时间表示要设置有效期
		document.cookie = key+"="+val+";expires="+date;
	}else{//如果没有传递时间对象表示不需要设置有效期
		document.cookie = key+"="+val;
	}
}
//获取一个key的值
function getCookie(key){
	if(document.cookie){
		//userName=tom; age=23; pwd=123
		var cookieInfo = document.cookie;
		//console.log(cookieInfo);
		var cookieInfoArr = cookieInfo.split("; ");
		
		//console.log(cookieInfoArr);
		for (var i = 0; i < cookieInfoArr.length; i++) {
			if(cookieInfoArr[i].split("=")[0] == key){
				return cookieInfoArr[i].split("=")[1];
			}
		}
	}else{
		return "";
	}
}
//删除key
function delCookie(key){
	document.cookie = key + "=;expires=" + new Date(0); 
}
//跨浏览器获取元素计算后的样式
function getStyle(ele,attr){
		return window.getComputedStyle ? window.getComputedStyle(ele)[attr] : ele.currentStyle[attr];
	}






