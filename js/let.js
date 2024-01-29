var x = 1;
function varTest() {
	const x = 2;
	console.log(x);
}
varTest();

console.log(x);

for (let i=0;i<3;i++){
	var x = 10;
}
console.log(x);
console.log(i);
