<?php
    date_default_timezone_set("Asia/Shanghai");
    require_once ('util/db.php');

    $id = $_GET['id'];
    $name = $_GET["name"];
    $author = $_GET["author"];
    $publisher = $_GET["publisher"];
    $price = $_GET["price"];
    $p_date = $_GET["p_date"];
    $classify = $_GET["classify"];
    $status = $_GET["status"];
	$borrow_status = $_GET["borrow_status"];

    // $now = date("Y-m-d h:i:s");

    $data = Array (
    	"id" => $id,
        "name" => $name,
        "author" => $author,
        "publisher" => $publisher,
        "p_date" => $p_date,
        "price" => $price,
        "classify" => $classify,
        "status" => $status,
        "borrow_status" => $borrow_status
    );

    $db->where ('id', $id);

    sleep(2);

    if ($db->update ('books', $data)) {
        echo json_encode(array("success" => true, "message" => "修改成功"));
    } else {
        echo json_encode(array("success" => false, "message" => "修改失败"));
    }
    
?>