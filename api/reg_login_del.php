<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
<?php

	date_default_timezone_set("Asia/Shanghai");

	require_once ('util/db.php');

	$id = $_GET["id"];

    $sql = "delete from reg_login where id = $id";

    $r = $db->doDelete($sql);

    sleep(2);

    if ($r > 0) {
        echo '删除成功！';
        echo '<script>setTimeout(function() {location.href="../regLoginDemo/userMng.php"}, 2000);</script>';
    } else {
        echo '删除失败';
    }

?>

</body>
</html>