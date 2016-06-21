<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
<?php

	date_default_timezone_set("Asia/Shanghai");

	require_once ('db.php');
	
	$name = $_GET["name"];
	$age = $_GET["age"];
	$gender = $_GET["gender"];
	$edu = $_GET["edu"];
	$mobile = $_GET["mobile"];
	$address = $_GET["address"];
	$hobbies = $_GET["hobbies"];

	$now = date("Y-m-d h:i:s");

	// print_r($_GET);

	$data = Array (
        "name" => $name,
        "age" => $age,
        "gender" => $gender,
        "address" => $address,
        "mobile" => $mobile,
        "hobbies" => $hobbies,
        "edu" => $edu,
        "regDate" => $now
    );

    $id = $db->insert ('usermng', $data);

    if ($id > 0) {
        echo '恭喜，用户注册成功！<a href="../reg.html">返回</a>';
    } else {
        echo '注册失败，请稍后重试';
    }

?>

</body>
</html>