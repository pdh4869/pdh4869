// arrow function
// 보통은 익명 함수로 사용, 함수 표현식처럼 변수에 할당하여 사용 가능
const sum = (a,b) => a+b;


// 함수 인자가 없거나 2개 이상일 경우, 가변 인자 사용할 경우 괄호 필요
() => console.log('empty call');
(a,b,c) => a+b+c;
(...rest) => rest.reduce((a,b) => a+b, 0);
