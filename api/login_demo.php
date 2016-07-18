<?php

	// $username = $_GET["uname"];
	// $password = $_GET["pword"];
	$username = $_POST["uname"];
	$password = $_POST["pword"];

	if ($username == 'abc' && $password == '123123') {
		echo 'login success';
	} else {
		echo 'login failure, please try again later!';
	}

?>