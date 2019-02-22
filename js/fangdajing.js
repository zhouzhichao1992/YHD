/*$(function(){
	$("#header").load("../indexHeader/index.html");	
	$("#footer").load("../indexFooter/index.html");	
	//改变图片
	// var hx = location.href;
	// var bid = hx.split("?")[1].split("&")[0].split("=")[1];
// 	$.ajax({
// 		url : "../indexmain/index.json",
// 		success : function(res,status,xhr){
// 			$("#Bimg").attr("src","../img/"+res[bid-1].src);
// //			../img/tigerDome1.jpg
// 			$("#imgMove").attr("src","../img/"+res[bid-1].src);
// 			$("#magnT").html(res[bid-1].uName);
// 			$("#price").html(res[bid-1].price);		
// 		},
// 	});
	//点击加数量
	$("#add").click(function(){
		var num = $("#num").html();
		num++;
		$("#num").html(num);
	})
	$("#reduce").click(function(){
		var num = $("#num").html();
		if(num == 0){
			num = 0;
		}else{
			num--;
		}
		$("#num").html(num);
	})
	//将数量放入购物车
	$(".car").hover(function(){
		$(this).css("cursor","hand");
		
	})
	$(".car").click(function(){
		var num = $("#num").html();
		$("#sNum").html(num);
		if(num != 0){
			alert("已成功加入购物车");
		}
	})
	//获取保存购物车的数据
	var userName = decodeURI(location.href.split("&")[1].split("=")[1]);
	$(".car").click(function(){
		var num = $("#num").html();
		var obj = [
			{
				"bid":bid,
				"num":num
			}
		];
		var objStr = JSON.stringify(obj);
		if(localStorage.getItem(userName+"goods")){
			var storGoods = localStorage.getItem(userName+"goods");
			var storGoodsJson = JSON.parse(storGoods);
			var flag = false;
			for(var i = 0; i < storGoodsJson.length; i++){
				if(storGoodsJson[i].bid == bid){
					storGoodsJson[i].num = num;
					flag = true;
					break;
				}
			}
			if(!flag){
				var goodObj = {
					"bid":bid,
					"num":num
				}
				storGoodsJson.push(goodObj);
			}
			var storGoodsStr = JSON.stringify(storGoodsJson);
			localStorage.setItem(userName+"goods",storGoodsStr);
		}else{
			localStorage.setItem(userName+"goods",objStr);
		}	
	})
	var uname = decodeURI(location.href.split("&")[1].split("=")[1]);
	$(".goShpping").click(function(){
//		var userName = decodeURI(location.href.split("&")[1].split("=")[1]);
		$(location).attr("href","../goCar/index.html?uName="+uname);
	})
})*/
window.onload = function(){
	//放大镜
	var magnL = document.getElementsByClassName("magnL")[0]; 
	var imgBox = document.getElementsByClassName("imgBox")[0];	
	$id("bigImg").onmouseenter = function(){
		imgBox.style.display = "block";
		$id("imgDome").style.display = "block";
	}
	$id("bigImg").onmouseleave = function(){
		imgBox.style.display = "none";
		$id("imgDome").style.display = "none";
	}
	$id("bigImg").onmousemove = function(e){
		var e = e || event;
		var sTop = document.documentElement.scrollTop;
		
		var l = e.clientX - magnL.offsetLeft - imgBox.offsetWidth/2 - 40;
		var t = e.clientY - magnL.offsetTop - imgBox.offsetHeight/2 - 35 + sTop;
		var maxL = $id("bigImg").clientWidth - imgBox.offsetWidth;
		var maxT = $id("bigImg").clientHeight - imgBox.offsetHeight;
		l = l < 0 ? 0 : ( l > maxL ? maxL : l);
		t = t < 0 ? 0 : ( t > maxT ? maxT : t);
		imgBox.style.left = l + "px";
		imgBox.style.top = t + "px";
		//大图显示：
		// bigImgLeft / l = (大图的宽度-大图可视区宽度)/(小图宽度-mask的宽度) = 大图宽度/小图宽度 = 大图可视区宽度 / 小图可视区（mask）宽度	
		$id("imgMove").style.left = (- l * 5/3) + "px";
		$id("imgMove").style.top = (- t * 5/3) + "px";	
	}
}
	

