<?php

	require_once('util/db.php');

    @$ids = $_GET['ids'];

	$sql = "delete from books where id in ($ids)";

	// echo $sql;

    // $db->where('id', Array($ids), 'IN');
    // $db->where('id', Array( 'IN' => Array($ids) ) );

    sleep(2);

	$books = $db -> rawQuery($sql);

	// var_dump($books);

    if (1) {
        echo json_encode(Array("success" => true, "message" => "删除成功"));
    } else {
        echo json_encode(Array("success" => false, "message" => "删除失败"));
    }

?>