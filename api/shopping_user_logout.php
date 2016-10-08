<?php
session_start();
require_once ('util/db.php');

session_destroy();

echo json_encode(Array("success" => true, "message" => "请求成功"));

?>