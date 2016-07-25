!function($) {

	var Library = {

		$loadingWp: $('.masker-wp'),

		init: function() {
			this.initEvent();
			this.initTable();
			this.initDatePicker();
		},

		initTable: function() {
			var url = '../api/books_list.php';
			var that = this;

			this.$loadingWp.show();

			// console.log(this);

			$.get(url, {}, function(response) {

				// console.log(this);

				if (response.success) {
					that.renderTable(response.data);
				} else {
					alert('数据请求失败，请刷新重试！');
				}

			}, 'json');

			// ???
		},

		renderTable: function(data) {

			var trs = [];

			$.each(data, function(i, obj) {

				var b_status = obj.borrow_status;
				var b_status_map = {0: '未借出', 1: '已借出'};
				// console.log(obj.p_date)
				var p_date = obj.p_date.split(' ')[0];
				// p_date = p_date.substring(0, p_date.indexOf(' '));

				trs.push(
					'<tr>',
			          '<td>', obj.name, '</td>',
			          '<td>', obj.author, '</td>',
			          '<td>', obj.publisher, '</td>',
			          '<td>￥', obj.price, '</td>',
			          '<td>', p_date, '</td>',
			          '<td>', obj.classify, '</td>',
			          '<td>', obj.status ? '上架' : '下架', '</td>',
			          '<td>', b_status_map[b_status], '</td>',
			        '</tr>'
				);
			});

			// console.log(trs)
			$('#booksTable tbody').html(trs.join(''));

			Library.$loadingWp.hide();

		},

		initEvent: function() {
			$('#newBookBtn').on('click', this.onNewBookBtnClick);
			$('#saveBtn').on('click', this.onSaveBtnClick);
		},

		initDatePicker: function() {
			$('#p_date').datetimepicker({
				todayBtn: true,
				format: 'yyyy-mm-dd',
				autoclose: true,
				minView: 2,
				language: 'zh-CN'
			});
		},

		onNewBookBtnClick: function() {
			$('#bookDlg').modal('show');
		},

		onSaveBtnClick: function() {
			// var name = $('#name').val();

			// Library.$loadingWp.show();

			var $this = $(this), data;

			if ($this.hasClass('submiting')) {
				return;
			}
			
			data = {
				name: $('#name').val(),
				author: $('#author').val(),
				publisher: 'test',
				price: 22.5,
				p_date: $('#p_date').val(),
				classify: '临时分类',
				status: $('input[name=status]:checked').val(),
				borrow_status: $('input[name=b_status]:checked').val()
			};


			$this.addClass('submiting');

			// console.log(data);

			// return;


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