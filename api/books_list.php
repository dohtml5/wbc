<?php

require_once ('util/db.php');

@$query = $_GET['query'];
@$pageSize = $_GET['size'];

@$page = $_GET['page'];
if (!isset($page)) {
    $page = 0;
}

if (!isset($pageSize)) {
    $pageSize = 20;
}

$start = $pageSize * $page;

$sql = "select * from books where 1=1";
$sql2 = "select count(*) as count from books where 1=1";

if (isset($query) && $query != '') {
    $sql .= " and name like '%".$query."%' ";
    $sql2 .= " and name like '%".$query."%' ";
}

$sql .= " order by id desc limit $start, $pageSize";

$books = $db -> rawQuery($sql);

$books_count = $db -> rawQuery($sql2);
$total = $books_count[0]['count'];

sleep(2);

if ($books) {
	echo json_encode(Array("success" => true, "total" => $total, "data" => $books, "message" => "请求成功"));
} else {
	echo json_encode(Array("success" => true, "total" => 0, "data" => [], "message" => "请求失败"));
}

?>