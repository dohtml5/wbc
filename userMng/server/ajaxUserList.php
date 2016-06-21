<?php

require_once ('db.php');

@$callback = $_GET['callback'];
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

$sql = "select * from usermng where 1=1";
$sql2 = "select count(*) as count from usermng where 1=1";

if (isset($query) && $query != '') {
    $sql .= " and (name like '%".$query."%' ";
    $sql .= " or address like '%".$query."%' )";
    $sql2 .= " and (name like '%".$query."%' ";
    $sql2 .= " or address like '%".$query."%' )";
}

// $sql .= " order by id desc";

$sql .= " order by id desc limit $start, $pageSize";

$wbc2_user = $db -> rawQuery($sql);

// 得到总数
// $wbc2_user_count = $db -> get('usermng');
// $total = $db->count;

$wbc2_user_count = $db -> rawQuery($sql2);
// print_r($wbc2_user_count[0]['count']);

$total = $wbc2_user_count[0]['count'];

sleep(2);

if (isset($callback)) {
    echo $callback . '(' . json_encode(Array("success" => true, "total" => $total, "data" => $wbc2_user) ) . ')';
} else {
    echo json_encode(Array("success" => true, "total" => $total, "data" => $wbc2_user));
}

?>