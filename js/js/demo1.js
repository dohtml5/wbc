
/*alert('Hello WBC!');

alert(2);*/

// ALERT(3);

// 标识符

// var x = 2;

// var X = 8;

// var y = 3;

// var z = x + y;

// // alert(z);

// alert(x);

// alert(X);

// var a;

// var aaa;

// var $abc;

// var _abc;

// var a2;

// // var 2a;

// var _2a;

// // var abc#;

// // var abc!;

// var abc;

/*var name = "张三"; // “”   ；

var name2 = 'bill';

var str = "abc!@#*%";

alert(str);*/

// var str;

// str = 'test'; // 赋值

// var str = 'test';

// var str = 'abc', name = "张三", age;

/*var str = 'abc';
var name = '张三';
var age;*/

/*var name = '张三';

console.log(name);

name = "李四";

console.log(name);*/

// var var = 3;

/*var x = 8;

x = 'test';*/

// var x = "ab\"c";
// var x = 'ab\'c';

// var x = 1.2;

/*var x = true;

var y = false;

console.log(x);*/

// var carname = 'bmw';

// var carname = new String('bmw2');

// console.log(carname.toString());

// var x = 5;

// var y = 7;

// x += 2; // x = x + 2;

// x -= 2;  // x = x - 2;

// x++; // x = x + 1;

// x--; // x = x - 1;

// x = 6;

// var y = 8;

// y++;

/*var x = 'abc';

var y = 'def';*/

// console.log(!(x <= y)); // ?
// console.log(x == y || y > 10);
// console.log(x == y && y < 10);


/*var x = 7;

if (x > 5) {
	console.log('OK');
}*/

/*var info;

var age = 32;

if (age < 18) {
	info = '未成年';
} else if (age < 35) {
	info = '青年';
} else if (age < 50) {
	info = '中年';
} else {
	info = '老年';
}
*/
/*if (age >= 18) {
	info = '成年人';
} else {
	info = '未成人';
}*/

// console.log(info);

// var day = 5;

// var info = '今天是：';

// switch(day) {

// 	case 0:
// 		info += '星期日';
// 		break;

// 	case 1:
// 		info += '星期一';
// 		break;

// 	case 2:
// 		info += '星期二';
// 		break;

// 	case 3:
// 		info += '星期三'; // info = info + '星期三';
// 		break;

// 	case 4:
// 		info += '星期四';
// 		break;

// 	case 5:
// 		info += '星期五';
// 		break;

// 	case 6:
// 		info += '星期六';
// 		break;

// 	default: 
// 		info = '非法日期';

// }

// console.log(info);

/*console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);*/

/*for (var i=1; i<=1000; i++) {
	console.log(i);
} 

console.log('循环结束');*/

// var total = 0;

/*for (var i=2; i<=100; i+=2) {
	total += i;
}*/

/*for (var i=1; i<=100; i++) {
	if (i % 2 == 0) {
		total += i; // total = total + i;
	}
	// console.log(i);
}*/

/*var i = 101;

while(i<=100) {
	total += i;
	i++;
}*/
/*
var i = 101;

do {
	total += i;
	i++;
} while(i<=100);

console.log(total);*/

/*for (var i=0; i<10; i++) {
	if (i == 5) {
		break;
		// continue;
	}
	console.log(i);
}

console.log('end for');
*/

/*try {
	alert2('test');
} catch (e) {
	// alert('刚才是想弹出一个字符串：test');
	// throw '你的网络不稳定，请稍后重试';
}

alert('other code');*/

// test();
// var test2;
// test2();

// function test() {
// 	alert('test');
// }

// var test2 = function() {
// 	alert('test2');
// };


// test2();

// test();

// function sum(x, y, z) {
// 	// var x = 7, y = 9, z;
// 	// console.log(7 + 8);
// 	// console.log(x + y);

// 	var total = 0;

// 	if (z != undefined) { // ???
// 		total = x + y + z;
// 	} else {
// 		total = x + y;
// 	}

// 	console.log(total);
// }

// sum(22, 3.5, 7);

// function sum(x, y) {
// 	console.log(x + y);
// }

// function sum2(x, y) {
// 	alert(x + y);
// }

