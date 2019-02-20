<?php
	include("public.php");
	$con = getConn("yhd");
	$userName = $_POST["userName"];
	$pwd = $_POST["pwd"];
	$sql = "SELECT * FROM `yhddata`"; 
	$row = mysqli_query($con,$sql);
	$flag = false;
	while($reulstArr = mysqli_fetch_array($row)){
		if($reulstArr["uname"] == $userName){
			$flag = true;
			break;
		}
	}
	if($flag){
		echo "<script>alert('用户名已存在，请重新注册');location.href = '../register.html';</script>";
	}else{
		$sql = "insert into yhddata (uname,pwd) values ('$userName','$pwd')";
		$result = mysqli_query($con,$sql);
		if($result){
			echo "<script>alert('注册成功');location.href = '../login.html';</script>";
		}else{
			echo "<script>alert('注册失败');location.href = '../register.html';</script>";
		}
	}
?>