!function(window, document, $, undefined) {

	var init = function() {
		initHandleBarsHelper();

		initGList(getCartList);
		initEvent();

	};

	var getCartList = function() {

		var url = '../../api/shopping_cart_list.php';
		$.get(url, function(response) {
			if (response.success) {
				$('#cartNum').html(response.total);
			} else {
				// TODO
			}
		}, 'json');

	};

	var initEvent = function() {
		$('#logout').on('click', onLogoutClick);
		$('#gList').on('click', '.cart-btn', onCartBtnClick);
		// TODO
		$('#cartListBtn').on('click', onCartListBtnClick);
		$('#cartListBtn').on('blur', onCartListBtnBlur);
	};

	var onCartListBtnBlur = function() {
		$(this).removeClass('active').next('.cart-wp').hide();
	};

	var onCartListBtnClick = function() {
		$(this).addClass('active').next('.cart-wp').show();
	};

	var onCartBtnClick = function() {
		var gid = $(this).attr('gid');
		var url = '../../api/shopping_cart_add.php';

		$.get(url, {gid: gid}, function(response) {
			if (response.success) {
				getCartList();
			} else {
				// TODO
			}
		}, 'json');

	};

	var initHandleBarsHelper = function() {
		Handlebars.registerHelper('strCut', function(str, options){
			var len = str.length;
			if (len > 8) {
				str = str.substr(0, 8) + '...';
			}
			return str;
		});
	};


	var initGList = function(callback) {
		var url = '../../api/shopping_goods_list.php';
		$.get(url, {size: 8, classify: 1}, function(response) {
			if (response.success) {

				var source, template, html;
				source = $("#gListTpl").html();
				template = Handlebars.compile(source);
				html = template(response);
				$('#gList').html(html);

				callback && callback();

			} else {
				// TODO
			}
		}, 'json');
	};

	var onLogoutClick = function() {

		var url = '../../api/shopping_user_logout.php';

		$.get(url, function(response) {
			location.href = 'index.php';
		}, 'json');

	};

	$(document).ready(init);

}(window, document, jQuery);