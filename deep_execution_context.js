
//실행 컨텍스트
/**
 * 
 * 실행 컨텍스트는 소스코드를 실행하는데 필요한 환경을 제공하고 코드의 실행결과를 실제로 관리하는 영역이다.
 * 
 * 실행 컨텍스트에는 크게 두 가지 과정이 있다.
 * 
 * 1소스코드 평가- 이 과정에서는 실행 컨텍스트를 생성하고 변수, 함수등의 선언문을 먼저 실행하고 실행컨텍스트가 관리하는 스코프에 등록하여
 *  접근 가능한 상태롤 만든다. 이 과정에서 변수에는 undefind가 선언되고 초기화 된다. 호이스팅의 원인이다.
 * 
 * 2.소스코드 실행 - 이 과정에서는 선언문을 제외한 소스코드가 순차적으로 실행 된다. 이때 필요한 정보를 평가 과정에서 실행 컨텍스트가 
 * 관리하는 스코프에서 등록된 값들을 찾아서 가져온다. 그리고 실행결과는 다시 실행컨텍스트가 관리하는 스코프에 등록되어 접근 가능한 범위가 된다.
 * 
 * 
 * (함수의 실행컨택스트가 종료되면 생명주기가 끝나고 프로퍼티를 제외한 변수들에는 접근이 불가능하다.)
 * 
 * 
 */


//렉시컬 환경
/**
 * 렉시컬 환경은 키와 값을 갖는 객체형태의 스코프이고, 식별자를 키로, 식별자에 바인딩된 값을 벨류로 저장하여 관리한다.
 * 
 * 렉시컬 환경에는 두개의 컴포넌트로 구성된다.
 * 
 * Environment Record (환경 레코드) - 스코프에 포함된 식별자를 등록하고 식별자에 바인딩된 값을 관리하는 저장소이다.
 * 소스코드 타입에 따라 관리하는 내용에 차이가있다.
 * 
 * OuterLexicalEnvironmentReference (외부 렉시컬 환경에 대한 참조) - 상위 스코프를 가리킨다. 여기서 상위 스코프는
 * 외부렉시컬 횐경을 의미한다.  (*외부 렉시컬 환경이란? 예를들어 빈곳에 함수를 선언하면 그 함수는 상위 스코프인 전역객체를 
 * 가리키고, 그 전역객체가 외부렉시컬 환경이다. 중첩 함수에서 내부함수는 상위 스코프로 외부 함수를 참조 할 수 있는데 이떄,
 * 내부함수의 외부 렉시컬 환경은 내부 함수를 감싸고 있는 외부 함수 이다.)
 * 
 * 즉 외부 렉시컬 환경에 대한 참조는 스코프 체인을 구현한다!!
 *  
 * 
 */


//전역 객체
/**
 * 코드가 실행되기 이전에 자바스크립트 엔진에 의해 가장 먼저 실행되는 특수한 객체, 브라우저 환경에서는 window, Node 환경에서는 global이
 * 전역 객체를 가리킨다. 즉, 어느 객체에도 속하지 않는 최상위 객체
 * 
 * ( * globalThis- 브라우저 환경과 노드환경에서 전역 객체를 가리키던 식별자들을 하나로 통일 한것)
 * 
 * let,const로 선언한 변수는 전역객체의 프로퍼티가 아니다. 이 것들은 보이지 않는 개념적인 블록(전역 렉시컬 환경의 선언적 레코드) 내에 존재한다.
 * 
 * var, let, const를 구별 하기 위해 전역 환경 레코드는 객체 환경 레코트(object environment record)와 선언적 환경 레코드(declarative
 * environment record)로 구성되어있다.
 * 
 * 객체 환경 레코드 - 기존 전역 객체가 관리하던 var키워드로 선언한 전역 변수와 함수 선언문으로 정의한 전역 함수, 빌트인 전역 프로퍼티, 빌트인 
 * 전역 함수, 표준 빌트인 객체를 관리한다.
 * ("BindingObject"는 실제로 객체 환경 레코드(객체 환경의 내부 구조 중 하나)에 존재하는 객체를 가리키는 용어다. 
 * 객체 환경 레코드는 변수를 객체 프로퍼티로 매핑하는 역할을 하며, 이렇게 매핑된 변수와 프로퍼티 간의 연결을 "BindingObject"라고 한다.)
 * 
 * 선언적 환경 레코드 - let,const로 선언한 변수를 관리한다.
 *   
 */
const x = 1;
const y = 2;


function foo(a) {
    const x = 10;
    const y = 20;

    console.log(a + x + y);
}

foo(100)

console.log(x + y)



var s = 1;

