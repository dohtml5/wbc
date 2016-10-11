<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>WBC电商平台</title>

    <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/index.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>

    <div class="container">

        <nav class="navbar navbar-inverse navbar-static-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">WBC电商平台</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">首页</a></li>
                        <?php
                            if (isset($_SESSION['user'][0]['username'])) {
                        ?>
                        <li>
                            <a href="javascript:;">欢迎你：<?php echo $_SESSION['user'][0]['username']; ?> </a>
                        </li>
                        <li>
                            <a id="logout" href="javascript:;">退出</a>
                        </li>
                        <?php } else {?>
                        <li><a href="login.html">登录/注册</a></li>
                        <?php } ?>
                        <li><a href="#contact">我的订单</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>

    <div id="cartListWp" class="container">

		<script id="cartList" type="text/x-handlebars-template">
	     	<table class="table table-striped">
	     		<tr>
	     			<th>序号</th>
	     			<th>商品名</th>
	     			<th>价格</th>
	     			<th>个数</th>
	     			<th></th>
	     		</tr>
	     		{{#each data}}
	     		<tr>
	     			<td>{{add1 @index}}</td>
	     			<td>{{title}}</td>
	     			<td>{{price}}</td>
	     			<td>{{count}}</td>
	     			<td>del</td>
	     		</tr>
	     		{{/each}}
	     	</table>
     	</script>

    </div>

<script src="../bower_components/jquery/dist/jquery.min.js"></script>
<script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="../bower_components/handlebars/handlebars-v4.0.5.js"></script>
<script src="js/cart.js"></script>

</body>
</html>