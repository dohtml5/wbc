<?php

	require_once('db.php');

    @$id = $_GET['id'];

    $db->where('id', $id);

    sleep(2);

    if ($db->delete('usermng')) {
        echo json_encode(Array("success" => true, "message" => "用户删除成功"));
    } else {
        echo json_encode(Array("success" => false, "message" => "用户删除失败"));
    }

?>