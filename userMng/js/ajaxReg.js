$(document).ready(function() {

	var url = 'server/ajaxReg.php',
		param;

	$('#submitBtn').on('click', function() {

		// return;

		var hobbies = [];
		$('input[name=hobbies]:checked').each(function(index, element) {
			hobbies.push(element.value);
		});

		param = {
			name: $('#name').val(),
			age: $('#age').val(),
			gender: $('input[name=gender]:checked').val(),
			edu: $('#edu').val(),
			mobile: $('#mobile').val(),
			address: $('#address').val(),
			hobbies: hobbies.join('|')
		}

		// check

		if (param.name == '') {
			alert('姓名不能为空！');
			$('#name').focus();
			return;
		}

		$.ajax({
			type: 'get',
			dataType: 'json',
			url: url,
			data: param,
			success: function(data) {
				if (data.success) {
					$('#resetBtn').trigger('click');
					alert('成功');
				} else {
					alert('失败');
				}
			},
			error: function() {
				alert('error');
			}
		});

		// $.getJSON(url, param, function(data) {
		// 	if (data.success) {
		// 		$('#resetBtn').trigger('click');
		// 		alert('成功');
		// 	} else {
		// 		alert('失败');
		// 	}
		// });

		// $.get(url, param, function(data) {
		// 	if (data.success) {
		// 		$('#resetBtn').trigger('click');
		// 		alert('成功');
		// 	} else {
		// 		alert('失败');
		// 	}
		// 	// console.log(typeof data);
		// }, 'json');

	});

});