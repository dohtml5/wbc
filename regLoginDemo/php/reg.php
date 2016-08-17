<?php
/**
 * Created by PhpStorm.
 * User: situ
 * Date: 2016/8/14
 * Time: 15:18
 */

$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];

require_once ('util/db.php');

$data = Array (
    "username" => $username,
    "password" => $password,
    "email" => $email
);

$id = $db->insert('wbc6_users', $data);

sleep(2);

if ($id > 0) {
//    echo "用户注册成功，请<a href='../login.html'>登录</a>";
    echo "success";
} else {
//    echo "用户注册失败，请<a href='../reg.html'>重试</a>";
    echo "failure";
}

?>
