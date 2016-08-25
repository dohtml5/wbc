/**
 * Created by situ on 2016/8/25.
 */
!function(window, document, undefined) {

    var ipt = document.createElement('input'),
        i, len,
        plhInfo, span, input, link;

    if ('placeholder' in ipt) {
        return;
    }

    link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'pl/pl.css';
    // document.head.appendChild(link);
    document.getElementsByTagName('head')[0].appendChild(link);

    input = document.getElementsByTagName('input');
    len = input.length;

    for (i=0; i<len; i++) {
        plhInfo = input[i].getAttribute('placeholder');

        if (input[i].type != 'text' || !plhInfo) {
            continue;
        }

        input[i].outerHTML = '<div class="plh-wp">' + input[i].outerHTML + '<span></span></div>';

        span = input[i].parentNode.getElementsByTagName('span')[0];

        span.innerHTML = plhInfo;

        input[i].onkeyup = function() {
            var val = this.value;
            if (val.length == 0) {
                this.parentNode.getElementsByTagName('span')[0].style.display = 'block';
            } else {
                this.parentNode.getElementsByTagName('span')[0].style.display = 'none';
            }
        };

    }

}(window, document);