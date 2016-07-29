!function($) {

	var Library = {

		param: {},

		cache: {},

		$loadingWp: $('.masker-wp'),

		classifyArray: [
			{"id": 1, name: "历史类"},
			{"id": 2, name: "文学类"},
			{"id": 3, name: "科技类"},
			{"id": 4, name: "军事类"},
			{"id": 5, name: "小说类"}
		],

		init: function() {
			this.initEvent();
			this.initTable();
			this.initDatePicker();
			this.renderClassifySel();
		},

		renderClassifySel: function() {
			var data = this.classifyArray; // 替代后台请求数据
			data.unshift({"id": 0, name: "请选择"});
			var optsArr = _.map(data, function(obj) {
				return '<option value="' + obj.id + '">' + obj.name + '</option>';
			});
			$('#classify').html(optsArr.join(''));
		},

		initTable: function() {
			var url = '../api/books_list.php';
			var that = this;

			this.$loadingWp.show();

			// console.log(Library.param);

			// return;

			$.get(url, {query: Library.param.query || ''}, function(response) {

				// console.log(this);

				if (response.success) {
					that.renderTable(response.data);
				} else {
					alert('数据请求失败，请刷新重试！');
					that.$loadingWp.hide();
				}

			}, 'json');

			// ???
		},

		renderTable: function(data) {

			var trs = [];

			if (data.length == 0) {
				alert('暂无查询结果，请更换查询关键字重试！');
				Library.$loadingWp.hide();
				return;
			}

			$.each(data, function(i, obj) {

				var b_status = obj.borrow_status;
				var b_status_map = {0: '未借出', 1: '已借出'};
				// console.log(obj.p_date)
				var p_date = obj.p_date.split(' ')[0];
				// p_date = p_date.substring(0, p_date.indexOf(' '));

				var classify_map = {
					1: "历史类",
					2: "文学类",
					3: "科技类",
					4: "军事类",
					5: "小说类",
					0: "未分类"
				};

				trs.push(
					'<tr>',
			          '<td><input id="', obj.id, '" class="book-checkbox" type="checkbox" /></td>',
			          '<td>', obj.name, '</td>',
			          '<td>', obj.author, '</td>',
			          '<td>', obj.publisher, '</td>',
			          '<td>￥', obj.price, '</td>',
			          '<td>', p_date, '</td>',
			          '<td>', classify_map[obj.classify || 0], '</td>',
			          '<td>', obj.status ? '上架' : '下架', '</td>',
			          '<td>', b_status_map[b_status], '</td>',
			        '</tr>'
				);

				Library.cache[obj.id] = obj;

			});

			// console.log(data)
			// console.log(Library.cache)

			// console.log(trs)
			$('#booksTable tbody').html(trs.join(''));

			// 不推荐 $('#booksTable tbody input[type=checkbox]').on('click', this.onBookCheckBoxClick);


			Library.$loadingWp.hide();

		},

		initEvent: function() {
			$('#newBookBtn').on('click', this.onNewBookBtnClick);
			$('#saveBtn').on('click', this.onSaveBtnClick);
			// $('#booksTable tbody input[type=checkbox]').on('click', this.onBookCheckBoxClick);
			// $('#booksTable').on('click', 'tbody input[type=checkbox]', this.onBookCheckBoxClick);
			$('#booksTable').on('click', '.book-checkbox', this.onBookCheckBoxClick);
			$('#delBookBtn').on('click', this.onDelBookBtnClick);
			$('#updateBookBtn').on('click', this.onUpdateBookBtnClick);
			$('#searchBtn').on('click', this.onSearchBtnClick);
		},

		onSearchBtnClick: function() {
			var txt = $('#searchIpt').val();
			Library.param.query = txt;
			Library.initTable();
		},

		onUpdateBookBtnClick: function() {

			var $selectedCheckbox = $('#booksTable input.book-checkbox:checked');
			// var id = $selectedCheckbox.get(0).id;
			var id = $selectedCheckbox[0].id;

			var currObj = Library.cache[id];

			var $bookDlg = $('#bookDlg');

			Library.resetForm();

			$bookDlg.find('#bookId').val(currObj.id);
			$bookDlg.find('#name').val(currObj.name);
			$bookDlg.find('#classify').val(currObj.classify);
			$bookDlg.find('input[name=status][value='+currObj.status+']').trigger('click');

			// console.log(currObj);

			$('#bookDlg')
				.find('#myModalLabel').html('修改图书').end()
				.find('#saveBtn').html('确定修改').addClass('update').end()
				.modal('show');

		},

		onDelBookBtnClick: function() {

			var $selectedCheckbox, ids = [];

			if (!confirm('确定要删除该图书吗？')) {
				return;
			}

			Library.$loadingWp.show();

			$selectedCheckbox = $('#booksTable input.book-checkbox:checked');

			$selectedCheckbox.each(function() {
				ids.push(this.id);
			});

			$.get('../api/books_del.php', {ids: ids.join(',')}, function(response) {
				if (response.success){
					Library.initTable();
				} else {
					alert('删除失败，请刷新重试！');
				}
			}, 'json');
		},

		onBookCheckBoxClick: function() {

			var len = $('#booksTable input.book-checkbox:checked').length;
			var $delBookBtn = $('#delBookBtn');
			var $updateBookBtn = $('#updateBookBtn');

			if (len > 0) {
				$delBookBtn.removeAttr('disabled');
				if (len == 1) {
					$updateBookBtn.removeAttr('disabled');
				} else {
					$updateBookBtn.attr('disabled', 'disabled');
				}
			} else {
				$delBookBtn.attr('disabled', 'disabled');
			}

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
			Library.resetForm();
			$('#bookDlg')
				.find('#myModalLabel').html('新增图书').end()
				.find('#saveBtn').html('保存并入库').removeClass('update').end()
				.modal('show');
		},

		onSaveBtnClick: function() {
			// var name = $('#name').val();

			// Library.$loadingWp.show();

			var $this = $(this), data, url;

			if ($this.hasClass('submiting')) {
				return;
			}

			$this.addClass('submiting');

			data = {
				name: $('#name').val(),
				author: $('#author').val(),
				publisher: 'test',
				price: 22.5,
				p_date: $('#p_date').val(),
				classify: $('#classify').val(),
				status: $('input[name=status]:checked').val(),
				borrow_status: $('input[name=b_status]:checked').val()
			};

			// TODO 表单验证

			if ($this.hasClass('update')) { // 修改
				data["id"] = $('#bookId').val();
				url = '../api/books_update.php';
			} else { // 新增
				url = '../api/books_add.php';
			}

			// console.log(data);

			// return;

			$.get(url, data, function(response) {

				// console.log(typeof response);

				if (response.success) {
					Library.resetForm();
				} else {
					alert('操作失败，请刷新重试！');
				}

				$('#bookDlg').modal('hide');

				Library.initTable();

				// location.reload();

			}, 'json');

			// console.log(data)
		},

		resetForm: function() {
			$('#booksForm').trigger('reset');
			$('#saveBtn').removeClass('submiting');
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