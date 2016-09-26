function bar(x = 2, y = x) {
	return [x, y];
}

var r = bar();

console.log(r);