function outer() {
    const s = 100;
    return console.log(s)
}

outer()





//클로저
/**
 * outer 함수보다 inner 함수가 더 오래 살아 남는 경우
 * outer 함수가 inner 함수를 실행하지 않고 반환 하면 반환 시점에서 상위 함수는 생명 주기가 끝난다. 생명주가 끝나면 outer 함수의 식별자를 참조 할 수없다.
 * 그럼에도 inner 함수는 outer함수를 참조 할 수 있는데 그 이유는 inner 함수가 실행되면 inner 함수 내부에 있는 [[Environment]] 객체에 outer 함수의
 * 렉시컬 환경을 상위 스코프로 저장한다. 이 처럼 inner 함수는 상위 스코를 기억하고 있어 실행 할때 참조 한다.  
 * 
 * 클로저 조건- 내부 함수가 외부 함수의 변수를 참조해야 합니다.
 *           내부 함수가 외부 함수보다 더 오래 살아남아야 합니다.
 * 
 * 모던 자바스크립트에서는 메모리 최적화를 위해 참조하고 있는 상위 식별자외 나머지 식별자는 기억하지 않는다.
 * 
 * 
 * 클로저의 활용 장점
 * 
 * 1. 클로저는 상태를 안전하게 저장하고 유지하기 위해 사용한다. 즉 상태가 의도치 않게 변경되지 않도록 상태를 안전하게 은닉 하고
 *    특정 함수에게만 상태 변경을 허용하기 위해 사용한다.
 */





// function foo() {
//     const x = 1;
//     const y = 2;

//     function bar() {
//         const z = 3;
//         debugger;
//         console.log(z);
//     }
//     return bar
// }

// foo();


//  이 코드처럼 내부함에 z변수가 존재해서 상위 스코프의 식별자를 참조 하지 않게 되면 아무리 클로저 기능을 한다고해도 이는 클로저 함수가 아니다.
//  참조 되고 있는 상위스코프의 변수를 "자유변수" 라고 한다.



// const increase = (function () {
//     let num = 0;

//     return function () {
//         return ++num;
//     };
// }())




const counter = (function () {

    let num = 0;

    return function () {
        return ++num
    }
}())

console.log(counter())
console.log(counter())
console.log(counter())





const IncreAndDecre = (function () {

    let num = 0;
    function Counter() {

    }

    Counter.prototype.increase = function () {
        return ++num
    }

    Counter.prototype.decrease = function () {
        return num > 0 ? --num : 0;
    };

    return Counter

}());

const counter1 = new IncreAndDecre();

console.log(counter1.increase())
console.log(counter1.increase())
console.log(counter1.decrease())



function makeCounter(aux) {
    let counter = 0;

    return function () {

        counter = aux(counter)
        return counter
    }
}

function increaseCounter(n) {
    return ++n;
}

function decreaseCounter(n) {
    return --n;
}

const increase = new makeCounter(increaseCounter)
const decrease = new makeCounter(decreaseCounter)

console.log(increase())
console.log(increase())
console.log(decrease())

// increase와 decrease는 서로 독립된 렉시컬 환경을 가지고 있어 counter가 공유되지 않는다.
// counter를 공유하려면 makeCounter함수를 두번 실행하면 안된다.



console.log("------------------개선코드-------------")
// 개선 한 코드

const makeCounter2 = (function () {
    let counter = 0;

    return function (aux) {
        counter = aux(counter)
        return counter
    };
}());

function increaseCounter2(n) {
    return ++n;
}

function decreaseCounter2(n) {
    return --n;
}

console.log(makeCounter2(increaseCounter2))
console.log(makeCounter2(decreaseCounter2))
console.log(makeCounter2(increaseCounter2))
console.log(makeCounter2(increaseCounter2))


console.log("------------------------------------------------")
// 클로저 활용2 정보 은닉


const Person = (function () {

    let _age = 0;

    function Person(name, age) {
        this.name = name;

        _age = age
    };

    Person.prototype.sayHello = function () {
        console.log(`안녕하세요 저는 ${this.name}이고 나이는 ${_age}살 입니다.`)
    };

    return Person
}())

const winter = new Person("김민정", 23)
const oh = new Person("oh", 31);

winter.sayHello()
oh.sayHello()
console.log(`${winter.name} : ${winter._age}`)

// 문제점 새로운 인스턴스를 생성해서 _age 값을 변경하면 마지막에 변경된 값으로 유지된다. 이유는 프로토타입 메서드는 클로저 로써 단 한번만 실행되기 때문인다.



var func = [];

for (var i = 0; i < 3; i++) {
    func.push(i)
}


for (var j = 0; j < func.length; j++) {
    console.log(func[j])
}