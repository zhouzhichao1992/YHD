	function animate(obj,fn){//2.减少了参数接收个数，让函数调用时使用更方便。
		if(typeof obj.speedTime == "undefined"){//3.对时间毫秒数的处理，调用时可传可不传。
			obj.speedTime = 30;
		}else if(obj.speedTime == "slow"){
			obj.speedTime = 50;
		}else if(obj.speedTime == "quickly"){
			obj.speedTime = 20;
		}else if(obj.speedTime == "fast"){
			obj.speedTime = 10;
		}
		clearInterval(obj.ele.timer);
		obj.ele.timer = setInterval(function(){
			var flag = true;//所有样式都到了目标值
			for(var attrKey in obj.param){//4.把样式和目标值作了一个整合
				var current = 0;
				if(attrKey == "opacity"){//透明度的当前值
					current = getStyle(obj.ele,attrKey) * 100;
				}else{//其它样式的当前值
					current = parseInt(getStyle(obj.ele,attrKey));
				}
				var speed = (obj.param[attrKey] - current)/10;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				if(current != obj.param[attrKey]){
					flag = false;
				}
				if(attrKey == "opacity"){//透明度的赋值
					obj.ele.style[attrKey] = (current + speed)/100;
				}else if(attrKey == "zIndex"){
					obj.ele.style[attrKey] =  obj.param[attrKey];
				}else{//其它样式赋值。
					obj.ele.style[attrKey] = current + speed + "px";
				}
			}
			if(flag){//清除定时器
				clearInterval(obj.ele.timer);
				if(typeof fn != "undefined"){
					fn();
				}
			}
		},obj.speedTime);
	}
	function getStyle(ele,attr){//返回的是一个字符串
		return window.getComputedStyle ? window.getComputedStyle(ele)[attr] : ele.currentStyle[attr];
	}