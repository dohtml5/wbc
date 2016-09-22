<?php

	require_once('util/db.php');

    @$ids = $_GET['ids'];

	$sql = "delete from goods where id in ($ids)";

    sleep(2);

	$goods = $db -> rawQuery($sql);

	// var_dump($books);

    if (1) {
        echo json_encode(Array("success" => true, "message" => "删除成功"));
    } else {
        echo json_encode(Array("success" => false, "message" => "删除失败"));
    }

?>