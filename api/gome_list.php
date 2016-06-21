<?php

require_once ('util/db.php');

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

$sql = "select * from gome where 1=1";
$sql2 = "select count(*) as count from gome where 1=1";

// if (isset($query) && $query != '') {
//     $sql .= " and (name like '%".$query."%' ";
//     $sql .= " or address like '%".$query."%' )";
//     $sql2 .= " and (name like '%".$query."%' ";
//     $sql2 .= " or address like '%".$query."%' )";
// }

// $sql .= " order by id desc";

$sql .= " order by id desc limit $start, $pageSize";

$list = $db -> rawQuery($sql);

$list_count = $db -> rawQuery($sql2);

$total = $list_count[0]['count'];

sleep(2);

if (isset($callback)) {
    echo $callback . '(' . json_encode(Array("success" => true, "total" => $total, "data" => $list) ) . ')';
} else {
    echo json_encode(Array("success" => true, "total" => $total, "data" => $list));
}

?>