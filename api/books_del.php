<?php

	require_once('util/db.php');

    @$id = $_GET['id'];

    $db->where('id', $id);

    sleep(2);

    if ($db->delete('books')) {
        echo json_encode(Array("success" => true, "message" => "删除成功"));
    } else {
        echo json_encode(Array("success" => false, "message" => "删除失败"));
    }

?>