<?php

	date_default_timezone_set("Asia/Shanghai");

	require_once ('db.php');

	// $name = $_POST["name"];
	// $age = $_POST["age"];
	// $gender = $_POST["gender"];
	// $edu = $_POST["edu"];
	// $mobile = $_POST["mobile"];
	// $address = $_POST["address"];
	// $hobbies = $_POST["hobbies"];
	
	$name = $_GET["name"];
	$age = $_GET["age"];
	$gender = $_GET["gender"];
	$edu = $_GET["edu"];
	$mobile = $_GET["mobile"];
	$address = $_GET["address"];
	$hobbies = $_GET["hobbies"];
	$img = $_GET["img"];

	$now = date("Y-m-d h:i:s");

	// print_r($_GET);

	$data = Array (
        "name" => $name,
        "age" => $age,
        "gender" => $gender,
        "address" => $address,
        "mobile" => $mobile,
        "hobbies" => $hobbies,
        "user_img" => $img,
        "edu" => $edu,
        "regDate" => $now
    );

    $id = $db->insert ('usermng', $data);

    sleep(2);

    if ($id > 0) {
    	// echo 'success';
        echo json_encode(array("success" => true, "message" => "注册成功"));
    } else {
        echo json_encode(array("success" => false, "message" => "注册失败"));
    }

?>