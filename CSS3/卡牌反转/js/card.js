!function(window, document, $, undefined) {

    var $card = $('.card');

    var init = function() {
        $card.on('click', onCardClick);
    };

    var onCardClick = function() {
        var $this = $(this),
            clsName = $this.attr('class');

        if ($this.hasClass('flip-2')) {
            $this.addClass('flip-1').removeClass('flip-2');
        } else if ($this.hasClass('flip-1')) {
            $this.addClass('flip-2').removeClass('flip-1');
        } else {
            $this.addClass('flip-1');
        }

        setTimeout(function() {
            $this.find('img:first').appendTo($this);
        }, 300);
        
        return false;
    };

    init();

}(window, document, jQuery);