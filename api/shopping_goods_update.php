<?php
    date_default_timezone_set("Asia/Shanghai");
    require_once ('util/db.php');

    $id = $_GET['id'];
    $title = $_GET["title"];
    $price = $_GET["price"];
    $details = $_GET["details"];
    $amount = $_GET["amount"];
    $classify = $_GET["classify"];
    $status = $_GET["status"];

    // $now = date("Y-m-d h:i:s");

    $data = Array (
    	"id" => $id,
        "title" => $title,
        "price" => $price,
        "details" => $details,
        "amount" => $amount,
        "classify" => $classify,
        "status" => $status
    );

    $db->where ('id', $id);

    sleep(2);

    if ($db->update ('goods', $data)) {
        echo json_encode(array("success" => true, "message" => "修改成功"));
    } else {
        echo json_encode(array("success" => false, "message" => "修改失败"));
    }
    
?>