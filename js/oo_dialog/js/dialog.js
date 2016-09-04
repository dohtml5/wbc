/**
 * Created by situ on 2016/9/3.
 */
function Dialog(params) {

    this.title = params.title || '对话框';
    this.content = params.content || '';
    this.btns = params.btns || ['确定'];
    this.masker = params.masker || true;
    this.close = params.close || false;

}

Dialog.prototype = {
    show: function() {
        var dlg = document.getElementById('wbcDlg');
        var html;
        var dlgDiv;
        if (!dlg) {
            dlgDiv = document.createElement('div');
            dlgDiv.id = 'wbcDlg';
            html = [
                '<div class="wbc-dlg">',
                    '<div class="wbc-dlg-header">',
                        this.title,
                        this.close ? '<span id="closeBtn" class="close-btn">&times;</span>' : '',
                    '</div>',
                    '<div class="wbc-dlg-body">',
                        this.content,
                    '</div>',
                    renderBtns(this.btns),
                '</div>',
                this.masker ? '<div class="masker"></div>' : ''
            ];
            dlgDiv.innerHTML = html.join('');
            document.body.appendChild(dlgDiv);
            dlg = document.getElementById('wbcDlg');
        }
        dlg.style.display = 'block';

        /**
         * 渲染按钮
         */
        function renderBtns(btns) {
            var len = btns.length, btnHtml = ['<div class="wbc-dlg-footer">'];
            for (var i=0; i<len; i++) {
                btnHtml.push(
                    '<button>', btns[i], '</button>'
                );
            }
            btnHtml.push('</div>');
            return btnHtml.join('');
        }

    },

    hide: function() {

    }
};

/**
 * 确认框
 * @constructor
 */
function Confirm(params) {
    this.title = params.title || '确认框';
    this.content = params.content || '';
    this.btns = params.btns || ['确定', '取消'];
    this.masker = params.masker || true;
    this.close = params.close || false;
}

var F = function() {};
F.prototype = Dialog.prototype;
Confirm.prototype = new F();
Confirm.prototype.constructor = Confirm;

