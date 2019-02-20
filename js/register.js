$(function(){
	//用户名
	$("#userName").focus(function(){
		 $("#userNameText").animate({
				left : -80
		},1000)
		$(this).siblings("div").show();
		$(this).siblings("div").children("span").eq(0).show().siblings().hide();
		$(this).siblings("#succ").hide();
	})
	var userNameFlag = false;
	$("#userName").blur(function(){
		var uName = $("#userName").val();
		var strName = /^([\u2E80-\u9FFF]|(\w)){4,20}$/;
		if(uName.length == 0){
			$(this).siblings("div").children().eq(2).show().siblings().hide();
			$(this).siblings("div").next("#succ").hide();
		}else if(uName.length>20 || uName.length<4){
			$(this).siblings("div").children().eq(1).show().siblings().hide();
			$(this).siblings("div").next("#succ").hide();
		}else if(strName.test(uName)){
			$(this).siblings("div").hide().siblings().show();
			$(this).siblings("#succ").show();
			userNameFlag = true;
		}else{
			$(this).siblings("div").children().eq(1).show().siblings().hide();
			$(this).siblings("div").next("#succ").hide();	
		}
	})
	//手机号
	$("#phone").focus(function(){
		 $("#phoneText").animate({
				left : -80
		},1000)
		$(this).siblings("div").show();
		$(this).siblings("div").children("span").eq(0).show().siblings().hide();
		$(this).siblings("#succ").hide();
	})
	var phoneFlag = false;
	$("#phone").blur(function(){
		var phone = $("#phone").val();
		var strPhone = /^1[3-9]\d{9}$/;
		if(strPhone.test(phone)){
			$(this).siblings("div").hide().siblings().show();
				$(this).siblings("#succ").show();
			phoneFlag = true;
		}else{
			$(this).siblings("div").children().eq(1).show().siblings().hide();
			$(this).siblings("div").next("#succ").hide();	
		}
	})
	//密码
	$("#pwd").focus(function(){
		 $("#pwdText").animate({
				left : -80
		},1000)
		$(this).siblings("div").show();
		$(this).siblings("div").children("span").eq(0).show().siblings().hide();
		$(this).siblings("#succ").hide();
	})
	var pwdFlag = false;
	$("#pwd").blur(function(){
		var pwd = $("#pwd").val();
		var strPwd = /^([0-9a-zA-Z]|(\!)|(\.)|(\+)|(\?)|(\$)|(\^)|(,)|(`)|(\|)){6,20}$/;
		if(strPwd.test(pwd)){
			$(this).siblings("div").hide().siblings().show();
			$(this).siblings("#succ").show();
			pwdFlag = true;
		}else if(pwd == null){
			$(this).siblings("div").children().eq(1).show().siblings().hide();
			$(this).siblings("#succ").hide();
		}else{
			$(this).siblings("div").children().eq(2).show().siblings().hide();
			$(this).siblings("div").next("#succ").hide();	
		}
	})
	//再次确认密码
	$("#pwds").focus(function(){
		 $("#pwdsText").animate({
				left : -80
		},1000)
		$(this).siblings("div").show();
		$(this).siblings("div").children("span").eq(0).show().siblings().hide();
		$(this).siblings("#succ").hide();
	})
	var pwdsFlag = false;
	$("#pwds").blur(function(){
		var pwd = $("#pwd").val();
		var pwds = $("#pwds").val();
		console.log(pwd,pwds);
		if(pwdFlag){
			if(pwds == null){
				$(this).siblings("div").children().eq(1).show().siblings().hide();
				$(this).siblings("#succ").hide();
			}else if(pwd == pwds){
				$(this).siblings("div").hide().siblings().show();
				$(this).siblings("#succ").show();
				pwdsFlag = true;
			}else {
				$(this).siblings("div").children().eq(2).show().siblings().hide();
				$(this).siblings("div").next("#succ").hide();	
			}
		}else{
			$(this).siblings("div").children("span").eq(0).show().siblings().hide();	
		}
	})
	//判断是否可提交
	$("form").submit(function(){
		if(userNameFlag && phoneFlag && pwdFlag && pwdsFlag){
			return true;
		}else{
			return false;
		}
	})
});
