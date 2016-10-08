!function(window, document, $, undefined) {

	var init = function() {
		$('#logout').on('click', onLogoutClick);
	};

	var onLogoutClick = function() {

		var url = '../../api/shopping_user_logout.php';

		$.get(url, function(response) {
			location.href = 'index.php';
		}, 'json');

	};

	$(document).ready(init);

}(window, document, jQuery);