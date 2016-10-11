!function(window, document, $, undefined) {

	var init = function() {
		initHandleBarsHelper();
		initEvent();
		getCartList();
	};

	var initEvent = function() {
		$('#logout').on('click', onLogoutClick);
	};

	var getCartList = function() {

		var url = '../../api/shopping_cart_list.php';
		$.get(url, function(response) {
			if (response.success) {
				renderCartList(response);
			} else {
				// TODO
			}
		}, 'json');

	};

	var renderCartList = function(response) {
		
		var source, template, html;
		source = $("#cartList").html();
		template = Handlebars.compile(source);
		html = template(response);
		$('#cartListWp').html(html);

	};

	var initHandleBarsHelper = function() {
		// 截取字符串
		Handlebars.registerHelper('strCut', function(str, options){
			var len = str.length;
			if (len > 8) {
				str = str.substr(0, 8) + '...';
			}
			return str;
		});

		// 索引加一
		Handlebars.registerHelper('add1', function(index, options){
			return index + 1;
		});
	};


	var onLogoutClick = function() {

		var url = '../../api/shopping_user_logout.php';

		$.get(url, function(response) {
			location.href = 'index.php';
		}, 'json');

	};

	$(document).ready(init);

}(window, document, jQuery);