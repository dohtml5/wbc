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
		}, 
		http: function($http, param) {
			setTimeout(function() {
				layer.msg('加载中', {icon: 16, time: 0, shade: [0.2, '#000']});
			}, 0);

			$http({
		        url: param.url,
		        method: param.method || 'get',
		        params: param.params || {}
		    }).success(function(response) {
		       	param.success && param.success(response);
				layer.closeAll();
		    });
		}
	};

	window.Util = new Util();

}(window, document, jQuery);