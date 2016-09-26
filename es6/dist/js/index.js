"use strict";

function bar() {
	var x = arguments.length <= 0 || arguments[0] === undefined ? 2 : arguments[0];
	var y = arguments.length <= 1 || arguments[1] === undefined ? x : arguments[1];

	return [x, y];
}

var r = bar();

console.log(r);