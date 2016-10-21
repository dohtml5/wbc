<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
<?php

	date_default_timezone_set("Asia/Shanghai");

	require_once ('util/db.php');

	$username = $_GET["username"];
    $password = $_GET["password"];
    $email = $_GET["email"];
    // $mobile = $_GET["mobile"];
    // $now = date("Y-m-d h:i:s");

    $data = Array(
        "username" => $username,
        "password" => $password,
        "email" => $email
    );

    $id = $db->insert('reg_login', $data);

    sleep(2);

    if ($id > 0) {
        echo '恭喜，注册成功！点击<a href="../regLoginDemo/login.html">这里</a>登录';
    } else {
        echo '注册失败，请<a href="../regLoginDemo/reg.html">重新注册</a>';
    }

?>

</body>
</html>