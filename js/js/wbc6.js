// alert(99);

// alert(88);

// // Alert(77);

// 下面是弹出一个对话框
// alert( 66 );

// var x = 2;

// var y = 3;

// var z = x + y;

// alert(z);

// var age = 20;

// alert(Age);

// 标识符

// var 3a;

// var a;

// var $a;

// var _a;

// var a#;

// var a = "Hello World";

// var a = '早上好~！@#￥%……&*（';

// alert(a);

// var username;

// username = '张三';

// var username = '张三';

// var age = 20;

// alert(username);

// var username = '张三', age = 20, email = 'zs@126.com', gender;

// var var = 3;

// var break = 5;

////////////////////////////////////////////////////////////////////

// var a = 'test';

// a = 8;

// a = 'Hello';

// // console.log(a);
// alert(a);

// var s = "I'm OK";
// var s = 'I'm OK';

// alert(s);

// String   Number   Boolean

// var b = true;

// alert(b);

// var carName = "bmw";

// var x = 3;

// x++; // x = x + 1;

// var y = 5;
// y--; // y = y - 1;

// alert(y);

// var x = 3;

// x += 2; // x = x + 2;

// alert(x);

///////////////////////////////////////////////////////

// var x = 5;

// var y = 3;

// alert(x >= y);

// var x = 3;

// var y = 5;

// var z = 7;

// var f = (x > y) || (x < z);
// var f = (x > y) && (x < z);
// var f = !(x > y);
// var f = !x > y;

// alert(f);

// var age = 12;

// /*if (age > 18) {
// 	alert('成年人');
// 	alert('欢迎你...');
// } else {
// 	alert('未成年人');
// }*/

// if (age < 12) {
// 	alert('儿童');
// } else if (age < 18) {
// 	alert('少年');
// } else if (age < 45) {
// 	alert('青年');
// } else if (age < 59) {
// 	alert('中年');
// } else {
// 	alert('老年');
// }

// var x = 5;

// switch(x) {
// 	case 0: 
// 		alert('星期日');
// 		// break;
// 	case 1: 
// 		alert('星期1');
// 		// break;
// 	case 2: 
// 		alert('星期2');
// 		// break;
// 	case 3: 
// 		alert('星期3');
// 		// break;
// 	case 4: 
// 		alert('星期4');
// 		// break;
// 	case 5: 
// 		alert('星期5');
// 		// break;
// 	case 6: 
// 		alert('星期6');
// 		// break;
// 	default: 
// 		alert('非法日期');
// }

/*alert(1);
alert(1);
alert(1);
alert(1);
alert(1);
alert(1);
alert(1);
alert(1);
alert(1);
alert(1);*/

// console.log('test');

/*console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);*/

/*var total = 0;

for (var i=1; i<=10; i++) {
	total = total + i;
	// console.log(i);
}

console.log(i);*/

// [1, 100] 之间的偶数的和

// var total = 0;

// // for (var i=1; i<=100; i++) {
// // 	if (i % 2 == 0) {
// // 		total += i;
// // 	}
// // }

// for (var i=2; i<=100; i+=2) {
// 	total += i;
// }

// console.log(total);

// [1, 100] 之间的奇数的和

// for (var i=1; i<=100; i++) {
// 	if (i % 2 == 1) {
// 		total += i;
// 	}
// }

// console.log(total);

// var i=101;

// while(i<=100) {
// 	console.log(i);
// 	i++;
// }

// var i=101;

// do {
// 	console.log(i);
// 	i++;
// } while(i<=100);

// for (var i=0; i<10; i++) {
// 	// if (i == 5) {
// 	// 	// break;
// 	// 	continue;
// 	// }

// 	if (i % 2 == 1) {
// 		continue;
// 	}

// 	console.log(i);
// }

// console.log('end for...');


// alert(1);

// try {
// 	Alert(22);
// } catch(e) {
// 	throw '哥们儿，Alert这里出错了...';
// 	// alert(2);
// 	// console.log('an error occured...');
// }

// alert(3);

// function b(x, y, a) {
// 	console.log(arguments);
// 	arguments[2] = 10;
// 	console.log(arguments);
// 	console.log(arguments.length);
// 	alert(a);
// }

// b(1, 2);

// var s = "abddefddkjiddkejskdiud";
// var len = s.length;

// for (var i=0; i<len; i++) {
// 	console.log(s.charAt(i));
// }

// console.log(len);

// 阶乘

// var total = 1;

// for (var i=5; i>0; i--) {
// 	// console.log(i); // 5 4 3 2 1 
// 	total *= i;
// }

// console.log(total);


////////////////////////////////////////////////////////////////////

// var test2;

// console.log(test2);

// test2(); // undefined();
// // test();

// // function test() {
// // 	alert('test');
// // }

// var test2 = function() {
// 	alert('test2');
// };

// test2();
// test();

////////////////////////////////////////////////////////////////////

// var x = 7;

// var y = 8;

// var z = x + y;

// console.log(z);

// var a = 6;

// var b = 9;

// var c = a + b;

// console.log(c);

