/**
 * + , - , ^(곱셈) , /(나누기) , %(나머지)
 * 
 * 
 * 증가와 감소 
 * 
*/

var number = 1;
number++;
console.log(number);

number--;
console.log(number);


/**
 * 연산자의 위치
 * 
 */

let result = 1;
console.log(result);

console.log('--------------');

//++를 변수뒤에 둘 경우 증감을 하기전에 result 값을 저장하고 이후 증감된 number를 저장한다.

result = number++;
console.log(result, number);

result = number--;
console.log(result, number);

result = ++number;
console.log(result, number);

// 증감을 앞에두는 경우는 없다!!


/**
 * number가 아닌 값에 + -를 붙이면 타입이 number로 된다, 단 숫자가 될 가능성이 있을경우
 */

let sample = "99";
console.log(sample);
console.log(typeof sample);
console.log('--------------------')

console.log(+sample);
console.log(typeof +sample);   //타입이 number로 바뀜 +해준 코드에서만 바뀜
console.log('--------------------')

sample = true;   //true는 숫자로 1이다. false는 0
console.log(+sample);
console.log(typeof +sample);
console.log('--------------------')

sample = true;   //true는 숫자로 1이다. false는 0
console.log(-sample);
console.log(typeof -sample);

/**
 * 할당 연산자
 * 값을 계산하고 저장한다.
 */

let numbers = 100;
console.log(numbers);

numbers += 10;
console.log(numbers)

numbers -= 10;
console.log(numbers);

/**
 * 비교 연산자
 * 
 * 값을 비교하는 ==   //이 경우 5 =='5'도 true가 되고 true == 1 도 true가된다. 
 * 
 * 값과 타입을 비교해주는 ===
 * 
 * 같지 않다(다르다)  !=(값을 비교) , !== (값과 타입 비교)
 * 
 * 값을 비교하는 방식은 사용하지 않는다.
 */


/**
 * 삼항 조건 연산자 (ternary operate)
 */
var a = 5;
var b = 1;
console.log(a > b ? 'a는 b보다 크다' : 'a은 b보다 작다');
// 콜론(:)을 기준으로 왼쪽은 참일경우 오른쪽 거짓일경우


/**
 * 논리 연산자 
 * &&(and) 모두 true여야 true
 * \\(or) 하나만 true여도 true를 반환한다.
 */


/**
 * 단축평가 (short circuit evaluation)
 * 
 * 무조건 외워햐 한다.
 * 
 * &&를 사용했을떄 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * \\를 사용했을때 좌측이 true면 좌측 값 반환
 * \\를 사용했을떄 좌측이 false면 우측 값 반환
 * 
 */


/**
 * null 연산자 ??
 * 값이 null이거나 undefined면  ?? 오른쪽 값을 반환한다
 */
console.log('----------------------');
let name;
console.log(name);
console.log(name ?? '윈터');

