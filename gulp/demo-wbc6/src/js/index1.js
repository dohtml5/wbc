/**
    我是index1的注释 
*/
!function(){
    
    var myFirstGulpFunTest = function() {
        console.log('index1...');
        console.log('hahaha...');
    };
    
    myFirstGulpFunTest();
    
    var obj = {
        name: 'test888'
    };
    
    console.log(obj.name);
    
    $('button').on('click', function() {
        alert('btn clicked');
    });
    
}();