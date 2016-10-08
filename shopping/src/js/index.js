!function(window, document, $, undefined) {

	var init = function() {
		initHandleBarsHelper();

		initGList(getCartList);
		initEvent();

		// initPopover();

	};

	var initPopover = function(data) {
		$('#cartListBtn').popover({
			title: '我的购物车',
			placement: 'bottom',
			container: 'body',
			trigger: 'focus',
			content: (function() {
				var trs = [];
				trs.push(
					'<table class="table table-bordered">',
						'<tr>',
							'<th>序号</th>',
							'<th>商品名</th>',
							'<th>价格</th>',
							'<th>个数</th>',
						'</tr>'
				);

				$.each(data, function(i, obj) {
					trs.push(
						'<tr>',
							'<td>', i + 1, '</td>',
							'<td>', obj.gid, '</td>',
							'<td>价格</td>',
							'<td>个数</td>',
						'</tr>'
					);
				});

				trs.push('</table>');

				return trs.join('');
			})(),
			html: true
		});

		/*$('#cartListBtn').on('shown.bs.popover', function () {
			var html = [
				'<table class="table table-bordered">',
					'<tr>',
						'<th>序号</th>',
						'<th>商品名</th>',
						'<th>价格</th>',
						'<th>个数</th>',
					'</tr>',
				'</table>'
			];



			$('.popover-content').html(html.join(''));
		});*/
	};

	var getCartList = function() {

		var url = '../../api/shopping_cart_list.php';
		$.get(url, function(response) {
			if (response.success) {
				$('#cartNum').html(response.total);
				$('#cartListBtn').popover('destroy');
				initPopover(response.data);
			} else {
				// TODO
			}
		}, 'json');

	};

	var initEvent = function() {
		$('#logout').on('click', onLogoutClick);
		// $('#cartListBtn').on('click', onCartListBtnClick);
		$('#gList').on('click', '.cart-btn', onCartBtnClick);
	};

	var onCartListBtnClick = function() {
		/*$('#cartListBtn').popover({
			title: '我的购物车',
			placement: 'bottom',
			container: 'body',
			html: true,
			content: '<table class="table"><tr><td>123</td><td>123</td><td>123</td><td>123</td><td>123</td></tr></table>'
		});*/
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