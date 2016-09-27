<?php
    date_default_timezone_set("Asia/Shanghai");
    require_once ('util/db.php');

    $id = $_GET['id'];
    // $uid = $_GET['uid'];
    $prov = $_GET["prov"];
    $city = $_GET["city"];
    $area = $_GET["area"];
    $detail = $_GET["detail"];
    $name = $_GET["name"];
    $mobile = $_GET["mobile"];

    // $now = date("Y-m-d h:i:s");

    $data = Array (
    	"id" => $id,
        "uid" => 1,
        "prov" => $prov,
        "city" => $city,
        "area" => $area,
        "detail" => $detail,
        "name" => $name,
        "mobile" => $mobile
    );

    $db->where ('id', $id);

    sleep(2);

    if ($db->update ('address', $data)) {
        echo json_encode(array("success" => true, "message" => "修改成功"));
    } else {
        echo json_encode(array("success" => false, "message" => "修改失败"));
    }
    
?>