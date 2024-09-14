/**
 * 
 * 타입변환
 * type conversion
 * 
 * 1) 명시적
 * 2) 암묵적 (쓰면은 뒤통수 맞음!!)
 * 
 */

// 명시적 타입변환

let age = 32;

let stringAge = age.toString();
console.log(typeof stringAge, stringAge);



//number로 변환
let day = '30';
let sight = '1.5';

let numberDay = parseInt(day); //정수로 변환
console.log(typeof numberDay, numberDay);


let mySight = parseFloat(sight); //실수로 변환
console.log(typeof mySight, mySight);


/**
 * 불리언 값으로 변환
 * 
 * ! - 아니다(false)
 * !! - 아닌것이 아니다 (true)
 */


console.log(!!'0'); //스트링 입력시 ''안에 아무것도 입력하지 않으면 기본적으로 false이다.
console.log(!!'');
console.log(!!0); // 0은 false , 1은 true
console.log(!!{}); //오브젝트는 {}안에 아무것도 넣지 않아도 true이다
console.log(!![]); // array도 마찬가지이다.

/**
 * 실무에서 많이 쓰인다 예를 들어 사용자 로그인 확인할때
 * 
 * 아무 글자도 없는 스트링은 false
 * 값이 아무것도 없으면 false
 * 0이면 false
 */

