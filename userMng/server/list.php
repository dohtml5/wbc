<?php
	require_once('db.php');
	$users = $db -> get('usermng');
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

<h1>用户列表</h1>

<hr>

<table border="1">
	<tr>
		<th>姓名</th>
		<th>年龄</th>
		<th>性别</th>
		<th>电话</th>
		<th>住址</th>
		<th>学历</th>
		<th>爱好</th>
		<th></th>
	</tr>

<?php
	foreach ($users as $key => $value) {
?>
	<tr>
		<td><?php echo $value["name"]; ?></td>
		<td><?php echo $value["age"]; ?></td>
		<td><?php echo $value["gender"]; ?></td>
		<td><?php echo $value["mobile"]; ?></td>
		<td><?php echo $value["address"]; ?></td>
		<td><?php echo $value["edu"]; ?></td>
		<td><?php echo $value["hobbies"]; ?></td>
		<td></td>
	</tr>

<?php } ?>

</table>
	
</body>
</html>