<?php
session_start();
require_once ('util/db.php');

@$query = $_GET['query'];
@$pageSize = $_GET['size'];
@$uid = $_SESSION['user'][0]['id'];
@$type = $_SESSION['user'][0]['type'];

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

$sql = "select * from orders where 1=1";
$sql2 = "select count(*) as count from orders where 1=1";

// echo $type;

if (isset($type) && $type == 1) {
	$sql .= " and uid=$uid";
    $sql2 .= " and uid=$uid";
}

/*if (isset($query) && $query != '') {
    $sql .= " and title like '%".$query."%' ";
    $sql2 .= " and title like '%".$query."%' ";
}*/

$sql .= " order by id desc limit $start, $pageSize";

// echo $sql;

$order = $db -> rawQuery($sql);

$order_count = $db -> rawQuery($sql2);
$total = $order_count[0]['count'];

// print_r($order[0]);
//////////////////////////////////////////////////////////////

foreach ($order as $key => $value) {

	// print_r($key);

	$db->where('id', explode(",", $value['gids']), 'IN');
	$goods = $db->get('goods');

	$db->where('id', $value['uid'], '=');
	$user = $db->get('user');

	$db->where('id', $value['addressId'], '=');
	$address = $db->get('address');

	// TODO 商品个数

	$order[$key]["goods"] = $goods;
	$order[$key]["user"] = $user;
	$order[$key]["address"] = $address;

}


/*$db->where('id', explode(",", $order[0]['gids']), 'IN');
$goods = $db->get('goods');

$db->where('id', $order[0]['uid'], '=');
$user = $db->get('user');

$db->where('id', $order[0]['addressId'], '=');
$address = $db->get('address');*/

// print_r($address);
//////////////////////////////////////////////////////////////

// sleep(2);

/*$order["goods"] = $goods;
$order["user"] = $user;
$order["address"] = $address;*/

if ($order) {
	echo json_encode(Array("success" => true, "total" => $total, "data" => $order, "message" => "请求成功"));
} else {
	echo json_encode(Array("success" => false, "total" => 0, "data" => [], "message" => "请求失败"));
}

?>