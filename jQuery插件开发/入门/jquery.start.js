!function(window, document, $, undefined) {

	$.fn.extend({
		setRed: function() {
			this.css('background-color', 'red');
		}
	});

	// $.fn.setRed = function() {
	// 	this.css('background-color', 'red');
	// };

	$.extend({
		fill0: function(num) {
			return num < 10 ? '0' + num : num;
		},
		toUC: function(str) {
			return str.toUpperCase();
		}
	});

	// jQuery.fill0 = function(num) {
	// 	return num < 10 ? '0' + num : num;
	// };

}(window, document, jQuery);