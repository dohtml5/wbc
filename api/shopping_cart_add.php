<?php

    session_start();
	date_default_timezone_set("Asia/Shanghai");

	require_once ('util/db.php');

    $gid = $_GET["gid"];
    @$uid = $_SESSION["user"][0]["id"];
    // $now = date("Y-m-d h:i:s");

    if (!isset($uid)) {
        $uid = 1;
    }
 
    $data = Array (
        "gid" => $gid,
        "uid" => $uid,
        "count" => 1
    );

    $db->where('gid', $gid);
    $db->where('uid', $uid);
    $item = $db->getOne('cart');

    if (isset($item)) {
        $db->where('gid', $gid);
        $db->where('uid', $uid);
        $id = $db->update('cart', Array("count" => $item['count'] + 1));
    } else {
        $id = $db->insert('cart', $data);
    }

    // sleep(2);

    if ($id) {
        echo json_encode(array("success" => true, "message" => "保存成功"));
    } else {
        echo json_encode(array("success" => false, "message" => "保存失败"));
    }

?>