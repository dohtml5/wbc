/*
 * @author: situ
 * @url: dohtml5.duapp.com
 * @from: WEB开发大本营
 * @email：gao_st@126.com
 * @qq: 454123662
 */
!function(window, document, $, undefined) {
	$.fn.slider = function() {
		this.each(function() {
			var $target = $(this),
				width = $target.width(),
				timer;
				
			// 定时切换
			// $target
			// 	.on('mouseover', function() {
			// 		clearInterval(timer);
			// 	})
			// 	.on('mouseout', function() {
			// 		autoPlay();
			// 	});
				
			function autoPlay() {
				timer = setInterval(function() {
					$target.find('a.next').trigger('click');
				}, 2000);
			}
			
			autoPlay();
				
			// 底部圆点点击事件
		    $target.find('.img-trigger li').on('click', function() {
		        var $this = $(this),
		            newIndex = $this.index(),
		            oldIndex = $target.find('.img-wp > div').first().attr('index'),
		            $tmpItem;
				
				$tmpItem = $target.find('.img-wp > div').first().clone();
		        $this.addClass('on').siblings('.on').removeClass('on');
		
		        if (newIndex > oldIndex) { // 左
		            for(var i=0; i<newIndex - oldIndex; i++) {
		                $target.find('.img-wp').append($target.find('.img-wp > div').first());
		            }
		            $target.find('.img-wp').prepend($tmpItem);
		
		            $target.find('.img-wp').stop().animate({
		                'margin-left': - width
		            }, 5000, function() {
		                $target.find('.img-wp > div').first().remove();
		                $target.find('.img-wp').css({'margin-left': 0});
		            });
		
		        } else if (newIndex < oldIndex) { // 右
		            for(var i=0; i<oldIndex - newIndex; i++) {
                        $target.find('.img-wp').prepend($target.find('.img-wp > div').last());
                    }
		           	$target.find('.img-wp > div').first().after($tmpItem);
		           	
					$target.find('.img-wp').css({'margin-left': -width});
					$target.find('.img-wp').stop().animate({'margin-left': 0}, 5000, function(){
                    	$target.find('.img-wp > div').first().next().remove();
                    });
		        }
		    });
				
			// 左右按钮点击事件
			$target.find('.prev, .next').on('click', function() {
				var $this = $(this);

		        if ($this.hasClass('next')) { // 点击下一个
		            $target.find('.img-wp').stop().animate({
		                'margin-left': - width
		            }, 500, function() {
		                $target.find('.img-wp').append($target.find('.img-wp > div').first());
		                $target.find('.img-wp').css({'margin-left': 0});
		                setActiveLi();
		            });
		        } else { // 点击上一个
		            $target.find('.img-wp').prepend($target.find('.img-wp > div').last());
		            $target.find('.img-wp').css({'margin-left': - width});
		            $target.find('.img-wp').stop().animate({
		                'margin-left': 0
		            }, 500, function() {
		                setActiveLi();
		            });
		        }
			});
			
			function setActiveLi() {
		        var currIndex = $target.find('.img-wp > div').first().attr('index');
		        var $triggerLis = $target.find('.img-trigger li');
		        $triggerLis.eq(currIndex)
		            .addClass('on').siblings('.on')
		            .removeClass('on');
		    }
			
		});
	};
}(window, document, jQuery);
