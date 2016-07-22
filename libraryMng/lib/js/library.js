!function($) {

	var Library = {

		init: function() {
			this.initEvent();
			this.initTable();
		},

		initTable: function() {
			var url = '../api/books_list.php';
			var that = this;

			// console.log(this);

			$.get(url, {}, function(response) {

				// console.log(this);

				if (response.success) {
					that.renderTable(response.data);
				} else {
					alert('数据请求失败，请刷新重试！');
				}

			}, 'json');
		},

		renderTable: function(data) {

			var trs = [];

			$.each(data, function(i, obj) {
				trs.push(
					'<tr>',
			          '<td>', obj.name, '</td>',
			          '<td>', obj.author, '</td>',
			          '<td>item3</td>',
			          '<td>item4</td>',
			          '<td>item5</td>',
			          '<td>item6</td>',
			          '<td>item7</td>',
			          '<td>item8</td>',
			        '</tr>'
				);
			});

			// console.log(trs)
			$('#booksTable tbody').html(trs.join(''));

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

			// console.log(this);

			// var that = this;

			// TODO 表单验证

			$.get('../api/books_add.php', data, function(response) {

				// console.log(typeof response);

				if (response.success) {
					alert('保存成功！')
				} else {
					alert('保存失败，请刷新重试！');
				}

				$('#bookDlg').modal('hide');

				Library.initTable();

				// location.reload();

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