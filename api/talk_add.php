<?php

	date_default_timezone_set("Asia/Shanghai");

	require_once ('util/db.php');

	$uid = $_GET["uid"];
    $msg = $_GET["msg"];
	$ctime = date("Y-m-d h:i:s");

	$data = Array (
        "uid" => $uid,
        "ctime" => $ctime,
        "msg" => $msg
    );

    $id = $db->insert ('talk', $data);
	
    if ($id > 0) {
        echo json_encode(array("success" => true, "message" => "保存成功"));
    } else {
        echo json_encode(array("success" => false, "message" => "保存失败"));
    }

?>