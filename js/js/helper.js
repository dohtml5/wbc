!function(window, document, undefined) {

	var Helper = {};

	Helper.inArray = function(array, item) {
		var len = array.length;
		for (var i=0; i<len; i++) {
			if (array[i] == item) {
				return true;
			}
		}
		return false;
	};

	Helper.domByCls = function(clsName, context) {

		var elements, len, tmpArr, clsNameArr;

		if (document.getElementsByClassName) {
			return document.getElementsByClassName(clsName);
		}

		context = context || document.body;
		elements = context.getElementsByTagName("*");
		len = elements.length;
		tmpArr = [];
		clsNameArr = [];

		//console.log("len:" + len);

		for (var i=0; i<len; i++) {
			clsNameArr = elements[i].className.split(' ');
			//if (elements[i].className == clsName) {
			//if (elements[i].className.indexOf(clsName) > -1) {
			if (Helper.inArray(clsNameArr, clsName)) {
				tmpArr.push(elements[i]);
			}
			//console.log(elements[i].className);
		}

		//console.log(elements)

		return tmpArr;
	};

	Helper.html = function(dom, val) {
        if (arguments.length == 1) {
            return dom.innerHTML;
        } else if (arguments.length == 2) {
            dom.innerHTML = val;
        }
    };

	Helper.deepCopy = function(list) {
		var result;

		if (typeof list != 'object') {
			return;
		}

		if (list instanceof Array) {
			result = [];
		} else {
			result = {};
		}

		for (var key in list) {
			result[key] = list[key];
		}

		return result;
	};

	Helper.getType = function(item) {
		if (typeof item == 'object') {
			if (item instanceof Array) {
				return "array";
			}
			return "object";
		} else {
			return typeof item;
		}
	};

	Helper.getDateArr = function(date) {
		var y = date.getFullYear();
		var M = date.getMonth() + 1;
		var d = date.getDate();

		var h = date.getHours();
		var m = date.getMinutes();
		var s = date.getSeconds();

		return [y, M, d, h, m, s];
	};

	Helper.dom = function(id) {
		if (typeof id == 'string') {
			return document.getElementById(id);
		} else {
			return id;
		}
	};

	Helper.fill0 = function(num) {
		return num < 10 ? '0' + num : num;
	};

	Helper.isStartWith = function(str, char) {

		if (str.charAt(0) == char) {
			return true;
		}

		return false;

		/*if (str.indexOf(char) == 0) {
			return true;
		}

		return false;*/

	};

	window.Helper = Helper;

}(window, document);