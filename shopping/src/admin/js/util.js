!function(window, document, $, undefined) {

	function Util() {}

	Util.prototype = {
		ajax: function(param) {
			setTimeout(function() {
				layer.msg('加载中', {icon: 16, time: 0, shade: [0.2, '#000']});
			}, 0);
			$.ajax({
				method: param.method || 'get',
				url: param.url,
				data: param.data || {},
				dataType: param.dataType || 'json',
				success: function(response) {
					layer.closeAll();
					param.success(response);
				},
				error: function(response) {
					layer.closeAll();
					param.error && param.error(response);
				}
			});
		}
	};

	window.Util = new Util();

}(window, document, jQuery);