// destructing assignment > object 2
//
// 객체 구조 분해 할당
const {a=10, b=5} = {a:3};
console.log(a,b);

// 기본값 갖는 새로운 이름의 변수에 할당
const {z:zz=10, x:xx=5} = {z:3};
console.log(zz, xx);

// 나머지 분해 할당
const {q, w, ...rest} = {q:10, w:20, e:30, r: 40};
console.log(q,w);
console.log(rest);
