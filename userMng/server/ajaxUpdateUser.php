<?php
    date_default_timezone_set("Asia/Shanghai");
    require_once ('db.php');

    $id = $_GET['id'];
    $name = $_GET["name"];
	$age = $_GET["age"];
	$gender = $_GET["gender"];
	$edu = $_GET["edu"];
	$mobile = $_GET["mobile"];
	$address = $_GET["address"];
	$hobbies = $_GET["hobbies"];

    $now = date("Y-m-d h:i:s");

    $data = Array (
    	"id" => $id,
        "name" => $name,
        "age" => $age,
        "gender" => $gender,
        "address" => $address,
        "mobile" => $mobile,
        "hobbies" => $hobbies,
        "edu" => $edu,
        "regDate" => $now
    );

    $db->where ('id', $id);

    sleep(2);

    if ($db->update ('usermng', $data)) {
        echo json_encode(array("success" => true, "message" => "修改成功"));
    } else {
        echo json_encode(array("success" => false, "message" => "修改失败"));
    }
    
?>