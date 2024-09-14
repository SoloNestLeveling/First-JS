/**
 * closure
 * 
 * '클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다'
 * 
 * '상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure라고 한다.'
 */
function getNumber() {
    const number = 5;
    function innerGetNumber() {
        return number;
    }

    return innerGetNumber();
}

//console.log(getNumber()); 


function getNumber() {
    var number = 5;
    function innerGetNumber() {
        return number;
    }

    return innerGetNumber;

}

const user = getNumber();

console.log(user);
console.log(user());

// 상위 함가 함수를 리턴 해줌으로써 상위함수 실행이 다끝나고 하위함수가실행되는 것을 closure 라고 한다.

//그러면 왜 아것을 사용하는냐?? 

/**
 *  1) 데이터 캐싱
 *   엄청나게 오래걸리는 작업을 반복적으로 해야 할때
 */

function cacheFunction(newNumber) {

    //자 엄청나게 오래 걸리는 작업이 있다고 가정해보자

    var number = 10 * 10; // 이 계산식은 엄청오래 걸리는 계산식이라고 가정!

    return number * newNumber;

}

console.log(cacheFunction(10));
console.log(cacheFunction(20));
console.log(cacheFunction(30));

//이런식으로 새로 실행할때마다 위에 (var number = 10 * 10;) 이 엄청 오래 걸리는 계삭식을
// 실행할때마다 실행해서 리소스를 낭비한다.


//closure  사용하면 closure가 오래 걸리는 계식 식을 계산하고 결과를 저장하고 있다가
// 새로 실행되면 저장된 결과값으로 바롸바로 실행해준다!!

function cacheFunction() {
    var number = 10 * 10;
    function innercacheFuntion(newNumber) {
        return number * newNumber;

    }
    return innercacheFuntion;

}

const user2 = cacheFunction();
console.log(user2(10));

//-----------------------------------------------------

console.log('------------------------');

/**
 *  1-2) 데이터 캐싱  
 * 반복적으로 특정값을 변경해야 할 때!
 */


function cacheFunction2() {
    var number = 99;

    function innercacheFuntion2() {
        number++
        return number
    }

    return innercacheFuntion2;

}

const runner = cacheFunction2();

console.log(runner());  //실행할때마다 넘버 값이 1씩 증가한다. 1씩 증가 할때마다 closure는 값을 저장해 놓는다.
console.log(runner());
console.log(runner());


/**
 * 2) 정보 은닉
 */

function Idol(name, year) {
    this.name = name;
    var year = year;

    this.sayHello = function () {
        return `안녕하세요 저는 ${this.name}입니다. 저는 ${year}년생 입니다.`;
    }
}

const winter = new Idol('김민정', 2001);

console.log(winter.sayHello());
console.log(winter.year);  // 접근 불가능!!
