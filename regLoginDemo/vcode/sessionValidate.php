<?php
session_start();
//在页首先要开启session,
//error_reporting(2047);
session_destroy();
//将session去掉，以每次都能取新的session值;
//用seesion 效果不错，也很方便
?>
<html>
<head>
<title>session 图片验证实例</title>
<style type="text/css">
#login p{
margin-top: 15px;
line-height: 20px;
font-size: 14px;
font-weight: bold;
}
#login img{
cursor:pointer;
}
form{
margin-left:20px;
}
</style>
</head> 
<body> 

<form id="login" action="" method="post">
<p>此例为session验证实例</p>
<p>
<span>验证码：</span>
<input type="text" name="validate" value="" size=10> 
<img  title="点击刷新" src="./captcha.php" align="absbottom" onclick="this.src='captcha.php?'+Math.random();"></img>
</p>
<p>
<input type="submit">
</p>
</form>
<?php
//打印上一个session;
//echo "上一个session：<b>".$_SESSION["authnum_session"]."</b><br>";
$validate="";
if(isset($_POST["validate"])){
$validate=$_POST["validate"];
echo "您刚才输入的是：".$_POST["validate"]."<br>状态：";
if($validate!=$_SESSION["authnum_session"]){
//判断session值与用户输入的验证码是否一致;
echo "<font color=red>输入有误</font>"; 
}else{
echo "<font color=green>通过验证</font>"; 
}
} 
/*
//打印全部session;
PrintArr($_SESSION);
function PrintArr($aArray){
echo '<xmp>';
print_r($aArray);
echo '</xmp>';
}
*/
?>