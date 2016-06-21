/*var url = 'http://dohtml5.duapp.com/php/wbc2/data.php?callback=?',
	param = {username: 'situ', age: 30};

$.get(url, param, onSuccess, 'json');

function onSuccess(data) {
	console.log(data.age);
}*/

//console.log(data);

// jsonP

!function(window, document, $, undefined) {
	
	$('#provinceSel').on('change', function() {
		var $this = $(this),
			pid = $this.val();
		
		renderSel(pid, 'citySel');
	});
	
	
	var renderSel = function(tmpId, renderId) {
		var url = 'http://dohtml5.duapp.com/php/wbc2/getPlace.php?callback=?',
			param;
			
		renderId = renderId || 'provinceSel';
		
		if (tmpId) {
			param = {id: tmpId};
		}
		
		$.get(url, param, function(data) {
			var arr = ['<option value="0">请选择</option>'];
			$.each(data, function(i, obj) {
				arr.push('<option value="', obj.provinceID || obj.cityID, '">', obj.province || obj.city, '</option>');
			});
			
			$('#' + renderId).html(arr.join(''));
		}, 'json');
	};
	
	renderSel();
	
}(window, document, jQuery);