// function sum(x, y) {
// 	// var x = 7, y = 2;
// 	// console.log('x: ' + x);
// 	// console.log('y: ' + y);
// 	// console.log(x + y);
// 	// var z = x + y;
// 	// return z;

// 	return x + y;

// 	alert('test');  //???

// }

// function sum2(x, y) {
// 	alert(x + y);
// }

// sum(7, 2);

// var r = sum(6, 19); // var x = 15;

// alert(r);

// console.log(r);

// sum(5, 3);

// function sum(x, y, z, a) { // var y;

// 	// console.log(y);

// 	var z = x + y;

// 	// return x + y;
// }

// var r = sum(8, 3);

// console.log(r);

// var getTotal = function(to) {
// 	var total = 0;
// 	for (var i=0; i<=to; i++) {
// 		total += i;
// 	}
// 	return total;
// };

// // var r = getTotal(100);
// var r = getTotal(10);

// console.log(r);


// 完成下面函数，使之返回任意区间内的偶数的和

// function getEvenSum(from, to) {
// 	var total = 0;
// 	for (var i=from; i<=to; i++) {
// 		if (i % 2 == 0) {
// 			total += i;
// 		}
// 	}
// 	return total;

// }

// var r = getEvenSum(3, 50);
// console.log(r);

////////////////////////////////////////////////////////

// function hello(name) {

// 	name = name ? 'Hello ' + name : 'Hello 陌生人';

// 	return name;

// 	/*if (name) {
// 		name = "Hello " + name;
// 	} else {
// 		name = "Hello 陌生人";
// 	}

// 	return name;*/

// 	// name = name || '陌生人';

// 	// (name == '李四') && (name = '李小四');

// 	// if (name == '李四') {
// 	// 	name = '李小四';
// 	// }

// 	// if (!name) {
// 	// 	name = '陌生人';
// 	// }

// 	// if (name == undefined) {
// 	// 	name = '陌生人';
// 	// }

// 	// return 'Hello ' + name;
// }

// var r = hello('张三');
// console.log(r);

///////////////////////////////////////////////////////

// document.write("<h1>test</h1>");

// function table99() {
// 	document.write('<div>');

// 	for (var j=1; j<=9; j++) {
// 		for (var i=1; i<=j; i++) {
// 			document.write('<span>' + i + '&times;' + j + '=' + j * i + '</span>');
// 		}
// 		document.write('<br>');
// 	}

// 	document.write('</div>');
// }

// table99();


///////////////////////////////////////////////////////

// function cf99(){
// 	document.write('<div>');
//     for(var i = 1; i < 10; i++){
//        	for(var j = 1; j <= i; j++){
//        		document.write('<span>' + j + '*' + i + '=' + i * j + '</span>');
//        	}
//        document.write('<br>'); 
//     }
//     document.write('</div>');
// }

// cf99();

//////////////////////////////////////////////////////

// var obj = new Object();
// // var obj = new Object;

// // var obj = {};

// obj.name = '笔记本';
// obj.price = 5800;

// var obj = {
// 	"name": '笔记本',
// 	"price": 5900,
// 	"brand": 'Dell',
// 	"os name": 'windows 10', // os_name, osName
// 	getName: function() {
// 		alert(this.name);
// 		// console.log(this);
// 	}	
// };

// for (var key in obj) {
// 	// console.log(key);
// 	console.log(obj[key]);
// }

// console.log(obj.length);


// for (var i=1; i<=10; i++) {
// 	document.write('<h1>' + i + '</h1>');
// }

// obj.getName();

// obj.price = 8000;
// obj["os name"] = "win 8";

// delete obj.brand;

// console.log(obj);

// console.log(obj['brand']);
// console.log(obj["os name"]);

//////////////////////////////////////////////////////////////

// var Student = {
// 	name: '张三',
// 	age: 20
// };

// Student.gender = '男';

// console.log(Student.name);

// Student.run = function() {
// 	console.log('running...');
// }

// Student.run();

// for (var key in Student) {
// 	console.log(key);
// 	console.log(Student[key]);
// }

// Student.age = ++Student.age;

// delete Student.gender;

// console.log(Student);

//////////////////////////////////////////////////////////////////////

// 格式化日期
// function formatDate(date, isDateTime) {
// 	var y, M, d, h, m, s;

// 	y = date.getFullYear();
// 	M = date.getMonth() + 1;
// 	d = date.getDate();
// 	h = date.getHours();
// 	m = date.getMinutes();
// 	s = date.getSeconds();

// 	if (isDateTime) {
// 		return y + '年' + fill0(M) + '月' + fill0(d) + '日 ' + fill0(h) + ':' + fill0(m) + ':' + fill0(s);
// 	} else {
// 		return y + '年' + fill0(M) + '月' + fill0(d) + '日';
// 	}

// }

// function fill0(num) {
// 	return num < 10 ? '0' + num : num;
// }

// var d = formatDate(new Date(), true);
// console.log(d);

// // 得到上个月的第一天
// function getFirstDay() {
// 	var d = new Date();
// 	d.setMonth(d.getMonth() - 1);
// 	d.setDate(1);

// 	return formatDate(d);
// }

// var dd = getFirstDay();
// console.log(dd);

