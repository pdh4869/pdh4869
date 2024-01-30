// destructing assignment > object

// 객체 구조 분해 할당
const o = {p:42, q:true};
const {p, q} = o;
console.log(p, q);

// 선언에서 분리한 할당
let a,b;
// {a, b} = {a:1, b:2};
// unexpected token = 
// 코드 블록 블록으로 간주하므로 표현식으로 되도록 괄호로 감싸기 
({a,b} = {a:1, b:2});
console.log(a,b);

// 새로운 변수 이름으로 할당
const z = {g: 42, j: true};
const {g: foo, j:bar} = z;
console.log(foo, bar);
