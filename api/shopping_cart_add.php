<?php

    session_start();
	date_default_timezone_set("Asia/Shanghai");

	require_once ('util/db.php');

    $gid = $_GET["gid"];
    $uid = $_SESSION["user"][0]["id"];
    // $now = date("Y-m-d h:i:s");

    $data = Array (
        "gid" => $gid,
        "uid" => $uid
    );

    $id = $db->insert ('cart', $data);

    sleep(2);

    if ($id > 0) {
        echo json_encode(array("success" => true, "message" => "保存成功"));
    } else {
        echo json_encode(array("success" => false, "message" => "保存失败"));
    }

?>