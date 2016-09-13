<?php

require_once ('util/db.php');

@$cb = $_GET['callback'];
$u = $_GET['user'];
@$p = $_GET['pswd'];

$sql = "select * from users where id='$u' and password = '$p'";

$user = $db -> rawQuery($sql);

if ($user) {
	echo $cb . '(' . json_encode(Array("success" => true, "data" => $user, "message" => "请求成功")) . ')';
} else {
	echo $cb . '(' . json_encode(Array("success" => false, "data" => null, "message" => "请求失败"))  . ')';
}

?>