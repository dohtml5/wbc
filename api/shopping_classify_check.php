<?php

require_once ('util/db.php');

$name = $_GET['name'];

$sql = "select count(*) as count from classify where name='$name'";

$classify = $db -> rawQuery($sql);

$total = $classify[0]['count'];

// sleep(2);

if ($total) {
	echo json_encode(Array("success" => false, "total" => $total));
} else {
	echo json_encode(Array("success" => true, "total" => 0));
}

?>