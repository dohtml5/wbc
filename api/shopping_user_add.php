<?php

	date_default_timezone_set("Asia/Shanghai");

	require_once ('util/db.php');

	$username = $_GET["username"];
    $password = $_GET["password"];
    $email = $_GET["email"];
    $mobile = $_GET["mobile"];
    // $now = date("Y-m-d h:i:s");

    $data = Array (
        "username" => $username,
        "password" => $password,
        "email" => $email,
        "mobile" => $mobile,
        "type" => 1
    );

    $id = $db->insert ('user', $data);

    sleep(2);

    if ($id > 0) {
        echo json_encode(array("success" => true, "message" => "保存成功"));
    } else {
        echo json_encode(array("success" => false, "message" => "保存失败"));
    }

?>