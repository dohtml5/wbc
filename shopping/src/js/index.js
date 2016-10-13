!function(window, document, $, undefined) {

	var init = function() {
		initHandleBarsHelper();

		initGList(getCartList);
		initEvent();

	};

	var initEvent = function() {
		$('#logout').on('click', onLogoutClick);
		$('#gList').on('click', '.cart-btn', onCartBtnClick);
		$('#cartList').on('mouseenter', onCartListOver);
		$('#cartList').on('mouseleave', onCartListOut);
	};

	var getCartList = function() {

		var url = '../../api/shopping_cart_list.php';
		$.get(url, function(response) {
			if (response.success) {
				$('#cartNum').html(response.total);
				renderCartList(response);
			} else {
				// TODO
			}
		}, 'json');

	};

	var renderCartList = function(response) {
		
		var source, template, html;
		source = $("#cartTpl").html();
		template = Handlebars.compile(source);
		html = template(response);
		$('.cart-wp').html(html);

	};

	var onCartListOut = function() {
		$(this).find('a').removeClass('active').next('.cart-wp').hide();
	};

	var onCartListOver = function() {
		$(this).find('a').addClass('active').next('.cart-wp').show();
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

		// 设置图片路径
		Handlebars.registerHelper('setPicUrl', function(pic, options){

			return pic ? '../../api/uploadImgs/' + pic : 'img/default.png';
			
			/*if (pic) {
				return '../../api/uploadImgs/' + pic;
			} else {
				return 'img/default.png';
			}*/
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