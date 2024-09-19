/**
 * Hoisting
 * 
 * 모든 변수의 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 */


console.log(name);
var name = '윈터';
console.log(name);

//var를 사용하면 이런식으로 변수가 할당되기전에 변수를 호출하면 에러가아닌 undefined가 호출된다

console.log(age);
let age = 1;
console.log(age);

// let이나 const를 사용하면 undefined를 호출하지않고 에러가 뜬다.
// 그래서 우리는 var룰 사용하면 안된다.