////////////////////////////////////////////////////////////////////////

// var arr = ['a', 'b', 'c', 1, 2, 3, 4];

// var arr2 = ['张三', '李四', '王五'];

// var arr3 = [23, 8, 6, 2, 19, 5, 20];

// var arr4 = [8, 6, 1, 9, 3, 0];


// var compare = function(x, y) {
// 	return x - y;
// };

// arr3.sort(compare);

// console.log(arr3);

// for (var i=0; i<arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (var i in arr) {
// 	console.log(arr[i]);
// }

/////////////////////////////////////////////////////////////////

// var s = ' ';

// var o = {};

// if (o) {
// 	alert(1);
// } else {
// 	alert(2);
// }

// var d = new Date();

// var names = "吕洋 王慧杰 王瑞宏 苗子棋 闫志强 雷亚超 申庆敏 陈彤彤".split(' ');

// var index = Math.floor(Math.random() * names.length);

// console.log(names[index]);

// var mobileReg = /^1[3|4|5|7|8]\d{9}$/;

// var emailReg =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

// if (!emailReg.test('gao_st@126.com')) {
// 	alert('邮箱格式不正确！');
// }

////////////////////////////////////////////////////////////////////////////

// var obj = {
// 	name: 'aaa'
// };

// obj.name

// var dom = { // document

// 	getElementById: function(id) {
// 		// native code
// 	},

// 	html: {
// 		head: {
// 			title: '文档标题'
// 		},
// 		body: {
// 			div: {
// 				id: 'myDiv',
// 				innerText: '士大夫'
// 			},
// 			span: {
// 				innerText: 'span'
// 			},
// 			ul: {
// 				li: {},
// 				li: {},
// 				li: {},
// 				li: {},
// 				li: {}
// 			}
// 		}
// 	}
// };

// var myDiv = document.getElementById('myDiv');

// myDiv.innerText = '北京天安门';

// myDiv.title = '北京天安门';

// myDiv.style.backgroundColor = 'red';

// myDiv.onclick = function() {
// 	this.style.backgroundColor = 'red';
// }

// console.log(myDiv)

// var span = document.getElementsByTagName('span');

// for (var i=0; i<span.length; i++) {
// 	span[i].innerText = '北京天安门';
// 	span[i].style.backgroundColor = 'blue';
// }

// // span.innerText = '北京天安门';

// console.log(span)

// var address = document.getElementsByName('address');

// console.log(address);

// var hello = document.getElementById('hello');

// hello.title = '你好';

// // hello.wbc6 = 'hahahahaha';

// hello.setAttribute('wbc6', 'hahahahaha');

// console.log(hello.wbc);

// console.log(hello.getAttribute('tabindex'));

// // hello.innerHTML = '<i>北京天安门</i>';
// // hello.innerText = '<i>北京天安门2</i>';

// // var r = hello.innerHTML;
// var r = hello.innerText;

// console.log(r);

///////////////////////////////////////////////////////

// var div = document.createElement('div');
// // var h1 = document.createElement('h1');

// var txt = document.createTextNode('我爱北京天安门');
// div.appendChild(txt);
// // h1.appendChild(txt);

// // div.setAttribute('wbc', 'hahahahaha');

// /*var attr = document.createAttribute("wbc");
// attr.value = "wo qu";
// div.setAttributeNode(attr);*/

// document.body.appendChild(div);
// document.body.appendChild(h1);

// var hello = document.getElementById('hello');

// // document.body.removeChild(hello);

// hello.parentNode.removeChild(hello);

// console.log(hello.parentNode);

//var myUl = document.getElementById('myUl');
//
//// myUl.children[0];
//
//var li = document.createElement('li');
//var txt = document.createTextNode('0');
//
//li.appendChild(txt);
//
//// myUl.insertBefore(li, myUl.children[2]);
//myUl.replaceChild(li, myUl.children[0]);

// myUl.appendChild(li);

// // console.log(myUl.children);

// for (var i=0; i<myUl.children.length; i++) {
// 	console.log(myUl.children[i]);
// }

//////////////////////////////////////////////////////////////////////////////////

//var wbcObj = {
//	name: 'wbc6',
//	total: 12
//};
//
//function getWbcObj() {
//	alert('abc');
//}
//
//var wbcTeacher = 'situ';


//var linkBtn = document.getElementById("linkBtn");
//
//linkBtn.onclick = function() {
////	window.open('http://www.baidu.com');
////	location.href = "http://www.baidu.com";
////	location.reload();
////	location.replace("http://www.baidu.com");
//}


//function test() {
//	console.log('test.............');
//}
//
//////test();
////
////var timer = setTimeout(test, 5000);
//
////setTimeout(function() {
////	console.log('test2..........');
////}, 5000);
//
//var timer2 = setInterval(test, 2000);


//////////////////////////////////////////////////////////

// var str1 = "test";

// var r = Helper.isStartWith(str1, 'u');

// console.log(r);

// var arr = [2, 3, 4, 5, 6];

// for( var i in arr){
// 	console.log(arr[i]);
// }

// for (var i = 0; i<arr.length; i++){
// 	console.log(arr[i]);
// }

