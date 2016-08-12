/**
 * Created by situ on 2016/8/12.
 */
define(function() {

    return {

        getDateArr: function(date) {
            var y = date.getFullYear();
            var M = date.getMonth() + 1;
            var d = date.getDate();

            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();

            return [y, M, d, h, m, s];
        }
        
    };

});