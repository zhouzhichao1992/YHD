$(function(){
	$("#header").load("../indexHeader/index.html");	
	$("#footer").load("../indexFooter/index.html");	
	//轮播图
	var timer = setInterval(autoPlay,2000);
	var index = 0;
	function autoPlay(){
		index++;
		$(".rotationChart > ul >li").eq(index).fadeIn(500).siblings().fadeOut(500);
		$("ol >li").eq(index).addClass("current").siblings().removeClass("current");
		if(index == $(".rotationChart > ul >li").length-1){
			index = -1;
		}
	}
	$("ol > li").mouseenter(function(){
		clearInterval(timer);
		index = $(this).index()-1;
		autoPlay()
	}).mouseleave(function(){
		timer = setInterval(autoPlay,2000);
	})
	//倒计时
	var nowdate = new Date();
	var endtime = "2019 3 12";
	var enddate = new Date(endtime);
	var times = (enddate.getTime()-nowdate.getTime())/1000;
	function diff(){
		var s = parseInt(times)%60;
		var M = parseInt(times/60)%60;
		var h = parseInt(times/60/60);
		if(s<10){
			s = "0"+s;
		}
		if(M<10){
			M = "0"+M;
		}
		if(h<10){
			h = "0"+h;
		}
		$(".hour").html(h);
		$(".minute").html(M);
		$(".second").html(s);
	}
	diff();
	var timediff= setInterval(function(){
		times--;
			diff();	
	},1000);
	
});

	