// function sum3(x, y) {
// 	document.write(x + y);
// }

// var sum = function(num1, num2) {
// 	// alert(888);
// 	var total = num1 + num2;
// 	// console.log(num1 + num2);
// 	// return num1 + num2;
// 	// return 'abc';

// 	// alert(999);

// 	return total;

// 	total = 100;
// };

// var r = sum(7, 8);

// // alert(r)
// console.log(r)
// document.write(r)

// var o = new Object();

// var o = new Object;
/*
var o = {};

console.log(o);*/

/*var Dog = {};

Dog.color = 'black';
Dog.age = 3;
Dog.length = '1.2m';
Dog.hasChildren = false;
Dog.childrenName = undefined;
Dog.eyeColor = 'black';
Dog.color = 'yellow';
Dog.eat = function() {
	console.log('this dog is eating...');	
};
*/

/*var Dog = {
	name: 'wangcai',
	color: 'black',
	age: 3,
	length: '1.2m',
	childrenName: undefined,
	hasChildren: false,
	eyeColor: 'black',
	'nick name': 'awang',
	eat: function() {
		// console.log(this);
		console.log(this.name + ' is eating...');
	}
};

console.log(Dog['nick name']);*/

// for (var dog in Dog) {
// 	// console.log(dog);
// 	// console.log(Dog.dog);
// 	console.log(Dog[dog]);
// }

// Dog.age = 5;

// delete Dog.length;

// console.log(Dog);

// Dog.eat();
// Dog['eat']();

// var color = 'black';

/*var Dog = {
	"color": 'black',
	"age": 3,
	"length": '1.2m',
	"childrenName": undefined,
	"hasChildren": false,
	"eyeColor": 'black'
};*/


// console.log(Dog.length);
// console.log(Dog['color']);


// function test() {
// 	console.log(this);
// }

// test();

/*function testStatrChar(str) {
	if (str.charAt(0) == 'a') {
		return true;
	} else {
		return false;
	}
}

var str = 'adaef';

var r = testStatrChar(str);

console.log(r);*/

/*var Wbc5 = {
	testChar: function(str) {
		if (str.indexOf('a') == 0) {
		// if (str.charAt(0) == 'a') {
			return true;
		} else {
			return false;
		}
	},
	name: 'abc'
};

var r = Wbc5.testChar('ahijk');

console.log(r);*/

// var d = new Date();

// console.log(d);

// ****年**月**日 **：**：**

// function getFormatDate(date) {
// 	return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日' + ' ' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
// }

// var currDate = new Date();

// var d = getFormatDate(currDate);

// console.log(d);

// alert(999);

// var arr = new Array();

// var arr = new Array(10);

// var arr = [];

// arr[0] = 'a';

// arr[1] = 'b';

// arr[2] = 'c';

// var arr = new Array('a', 'b', 'c', 'd');

// var arr = ['a', 'b', 'c', 'd', 'e'];

// var arr = ['a', 1, true, undefined, null, {name: 'test'}, [2, 3, 4]];

// console.log(arr.length);

// for (var i=0; i<arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (var index in arr) {
// 	console.log(arr[index]);  // arr[0]
// }

// arr.length = 0;

// arr = [];

// console.log(arr[5]['name']);

// console.log(arr[6][1]);

// arr[1] = 2;
// arr[5].name = 'zhangsan';

// console.log(arr);

// var arr1 = [1, 2, 3];



// var r = arr1.join('|');

// console.log(typeof r);

// console.log(arr1.join('|'));

// var arr2 = ['a', 'b'];

// var arr3 = arr1.concat(arr2);
// var arr3 = arr2.concat(arr1);

// console.log(arr3);

// console.log(arr1 + arr2);

// arr1.toString();


// var arr3 = [2, 8, 6, 33, 1, 9];

// console.log(arr3);

// arr3.sort(function(x, y) {
// 	return x - y;
// });

// console.log(arr3);

// console.log(arr3.sort());

// var f = true;

// var f = -2;

// var f = ' ';

// var f = null;

// var f;

// var f = [1, 2, 3];

// var f = {};

// if (f) {
// 	alert(9);
// } else {
// 	alert(10);
// }