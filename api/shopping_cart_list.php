<?php
session_start();
require_once ('util/db.php');

@$query = $_GET['query'];
@$pageSize = $_GET['size'];
@$uid = $_SESSION['user'][0]['id'];

@$page = $_GET['page'];
if (!isset($page)) {
    $page = 0;
}

if (!isset($pageSize)) {
    $pageSize = 20;
}

if (!isset($uid)) {
    $uid = 0;
}

$start = $pageSize * $page;

$sql = "select cart.id, amount, classify, count, details, gid, price, status, title, uid from cart, goods where cart.gid=goods.id and uid = $uid";
$sql2 = "select count(*) as count from cart, goods where cart.gid=goods.id and uid = $uid";

if (isset($query) && $query != '') {
    $sql .= " and title like '%".$query."%' ";
    $sql2 .= " and title like '%".$query."%' ";
}

$sql .= " order by cart.id desc limit $start, $pageSize";

$cart = $db -> rawQuery($sql);

$cart_count = $db -> rawQuery($sql2);
$total = $cart_count[0]['count'];

// sleep(2);

if ($cart) {
	echo json_encode(Array("success" => true, "total" => $total, "data" => $cart, "message" => "请求成功"));
} else {
	echo json_encode(Array("success" => false, "total" => 0, "data" => [], "message" => "请求失败"));
}

?>