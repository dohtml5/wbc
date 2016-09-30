<?php

require_once ('util/db.php');

$ids = $_GET['ids'];
$status = $_GET['status'];

if (!isset($status)) {
	$status = 1;
}

$sql = "update user set status = $status where id in ($ids)";

$r = $db->execSQL($sql);

if ($r) {
	echo json_encode(Array("success" => true, "message" => "请求成功"));
} else {
	echo json_encode(Array("success" => false, "message" => "请求失败"));
}

?>