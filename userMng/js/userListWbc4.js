!function(window, document, $, undefined) {

	var PAGESIZE = 5;
	var CURRPAGE = 0;
	var TOTALPAGE = 0;
	var QUERY = '';

	var UserMng = {
		cache: {},
		currUid: 0,
		$loadingWp: $('.loading-wp'),
		$uploadDlg: $('#updateDlg'),
		init: function() {
			this.initUserList();
			this.initEvent();
		},
		initEvent: function() {
			// $('.del-btn').on('click', this.onDelBtnClick); // ？？？
			$('#userTable').on('click', '.del-btn', this.onDelBtnClick);
			$('#userTable').on('click', '.update-btn', this.onUpdateBtnClick);
			$('#saveUpdateBtn').on('click', this.onSaveUpdateBtnClick);
			$('#searchBtn').on('click', this.onSearchBtnClick);
			$('#pagingUl').on('click', 'li', this.onPagingLiClick);
			$('#queryIpt').on('keyup', this.onQueryIptKeyup);
		},
		onQueryIptKeyup: function(e) {
			// console.log(e.keyCode)
			if (e.keyCode == 13) {
				UserMng.onSearchBtnClick();
			}
		},
		onSearchBtnClick: function() {
			var query = $('#queryIpt').val();
			QUERY = query;
			CURRPAGE = 0;
			UserMng.initUserList();
		},
		onSaveUpdateBtnClick: function() {
			var url = 'server/ajaxUpdateUser.php';

			var data = {
				id: UserMng.currUid,
				name: $('#name').val(),
				age: 23,
				gender: '男',
				edu: '本科',
				mobile: '15810520000',
				address: '北京市昌平区生命科学园',
				hobbies: '篮球|唱歌'
			};

			// TODO...

			UserMng.$loadingWp.show();
			UserMng.$uploadDlg.modal('hide');
			$.get(url, data, function(data) {
				if (data.success) {
					UserMng.initUserList();
				}
			}, 'json');

		},
		onUpdateBtnClick: function() {
			var $this = $(this),
				uid = $this.attr('uid'),
				currUser = UserMng.cache[uid];

			$('#name').val(currUser.name);
			initHobbies(currUser.hobbies);
			UserMng.currUid = uid;
			// TODO...

			UserMng.$uploadDlg.modal('show');

			function initHobbies(hbs) {
				// $('input[name=hobbies]').removeAttr('checked');

				var hbsArr = hbs.split('|');
				$('[name=hobbies]').each(function() {
					var $this = $(this);
					// console.log(_.indexOf(hbsArr, this.value))
					// console.log($this)
					if(_.indexOf(hbsArr, this.value) > -1) {
						// $this.attr('checked', 'checked');
						$this.prop('checked', true);
					} else {
						$this.prop('checked', false);
						// $this.removeAttr('checked');
					}
				});
			}
		},
		onDelBtnClick: function() {
			// var uid = this.getAttribute('uid');
			var $this = $(this),
				uid = $this.attr('uid'),
				url = 'server/ajaxDelUser.php';

			var r = confirm('确定要删除该用户吗？');

			if (!r) {
				return;
			}

			UserMng.$loadingWp.show();

			$.get(url, {id: uid}, function(response) {
				if (response.success) {
					UserMng.initUserList();
					UserMng.$loadingWp.hide();
					$('#myDlg').modal('show');
					setTimeout(function() {
						$('#myDlg').modal('hide');
					}, 2000);
				} 
			}, 'json');

		},
		initUserList: function() {
			var url = 'server/ajaxUserList.php';
			var trTpl = $('#trTpl').html();
			var param = {
				size: PAGESIZE,
				query: QUERY,
				page: CURRPAGE
			};

			this.$loadingWp.show();

			// 异步操作

			$.get(url, param, function(response) {

				var trs = [];
				var compiled = _.template(trTpl);

				_.each(response.data, function(obj) {
					trs.push(compiled(obj));
					UserMng.cache[obj.id] = obj;
				});

				UserMng.renderPaging(response.total);

				$('#userTable tbody').html(trs.join(''));
				// ??

				// $('.del-btn').on('click', UserMng.onDelBtnClick);

				UserMng.$loadingWp.hide();
				// console.log(UserMng);
			}, 'json');
			// ?
			// console.log('aaa');
		},
		onPagingLiClick: function() {
			var $this = $(this),
				page = $this.attr('page') || 0;

			if ($this.hasClass('last-page')) {
				CURRPAGE = TOTALPAGE - 1;
			} else {
				CURRPAGE = page;
			}

			UserMng.initUserList();
		},
		renderPaging: function(total) {
			var liArr = [];
			TOTALPAGE = Math.ceil(total / PAGESIZE),

			liArr.push(
				'<li class="first-page">',
			      '<a href="javascript:void(0)" aria-label="Previous">',
			        '<span aria-hidden="true">&laquo;</span>',
			      '</a>',
			    '</li>'
			);

			for (var i=0; i<TOTALPAGE; i++) {
				if (i == CURRPAGE) {
					liArr.push('<li page="', i, '" class="active"><a href="javascript:;">', i + 1, '</a></li>');
				} else {
					liArr.push('<li page="', i, '"><a href="javascript:;">', i + 1, '</a></li>');
				}
			}

			liArr.push(
				'<li class="last-page">',
			      '<a href="javascript:void(0)" aria-label="Next">',
			        '<span aria-hidden="true">&raquo;</span>',
			      '</a>',
			    '</li>'
			);

			$('#pagingUl').html(liArr.join(''));

		}
	};

	UserMng.init();

}(window, document, jQuery);