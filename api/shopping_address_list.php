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

$sql = "select * from address where 1=1";
$sql2 = "select count(*) as count from address where 1=1";

if (isset($query) && $query != '') {
    $sql .= " and title like '%".$query."%' ";
    $sql2 .= " and title like '%".$query."%' ";
}

$sql .= " order by id desc limit $start, $pageSize";

$address = $db -> rawQuery($sql);

$address_count = $db -> rawQuery($sql2);
$total = $address_count[0]['count'];

sleep(2);

if ($address) {
	echo json_encode(Array("success" => true, "total" => $total, "data" => $address, "message" => "请求成功"));
} else {
	echo json_encode(Array("success" => false, "total" => 0, "data" => [], "message" => "请求失败"));
}

?>