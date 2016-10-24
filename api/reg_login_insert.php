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

	$username = $_POST["username"];
    $password = $_POST["password"];
    $email = $_POST["email"];
    @$gender = $_POST["gender"];
    $edu = $_POST["edu"];
    $desc = $_POST["desc"];
    @$hobbies = $_POST["hobbies"];
    $pic = $_POST["pic"];
    // $now = date("Y-m-d h:i:s");

    $db->where('username', $username, '=');
    $user = $db->get('reg_login');

    if (empty($username)) {
        echo '用户名不能为空！';
        return;
    }

    if (!empty($user)) {
        echo '用户名已经被占用，请换一个试试！';
        return;
    }

    die;

    $data = Array(
        "username" => $username,
        "password" => $password,
        "email" => $email,
        "gender" => $gender,
        "edu" => $edu,
        "desc" => $desc,
        "hobbies" => implode('|', $hobbies),
        "pic" => $pic
    );

    /*print_r($data);

    die;*/

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