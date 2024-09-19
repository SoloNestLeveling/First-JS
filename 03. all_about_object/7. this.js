/**
 * this 키워드
 * 
 * 자바스크립트는 Lexical Scope를 사용하기 때문에 함수의 스코프가
 * 정의 시점에 평가된다.
 * 
 *  !!!!! 하지만  this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다.
 */


function testFunction() {
    return this;
}

console.log(testFunction());

//일반 함수를 실행하면 this는 global에 map핑 된다. global object는 웹에서 window 객체가 된다.

console.log(testFunction() === global); // 증명! true가 나온다.



const winter = {
    name: '김민정',
    year: 2001,
    sayHello() {
        `안녕하세요 저는 ${this.name}입니다.`
    }
}

// 아주 일반적인 this의 맵핑


//함수 내에 this 맵핑은 그 함수를 받는 객체 생성시 this가 함수 내에 맵핑된다.

function Person(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function () {
        return `안녕하세요 저는 ${this.name}입니다.`
    }
}

//위에 함수를 받는 객체를 만들면 this가 맵핑 된다.

const winter1 = new Person('김민정', 2001); //이렇게 객체 생성시 this는 함수내에서 맵핑된것을 볼 수 있다.


Person.prototype.dance = function () {
    return `${this.name}이 춤을 춥니다.`;  //winter1의 프로토는 Person.prototype이기 때문에 역시 잘된다,
}


console.log(winter1.sayHello());
console.log(winter1.dance());


//상위레벨 함수를 선언하면 함수애의 this 해당 객체에 선언되지만, 이외에 곳에 함수를 선언하면 함수내의 this는 무조건 global object에 속한다.


/**
 * 1)일반 함수로 호출할땐 this가 최상위 객체(global 또는 window)를 가리킨다
 * 2)메서드로 호출할땐 호출된 객체를 가리킨다.
 * 3)new 키워드를 사용해서 객체를 생성했을땐 객체를 가리킨다.
 */


/**
 *  바인딩 하는 방법
 * 1)apply
 * 2)call
 * 3)bind
 */

function returnName() {
    return this.name;
}

const winter3 = {
    name: '김민정',
}

console.log(returnName.call(winter3));
console.log(returnName.apply(winter3));


/**
 * call : 컴마를 기준으로 아규먼트를 순서대로 입력
 * apply : 아규먼트를 리스트로 입력한다.
 */

function multyfly(x, y, z) {
    return `${this.name} : ${x * y * z}`
}

console.log(multyfly.call(winter3, 1, 2, 3));
console.log(multyfly.apply(winter3, [1, 2, 3]));


//bind : 바인드가된 함수를 반환해서 바로 실해되지 않고 함수를 호출하면 실행된다.

const laterFunc = multyfly.bind(winter3, 1, 2, 3,);

console.log(laterFunc());