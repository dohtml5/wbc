<?php

require_once ('util/db.php');

@$query = $_GET['query'];
@$pageSize = $_GET['size'];
@$status = $_GET['status'];

if (!isset($status)) {
    $status = 1;
}

@$page = $_GET['page'];
if (!isset($page)) {
    $page = 0;
}

if (!isset($pageSize)) {
    $pageSize = 20;
}

$start = $pageSize * $page;

$sql = "select * from user where 1=1 and status=$status";
$sql2 = "select count(*) as count from user where 1=1 and status=$status";

if (isset($query) && $query != '') {
    $sql .= " and username like '%".$query."%' ";
    $sql2 .= " and username like '%".$query."%' ";
}

$sql .= " order by id desc limit $start, $pageSize";

$user = $db -> rawQuery($sql);

$user_count = $db -> rawQuery($sql2);
$total = $user_count[0]['count'];

sleep(2);

if ($user) {
	echo json_encode(Array("success" => true, "total" => $total, "data" => $user, "message" => "请求成功"));
} else {
	echo json_encode(Array("success" => false, "total" => 0, "data" => [], "message" => "请求失败"));
}

?>