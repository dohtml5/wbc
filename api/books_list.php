<?php

require_once ('util/db.php');

$sql = "select * from books order by id desc";
$sql2 = "select count(*) as count from books";

$books = $db -> rawQuery($sql);

// 得到总数
// $wbc2_user_count = $db -> get('usermng');
// $total = $db->count;

$books_count = $db -> rawQuery($sql2);
$total = $books_count[0]['count'];

sleep(2);

if ($books) {
	echo json_encode(Array("success" => true, "total" => $total, "data" => $books, "message" => "请求成功"));
} else {
	echo json_encode(Array("success" => false, "total" => 0, "data" => [], "message" => "请求失败"));
}


?>