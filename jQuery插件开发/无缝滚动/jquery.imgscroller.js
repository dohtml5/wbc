!function(window, document, $, undefined) {

	$.fn.imgscroller = function() {

		this.each(function() {

			var $this = $(this),
				$scrollerUL = $this.find('.scroller-ul'),
				$scrollerInner = $this.find('.scroller-inner'),
				sLeft = $scrollerInner.scrollLeft(),
				ulWidth = $scrollerUL.width(),
				timer,
				// direction = 'r-2-l',
				speed = 20;

			$scrollerUL.after($scrollerUL.clone()).after($scrollerUL.clone());

			scroller();

			$this.hover(function() {
				clearInterval(timer);
			}, function() {
				scroller();
			});

			function scroller() {

				timer = setInterval(function() {
					if (sLeft >= ulWidth) {
						sLeft = 0;
					}

					$scrollerInner.scrollLeft(sLeft++);

				}, speed);
			}

		});

		

	};

}(window, document, jQuery);