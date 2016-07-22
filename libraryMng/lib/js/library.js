!function($) {

	var Library = {

		init: function() {
			this.initEvent();
		},

		initEvent: function() {
			$('#newBookBtn').on('click', this.onNewBookBtnClick);
			$('#saveBtn').on('click', this.onSaveBtnClick);
		},

		onNewBookBtnClick: function() {
			$('#bookDlg').modal('show');
		},

		onSaveBtnClick: function() {
			// var name = $('#name').val();

			var data = {
				name: $('#name').val(),
				author: $('#author').val()
			};

			// TODO 表单验证

			$.get('../api/books_add.php', data, function(response) {

				// console.log(typeof response);

				if (response.success) {
					alert('保存成功！')
				} else {
					alert('保存失败，请刷新重试！');
				}

				$('#bookDlg').modal('hide');

			}, 'json');

			// console.log(data)
		}

	};

	Library.init();

}(jQuery);

/////////////////////////////////////////////////////////////////

// 匿名自执行函数

// (function() {
// 	alert('test');
// })();

// !function() {
// 	var a = 'abc';
// }();

// alert(a);