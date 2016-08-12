/**
 * Created by situ on 2016/8/12.
 */
define(function() {

    // console.log('tab...');

    function Tab(name) {
        this.name = name;
        this.doTab = function() {
            return this.name;
        }
    }

    return new Tab('wbc tab');

});