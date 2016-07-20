var Library = {

	init: function() {
		this.initEvent();
	},

	initEvent: function() {
		$('#newBookBtn').on('click', this.onNewBookBtnClick);
	},

	onNewBookBtnClick: function() {
		$('#bookDlg').modal();
	}

};

Library.init();