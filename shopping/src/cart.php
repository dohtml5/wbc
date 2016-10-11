<?php
    session_start();
?>
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
                        <li class="active"><a href="index.php">首页</a></li>
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
                        <li><a href="#contact">收货地址</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>

    <div id="cartListWp" class="container">

		<script id="cartList" type="text/x-handlebars-template">
	     	<table class="table table-striped">
	     		<tr>
	     			<th><input type="checkbox"></th>
	     			<th>序号</th>
	     			<th>商品名</th>
	     			<th>价格</th>
	     			<th>个数</th>
	     			<th></th>
	     		</tr>
	     		{{#each data}}
	     		<tr>
	     			<td><input name="gItems" gid="{{id}}" type="checkbox"></td>
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
    <hr>

    <div>
    	<button id="submitBtn" class="btn btn-danger pull-right">
    		总金额：<span id="totalMoney">0</span>，提交订单
    	</button>
    </div>

    <div id="myDlg" class="modal fade">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
	        <h4 class="modal-title">提交订单</h4>
	      </div>
	      <div class="modal-body">
	        <p>
	        	<h5>选择收货地址：</h5>
				<ul>
					<li><input value="1" name="address" type="radio"> 北京市 昌平区 生命科学园 珠江摩尔大厦7号楼</li>
					<li><input value="5" name="address" type="radio"> 北京市 昌平区 生命科学园 珠江摩尔大厦5号楼</li>
					<li><input value="9" name="address" type="radio"> 北京市 昌平区 生命科学园 珠江摩尔大厦3号楼</li>
				</ul>
	        </p>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
	        <button id="submitBtn2" type="button" class="btn btn-primary">确定并提交</button>
	      </div>
	    </div><!-- /.modal-content -->
	  </div><!-- /.modal-dialog -->
	</div><!-- /.modal -->


	<script src="../bower_components/jquery/dist/jquery.min.js"></script>
	<script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
	<script src="../bower_components/handlebars/handlebars-v4.0.5.js"></script>
	<script src="js/cart.js"></script>

</body>
</html>