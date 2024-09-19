

/**
 * function 함수 , 함수는 object 이다!!
 * 반복하는것이 싫다 그래서 함수를 쓴다.
 * 
 */

function calculate(number) { //parameter 입력
    console.log(number + 10);
}

calculate(2); //argument입력
calculate(4);

//함수에서 입력 받는 값에대한 정의를 parameter라고 한다.
//실제로 입력받는 값은 argument라고 한다. 

// defalut 파라미터, 설정한 파라미터에 argument를 넣어주지 않을때 설정한 defalut값을 자동으로 넣어줌

function multifly(x, y = 0) {
    console.log(x * y);
}

multifly(1, 3);
multifly(1); //y값을 입렵하지 않아서 디폴트한 0이 자동으로 적용 

/**
 * 반환받기
 * return
 */

function multifly(x, y) {
    return x * y;
}

const result1 = multifly(2, 3);
console.log(result1);

console.log(multifly(result1, 3));


/**
 * arrow 함수
 */

const multifly2 = (x, y) => {
    return x * y;
}

const result3 = multifly(3, 5);
console.log(result3);


//위에 코드를 더 간결하게 표현하기

const multifly3 = (x, y) => x * y;

const result4 = multifly3(1, 3);
console.log(result4);

//파라미터가 1개일 경우 더 간결해진다.

const multifly4 = x => x * 10;

console.log(multifly4(3));


//조금 어려운 arrow 함수
//커링 함수!! 함수안에 함수를 인자로 받는 함수를 넣어서 함수를 중첩으로 사용
//함수를 좀더 유연하게 사용 할  수 있다.

const multifly5 = x => y => z => x + y + z;

const result5 = multifly5(1);
const addOne = result5(2)(3);

console.log(addOne);





function multifly6(x, y, z) {
    console.log(`x:${x} y:${y} z:${z}`);
}

multifly6(1, 2, 3);

console.log('--------------------------');
/**
 * arguments 출력해보기
 * 
 */

const multifly7 = function (x, y, z) {
    console.log(arguments);  // 실행해보면 arguments의 순서가 인덱스로 출력된다.
    return x * y * z;
}

console.log(multifly7(1, 2, 3));

// arguments를 이용해서 무한하게 계산하는 방법 reduce 함수 사용


const multiplyAll = function (...arguments) {
    return Object.values(arguments).reduce((a, b) => a * b, 1) //끝에 1은 초기값 arguments에 값이 없을때 1을 반환한다.
}
console.log(multiplyAll(3, 4, 5, 2, 3, 6, 7, 8, 3));

console.log('----------------------')
//즉시 실행 함수
global.console = console;
(function (x, y) {
    console.log(x * y);
})(1, 2);

