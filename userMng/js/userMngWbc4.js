!function(window, document, $, undefined) {

	var UserMng = {
		$myDlg: $('#myDlg'),
		init: function() {
			$('#saveBtn').on('click', this.onSaveBtnClick);
		},
		onSaveBtnClick: function() {

			var $this = $(this);
			var url = 'server/ajaxReg.php';
			var data = {
				name: $('#name').val(),
				age: 20,
				edu: 3,
				gender: '女',
				address: '北京市海淀区123',
				mobile: '1501009999',
				hobbies: getHobbies(),
				img: 'abc.png'
			};

			// console.log(data)

			// check 

			if ($this.hasClass('loading')) {
				return;
			}

			$this.addClass('loading');

			$.get(url, data, function(response) {
				if (response.success) {
					$this.removeClass('loading');
					UserMng.$myDlg.modal('show');
					$('#name').val('');
					// ...
					setTimeout(function() {
						UserMng.$myDlg.modal('hide');
					}, 2000);
				}
			}, 'json');


			function getHobbies() {
				var hbs = $('[name=hobbies]:checked');
				var hbsArr = [];
				$.each(hbs, function() {
					hbsArr.push(this.value);
				});
				return hbsArr.join('|');
			}
		}
	};

	UserMng.init();

}(window, document, jQuery);