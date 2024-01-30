// 함수 본문이 한줄인 경우 return, 중괄호 생략 가능
var func = x => x * x;
var func = (x,y) => {return x + y; };

// 객체 리터럴 반환 시 괄호로 묶기
// no
var funcc = () => {foo: 1};
// funcc 호출은 undefined 반환
//
// yes
var funcc = () => ({foo: 1});

// 줄바꿈 x
//
//var func = ()
//=> 1;
// syntaxerror
