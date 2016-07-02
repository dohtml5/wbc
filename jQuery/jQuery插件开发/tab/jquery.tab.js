/*
 * @author: situ
 * @url: dohtml5.duapp.com
 * @from: WEB开发大本营
 * @email：gao_st@126.com
 * @qq: 454123662
 */

!function(window, document, $, undefined) {

    /*
     * 支持多种jQuery选择器
     * 暂不支持鼠标划过方式
     */
    
    $.fn.tab = function() {
        this.each(function() {
            var $this = $(this),
                $lis = $this.find('.tab-header>li'),
                $divs = $this.find('.tab-cnt>div');

            $lis.on('click', function() {
                var $this = $(this),
                index = $this.index();
                $this.addClass('on').siblings('.on').removeClass('on');
                $divs.eq(index).show().siblings(':visible').hide();
            });

        });
    };

}(window, document, jQuery);