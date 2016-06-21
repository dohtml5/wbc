<?php
	date_default_timezone_set("Asia/Shanghai");

	require_once ('util/db.php');
	
	$title = $_GET["title"];
	$price = $_GET["price"];
	$labels = $_GET["labels"];
	$comments = $_GET["comments"];
	$coupons = $_GET["coupons"];
	$is_recommend = $_GET["is_recommend"];
	$img = $_GET["img"];
	$sales = $_GET["sales"];

	$now = date("Y-m-d h:i:s");

	$data = Array (
        "title" => $title,
        "price" => $price,
        "labels" => $labels,
        "comments" => $comments,
        "coupons" => $coupons,
        "is_recommend" => $is_recommend,
        "img" => $img,
        "sales" => $sales
    );

    $id = $db->insert ('gome', $data);

    // sleep(2);

    if ($id > 0) {
        echo json_encode(array("success" => true, "message" => "添加成功"));
    } else {
        echo json_encode(array("success" => false, "message" => "添加失败"));
    }
?>