<?php

	require_once('util/db.php');

    @$id = $_GET['id'];

	$sql = "delete from cart where id = $id";

    sleep(2);

    $r = $db->doDelete($sql);

    if ($r) {
        echo json_encode(Array("success" => true, "message" => "删除成功"));
    } else {
        echo json_encode(Array("success" => false, "message" => "删除失败"));
    }

?>