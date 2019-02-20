<?php
	include("public.php");
	$con = getConn("yhd");
	$uname = $_POST["uname"];
	$pwd = $_POST["pwd"];
	$sql = "SELECT * FROM `yhddata`";
	$row = mysqli_query($con,$sql);
	$flag = false;
	while($resultArr = mysqli_fetch_array($row)){
		if($resultArr["uname"] == $uname){
			$flag = true;
			if($resultArr["pwd"] == $pwd){
				echo "<script>alert('登录成功');location.href = '../index.html?uname=$uname';</script>";
			}else{
				echo "<script>alert('登录失败,密码错误');location.href = '../login.html';</script>";
			}
			break;
		}else{
			$flag = false;
		}
	}
	if($flag==false){
		echo "<script>alert('登录失败,用户名不存在');location.href = '../login.html';</script>";
	}
?>