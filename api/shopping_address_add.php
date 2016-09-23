<?php

	date_default_timezone_set("Asia/Shanghai");

	require_once ('util/db.php');

    // $uid = $_GET["uid"];
	$prov = $_GET["prov"];
    $city = $_GET["city"];
    $area = $_GET["area"];
    $name = $_GET["name"];
    $mobile = $_GET["mobile"];
    $detail = $_GET["detail"];
// $now = date("Y-m-d h:i:s");

    $data = Array (
        "uid" => 1,
        "prov" => $prov,
        "city" => $city,
        "area" => $area,
        "name" => $name,
        "mobile" => $mobile,
        "detail" => $detail
    );

    $id = $db->insert ('address', $data);

    sleep(2);

    if ($id > 0) {
        echo json_encode(array("success" => true, "message" => "保存成功"));
    } else {
        echo json_encode(array("success" => false, "message" => "保存失败"));
    }

?>