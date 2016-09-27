<?php
    date_default_timezone_set("Asia/Shanghai");
    require_once ('util/db.php');

    $ids = $_GET['ids'];
    $status = $_GET['status'];

    $sql = "update goods set status=$status where id in ($ids)";

    sleep(2);

    $r = $db->execSQL($sql);

    if ($r) {
        echo json_encode(array("success" => true, "message" => "修改成功"));
    } else {
        echo json_encode(array("success" => false, "message" => "修改失败"));
    }
    
?>