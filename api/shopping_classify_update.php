<?php
    date_default_timezone_set("Asia/Shanghai");
    require_once ('util/db.php');

    $id = $_GET['id'];
    $name = $_GET["name"];
    // $now = date("Y-m-d h:i:s");

    $data = Array (
    	"id" => $id,
        "name" => $name
    );

    $db->where ('id', $id);

    sleep(2);

    if ($db->update ('classify', $data)) {
        echo json_encode(array("success" => true, "message" => "修改成功"));
    } else {
        echo json_encode(array("success" => false, "message" => "修改失败"));
    }
    
?>