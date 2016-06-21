$(document).ready(function() {

	var $maskerWp = $('.masker-wp');
	var cache = {};

	var init = function() {
		initTable();
		bindEvt();
	};

	var bindEvt = function() {
		$('#addUserBtn').on('click', onAddUserBtnClick);
		$('#dlgUpdateBtn').on('click', ondlgUpdateBtnClick);
		$('#closeBtn, #dlgCancelBtn').on('click', onCloseBtnClick);
		$('#dlgSaveBtn').on('click', onDlgSaveBtnClick);
		$('#userTable').on('click', '.del-btn', onDelBtnClick);
		$('#userTable').on('click', '.update-btn', onUpdateBtnClick);
		$('#uploadForm').on('change', '[name=pic]', onUploadChange);
		$('#formTarget').on('load', onUploadFrameLoad);
	};

	var onUploadFrameLoad = function() {
		var response = this.contentWindow.document.body.innerHTML;

		if (!response) return;

		// response = eval('(' + response + ')');
		response = $.parseJSON(response);

		if (response.success) {
			$('#tmpImg').attr('src', '../fileUploading/server/uploadImgs/' + response.fileName);
			$('#tmpFileName').val(response.fileName);
		}
	};


	var onUploadChange = function() {
		$('#uploadForm').submit();
	};

	var ondlgUpdateBtnClick = function() {
		var param = {
			id: $('#uid').val(),
			name: $('input[name=name]').val(),
			age: $('input[name=age]').val(),
			gender: '男',
			edu: '本科',
			mobile: '15810520000',
			address: '北京市昌平区生命科学园',
			hobbies: '篮球|唱歌'
		};

		var url = 'server/ajaxUpdateUser.php';

		// check

		$.get(url, param, function(data) {
			if (data.success) {
				initTable();
				$maskerWp.hide();
			}
		}, 'json');
	};

	var onUpdateBtnClick = function() {
		var $this = $(this),
			uid = $this.attr('uid'), // this.uid
			currObj = cache[uid];

		// console.log(currObj);

		$maskerWp.find('#uid').val(currObj.id);
		$maskerWp.find('input[name=name]').val(currObj.name);
		$maskerWp.find('input[name=age]').val(currObj.age);

		$('#dlgUpdateBtn').show();
		$('#dlgSaveBtn').hide();

		$maskerWp.find('.dig-title').text('修改用户').end().show();
	};

	var onDelBtnClick = function() { 
		var $this = $(this),
			uid = $this.attr('uid'); // this.uid

		if (confirm('确定要删除该用户吗？')) {
			$.get('server/ajaxDelUser.php', {id: uid}, function(response) {
				initTable();
			}, 'json');
		}
		
	};

	var initTable = function() {
		var url = 'server/ajaxUserList.php';
		$.get(url, function(response) {
			if (response.success) {
				renderTable(response.data);
				// console.log($('.del-btn'))
			}
		}, 'json');
	};

	var renderTable = function(data) {
		var tpl = $('#trTpl').html();
		var trs = [];
		var compiled = _.template(tpl);

		_.each(data, function(obj) {
			trs.push(compiled(obj));
			cache[obj.id] = obj;
		});

		$('#userTable tbody').html(trs);

		$('img').on('error', function() {
			$(this).parent().html('暂无照片')
				.end().remove();
			// this.src = 'img/default.png';
		});

		////////////////////////////////////////////////////

		// check data

		// $.each(data, function(index, obj) {
		// 	var hobbies = obj.hobbies;
		// 	if (hobbies) {
		// 		hobbies = hobbies.split('|');
		// 		hobbies = '爱好：' + hobbies.join('；')
		// 	} else {
		// 		hobbies = '--';
		// 	}

		// 	trs.push(
		// 		'<tr>',
		// 			'<td>', obj.name, '</td>',
		// 			'<td>', obj.age, '</td>',
		// 			'<td>', obj.gender, '</td>',
		// 			'<td>item4</td>',
		// 			'<td>item5</td>',
		// 			'<td>item6</td>',
		// 			'<td>', hobbies, '</td>',
		// 			'<td>',
		// 				'<button uid="', obj.id, '" class="btn del-btn">删除</button>&nbsp;',
		// 				'<button uid="', obj.id, '" class="btn update-btn">修改</button>',
		// 			'</td>',
		// 		'</tr>'
		// 	);

		// 	// 生成缓存数据
		// 	cache[obj.id] = obj;

		// });

		// $('#userTable tbody').html(trs.join(''));
	}

	var onDlgSaveBtnClick = function() {
		var url = 'server/ajaxReg.php';
		var param = {
			name: $('input[name=name]').val(),
			age: $('input[name=age]').val(),
			gender: '男',
			edu: '本科',
			mobile: '15810520000',
			address: '北京市昌平区生命科学园',
			hobbies: '篮球|唱歌',
			img: $('#tmpFileName').val()
		};

		// check

		$.get(url, param, function(data) {
			if (data.success) {
				initTable();
				$maskerWp.hide();
			}
		}, 'json');

	};

	var onCloseBtnClick = function() {
		$maskerWp.hide();
	};

	var onAddUserBtnClick = function() {
		$('.dialog input').val('');
		$('#dlgUpdateBtn').hide();
		$('#dlgSaveBtn').show();
		$maskerWp.find('.dig-title').text('新增用户').end().show();
	};

	init();

});