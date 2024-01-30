const array = [100, 6, 89, 34, 0, 1];
array.sort(); // 유니코드 포인트 순서에 따라 문자열처럼 처리
console.log(array);

array.sort((a,b) => a-b);
console.log(array);

array.sort((a,b) => b-a);
console.log(array);
