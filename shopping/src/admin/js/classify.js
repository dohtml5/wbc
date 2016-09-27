!function(window, document, $, undefined) {

	var Classify = {

		$dlg: $('#classifyDlg'),

		init: function() {
			Classify.showList();
			Classify.bindEvt();
		},

		bindEvt: function() {
			$('#newBtn').on('click', this.onNewBtnClick);
			$('#saveBtn').on('click', this.onSaveBtnClick);
			this.$dlg.find('#name').on('keyup', this.onNameKeyup);
		},

		onNameKeyup: function() {
			var txt = this.value,
				$that = $(this);

			if (!txt) {
				return;
			}

			Util.ajax({
				url: '../../../api/shopping_classify_check.php',
				data: {name: txt},
				success: function(response) {
					if (response.total == 0) {
						$that.parent('div').removeClass('has-error').addClass('has-success');
					} else {
						$that.parent('div').removeClass('has-success').addClass('has-error');
					}
				}
			});

			console.log(txt)
		},

		showList: function() {
			Util.ajax({
				url: '../../../api/shopping_classify_list.php',
				success: function(response) {
					var data = response.data,
						trArr = [];
					$.each(data, function(i, obj) {
						trArr.push(
							'<tr>',
			                    '<td class="w-30"><input type="checkbox"></td>',
			                    '<td class="w-50">', i + 1, '</td>',
			                    '<td class="w-360">', obj.name, '</td>',
			                '</tr>'
						);
					});
					$('#classifyTable tbody').html(trArr.join(''));
				}
			});
		},

		onSaveBtnClick: function() {
			var $name = Classify.$dlg.find('#name'),
				name = $name.val();

			// 表单验证

			if ($name.parent('div').hasClass('has-error')) {
				layer.msg('该类别已经存在！', {offset: 0, shift: 6});
				return;
			}

			Util.ajax({
				url: '../../../api/shopping_classify_add.php',
				data: {name: name},
				success: function(response) {
					layer.msg('类别添加成功！', {offset: 0, shift: 0});
					Classify.$dlg.modal('hide');
					Classify.showList();
				}
			});

			/*layer.msg('加载中', {icon: 16, time: 0, shade: [0.2, '#000']});
			$.get('../../../api/shopping_classify_add.php', {name: name}, function(response) {
				if (response.success) {
					layer.msg('类别添加成功！', {offset: 0, shift: 0});
					// TODO
				} else {
					// TODO
				}
			}, 'json');*/
		},

		onNewBtnClick: function() {
			Classify.$dlg.modal('show');
		}

	};

	$(document).ready(Classify.init);

}(window, document, jQuery);