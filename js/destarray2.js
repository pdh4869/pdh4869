// destructing assignment array
//
// 변수 교환
let a = 1;
let b = 3;
[a,b] = [b,a];
console.log(a,b);

// 일부 반환 값 무시
function f() {
	return [1,2,3];
}
const [c, , d] = f();
console.log(c, d);

// 나머지 할당
const [e, g, ...rest] = [10, 20, 30, 40, 50];
console.log(e, g, rest);
