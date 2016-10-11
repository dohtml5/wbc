<?php
    session_start();

	date_default_timezone_set("Asia/Shanghai");

	require_once ('util/db.php');

    $gids = $_GET["gids"];
	$addressId = $_GET["addressId"];
    $now = date("Y-m-d h:i:s");

    $data = Array (
        "gids" => $gids,
        "addressId" => $addressId,
        "ctime" => $now,
        "status" => "待发货",
        "uid" => $_SESSION['user'][0]['id']
    );

    $id = $db->insert('orders', $data);

    sleep(2);

    if ($id > 0) {
        /*$db->where('id', explode(',', $gids), 'IN');
        $db->delete('cart');*/
        echo json_encode(array("success" => true, "message" => "保存成功"));
    } else {
        echo json_encode(array("success" => false, "message" => "保存失败"));
    }

?>