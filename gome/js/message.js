!function(window, document, $, undefined) {	
	var $myBtn = $('#myBtn'),
		$pic = $('#pic'),
		$formTarge = $('#formTarge'),
		$hiddenFile = $('#hiddenFile'),
		$restBtn = $('#restBtn'),
		$popup = $('#popup');
	
//上传图片事件	
	$pic.on('change', function() {
		$('#upForm').submit();
	});
//iframe成功返回执行事件	
	$formTarge.on('load', function() {
 			var $this = $(this);
 			var response = $this.contents().find('body').html();
			if(!response) return;
			response = $.parseJSON(response);
			if(response.success) {
				$('#photo').attr('src', '../fileUploading/server/uploadImgs/' + response.fileName);
				$hiddenFile.val(response.fileName);
			};
		});
//清空
	$restBtn.on('click', function() {
		title: $('#title').val('');
		price: $('#pirce').val('');
		labels: $('#labels').val('');
		comments: $('#comments').val('');
		coupons: $('#coupons').val('');
		is_recommend: $('#is_recommend').val('');
		img: $('#hiddenFile').val('');
		$('#photo').attr('src', 'image/up.png');
		sales: $('#sales').val('');
	});
//保存事件按钮	
	$myBtn.on('click', function() {
		var url = '../api/gome_new_goods.php',
		
			data = {
				title: $('#title').val(),
				price: $('#pirce').val(),
				labels: $('#labels').val(),
				comments: $('#comments').val(),
				coupons: $('#coupons').val(),
				is_recommend: $('#is_recommend').val(),
				img: $('#hiddenFile').val(),
				sales: $('#sales').val()
			};	
//		console.log(data);	
		$.get(url, data, function(response) {
			if(response.success) {
				$restBtn.trigger('click');
				$popup.modal('show');
				setTimeout(function() {
					$popup.modal('hide');
				}, 2000);
			};
		}, 'json');
	});
}(window, document, jQuery);
