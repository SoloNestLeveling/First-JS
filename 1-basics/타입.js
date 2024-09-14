/**
 * object(객채)
 * 1)function
 * 2)array
 * 3)object
 */

const age = 19;
const temperature = -20;
const pi = 3.14;

console.log(typeof temperature, typeof pi);

//typeof 변수이름 변수의 타입을 알수있다.



// template literal  (``)
// ` ` 을 이용하면 사람이 보는 그대로를 표현할수있다.

const aespa = `에스파 윈터`;
console.log(aespa);
console.log(`${aespa}는 이쁘다`);


//Symbol 타입은 비교적 최근 생겨난 타입이다.
// symbo은 유일무일한 값을 의미한다.

const test1 = "1";
const test2 = "1";

console.log(test1 === test2);  //콘솔결과 당연히 true가 나온다.

const test3 = Symbol('1');
const test4 = Symbol('1');

console.log(test3 === test4); // 콘솔시 true가 나올것 같지만 Symbol 안에 값은 유일무일한 값이므로 false가 나온다



/**
 * Object 타입
 * 
 * Map
 * 키:벨류 쌍의 값으로 이루어짐
 * key:value
 */

const dictionary = {
    red: '빨강색',
    distribution: '분배',
    aespa: '최고의 걸그룹'
};

console.log(dictionary);
console.log(dictionary['aespa']);
console.log(dictionary['distribution']);
