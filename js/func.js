var arr1 = [1,2,3];
var arr2 = arr1.map(function(item) {
	return item * 2;
});
console.log(arr2);

function add(a,b) {
	return function(c) {
		return a + b + c;
	}
}

console.log(add(2,3)(10));
