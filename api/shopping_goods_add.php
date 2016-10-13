<?php

	date_default_timezone_set("Asia/Shanghai");

	require_once ('util/db.php');

	$title = $_GET["title"];
    $price = $_GET["price"];
    $details = $_GET["details"];
    $amount = $_GET["amount"];
    $classify = $_GET["classify"];
    $status = $_GET["status"];
    $pic = $_GET["pic"];
	// $now = date("Y-m-d h:i:s");

	$data = Array (
        "title" => $title,
        "price" => $price,
        "classify" => $classify,
        "status" => $status,
        "details" => $details,
        "amount" => $amount,
        "pic" => $pic
    );

    $id = $db->insert ('goods', $data);

    sleep(2);

    if ($id > 0) {
        echo json_encode(array("success" => true, "message" => "保存成功"));
    } else {
        echo json_encode(array("success" => false, "message" => "保存失败"));
    }

?>