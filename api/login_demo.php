<?php

//    $username = $_GET["user"];
//    $password = $_GET["key"];
	$username = $_POST["user"];
	$password = $_POST["key"];

	if ($username == 'abc' && $password == '123123') {
		echo '<script>location.href="../form/main.html"</script>';
	} else {
		echo 'µÇÂ¼Ê§°Ü£¬ÇëÖØÊÔ<a href="../form/wbc5.html">·µ»Ø</a>';
	}

?>