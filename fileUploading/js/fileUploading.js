$(document).ready(function() {

	var fileUploading = {
		uploadUrl: '',
		$target: null,
		$addBtn: null,
		$fileUploadArea: null,
		$uploadFrame: null,
		init: function() {
			$target = $('.upload-wp');
			$addBtn = $target.find('.add-file-btn');

			this.initFileUploadArea();

			$fileUploadArea.on('change', this.onFileUploadChange)
		},
		initFileUploadArea: function() {
			$fileUploadArea = $(
				'<form target="uploadFrame" method="post" enctype="multipart/form-data">' + 
					'<input type="file" name="uFile">' +
				'</form>'
			);
			$addBtn.append($fileUploadArea);
			$uploadFrame = $('<iframe name="uploadFrame"></iframe>');
			if ($('iframe[name="uploadFrame"]').length == 0) {
				$('body').append($uploadFrame);
			}
		},
		onFileUploadChange: function() {
			$fileUploadArea.submit();

			console.log(this.value)
		}
	};

	fileUploading.init();

});