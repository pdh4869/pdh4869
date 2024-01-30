// destructing assignment > array
//
// 배열 구조 분해 할당
const foo = ["one", "two", "three"];
const [one, two, three] = foo;
console.log(one, two, three);

// 선언에서 분리한 할당
let a,b;
[a,b] = [1,2];
console.log(a,b);

// 할당값이 undefined일 경우
const [c=5, d=7, e=9] = [1, null];
console.log(c,d,e);
