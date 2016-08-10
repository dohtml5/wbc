/**
 * Created by situ on 2016/8/9.
 */

requirejs.config({
    baseUrl: 'js',
    shim: {
    },
    paths: {
        jquery: "jq/jquery"
    }
});

requirejs(["helper/util", "helper/util2", "helper/util3"], function(util, util2, util3) {



});