!function(window, document, $, undefined) {

	var $myDlg = $('#myDlg');
	var $cartListWp = $('#cartListWp');

	var init = function() {
		initHandleBarsHelper();
		initEvent();
		getCartList();
	};

	var initEvent = function() {
		$('#logout').on('click', onLogoutClick);
		$('#submitBtn').on('click', onSubmitBtnClick);
		$('#submitBtn2').on('click', onSubmitBtn2Click);
	};

	var onSubmitBtn2Click = function() {
		var gids = [], data, url;

		$cartListWp.find('input[name="gItems"]').each(function() {
			gids.push($(this).attr('gid'));
		});

		data = {
			gids: gids.join(','),
			addressId: $('input[name="address"]:checked').val()
		};

		url = '../../api/shopping_order_add.php';

		$.get(url, data, function(response) {
			if (response.success) {
				$myDlg.modal('hide');
				getCartList();
			} else {
				// TODO
			}
		}, 'json');

	};

	var onSubmitBtnClick = function() {
		$myDlg.modal('show');
	};

	var getCartList = function() {

		var url = '../../api/shopping_cart_list.php';
		$.get(url, function(response) {
			if (response.success) {
				renderCartList(response);
				renderTotalMoney(response);
			} else {
				// TODO
			}
		}, 'json');

	};

	var renderTotalMoney = function(response) {
		var total = 0;
		$.each(response.data, function(i, obj) {
			total += obj.count * obj.price;
		});
		$('#totalMoney').html(total);
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