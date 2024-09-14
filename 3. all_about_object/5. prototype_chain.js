/**
 * Prototype (중요!! 어려움!!)
 */

const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티다.
// class 강의에서 배울떄  상속에서 부모 클래스에 해당되는 값이다.

console.log(testObj.__proto__);

function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

console.log(IdolModel.prototype); // 출력 결과 값이 비워진 객체하나가 출력된다.

//비워진 객체를 보는 방법

console.dir(IdolModel.prototype, {
    showHidden: true,
});
//출력결과 흥미로운게 constructor = function Idolmodel이라고 나온다,
//그럼 진짜 같은지 증명 해보자

console.log('-------------------------------');


//circular reference

console.log(IdolModel.prototype.constructor === IdolModel); // 결과는 true

//그러면 constructor의 prototype과 IdolModel의 prototype은 같을까???

console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype); // 당연히 true가 나온다.


const winter = new IdolModel('김민정', 2001);

console.log(winter.__proto__);


// 간단하게 요약하면 class든 함수든, 일반적인 방식이든 객체가 만들어지면
// 그 객체는 Object.prototype의 기능을 상속받아서 사용할수있게된다.


function IdolModel2(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function () {
        return `${this.name}이 인사를 합니다.`;
    }
}

const winter2 = new IdolModel2('김민정', 2001);
const karina2 = new IdolModel2('유지민', 2000);

console.log(winter2.sayHello());
console.log(karina2.sayHello());

console.log(winter2.sayHello === karina2.sayHello);

//출력 결과 false가 나온다. 왜냐하면 new로 생성한 생성자는 고유의 값을 가진다.
// 즉 new로 생성자를 만들면 서로 같은 프로퍼티지만 서로다은 메모리 공간에 저장된다.
//이것은 리소스 낭비이다!! 똑같은 기능을 중복으로 저장하기 때문에



// 정말 고유의 값인지 확인해보자
console.log(winter2.hasOwnProperty('sayHello'));
// 출력 결과 true 이다!!


//prototype으로 상속을 시켜보자!!!!!

console.log('-------------상속---------------');

function IdolModel3(name, year) {
    this.name = name;
    this.year = year;
}

//그리고 상속받을 프로퍼티를 아이돌 객체 외부에 작성한다.

IdolModel3.prototype.sayHello = function () {
    return `${this.name}이 인사를 합니다.`;
}


const winter3 = new IdolModel3('김민정', 2001);
const karina3 = new IdolModel3('유지민', 2000);

console.log(winter3.sayHello());
console.log(karina3.sayHello());

console.log(winter3.sayHello === karina3.sayHello); // 출력결과 true가 나온다,

console.log(winter3.hasOwnProperty('sayHello')); // false가 나온다, 즉 sayHello는 winter3안에 저장된게 아니라 상속 받은거다.

console.log(winter3.__proto__ === IdolModel3.prototype);

//----------------------------------------------

/**
 * getPrototypeOf
 * setPrototyeOf
 */



console.log('---------------------------')

function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello = function () {
    return `${this.name}이 인사를 합니다.`
}


function FemaleIdol(name, year) {
    this.name = name;
    this.year = year;

    this.dance = function () {
        return `${this.name}이 춤을 춥니다.`

    }
}

const winter4 = new IdolModel('김민정', 2001);
const karina4 = new FemaleIdol('유지민', 2000);

console.log(winter4.__proto__);
console.log(winter4.__proto__ === IdolModel.prototype);
console.log(Object.getPrototypeOf(winter4)); // 프로토 타입을 가져오는 코드 실행시 winter4의 프로토를 가져온다, 위랑 같은결과
console.log(Object.getPrototypeOf(winter4) === IdolModel.prototype);

//  Object.getPrototypeOf(winter4) === winter4.__proto__

//---------------------------------------------------------------------------------



console.log('-----------------------------------')

//인스턴스의 프로토 변경하기


console.log(winter4.sayHello()); // 당연히 실행된다.
console.log(karina4.dance()); // 역시 당연히 실행된다.

//console.log(karina4.sayHello()); // 당연히 상속 받지 않았음으로 실행된지 않는다.


console.log(Object.getPrototypeOf(karina4) === FemaleIdol.prototype); // true


// setPrototypeOf를 사용해서 프로토 체인을 변경 할수 있다. (상속받는 대상, 새로 상속하는 대상)


Object.setPrototypeOf(karina4, IdolModel.prototype);

console.log(karina4.sayHello());  // 상속대상이 바꼈고 sayHello가 잘 실행된다.

console.log(karina4.__proto__ === IdolModel.prototype);// true

//이런식으로 인스턴스의 __proto__를 직접 변경할 수 있다.

//------------------------------------------------------------------------------

console.log('----------------------------');

// 함수의 prototype 직접 변경하는법

FemaleIdol.prototype = IdolModel.prototype;

const ningning = new FemaleIdol('닝닝', 2002);

console.log(Object.getPrototypeOf(ningning) === FemaleIdol.prototype); // 위에서 변경 했음에도 true가 나온다.
console.log(Object.getPrototypeOf(ningning) === IdolModel.prototype); // 이 것도 true가 나온다.