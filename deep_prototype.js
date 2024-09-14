// 모든 객체는 [[Prototype]] 내부 슬롯을 가지고 있다.
// 객체가 생성될떄 객체 생성 방식에 따라 프로토타입이 결정되고 [[Prototype]]에 저장된다.

// 객체 리터럴로 생성된 객체의 프로토타입은 Object.prototype이다.
// 생성자 함수에 의해 생성된 객체 프로토타입은 생성자 함수의 prototype 프로퍼티에 바인딩되어 있는 객체디.


const human = {
    name: "a",
    age: 23
};

console.log(human.__proto__ === Object.prototype) //true



function person(name) {
    this.name = name

    this.sayHello = function () {
        return this.name
    }
}

console.log(person === person.prototype.constructor) //true




// __proto__ 는 프로토타입에 간접적으로 접근 할 수있게 하는 접근자 프로퍼티이고 모든객체가 가지고 있다.
// 정확히 말하면 모든 객체가 __proto__를 소유하고 있는게 하니고 __proto__는 Object.prototype의 프로퍼티이다.
// 모든객체는 상속을 통해 Object.prototype.__proto__접근자 프로퍼티를 사용 할 수 있다.


const obj = Object.create(null);
const parent = { x: 1 };


console.log(Object.getPrototypeOf(obj) === obj.__proto__)



// 함수는 prototype 프로퍼티를 가지고 있고 이 프로퍼티는 함수.prototype을 가리킨다. 
// 함수.prototype은 생성자 함수에 의해 생성된 인스턴스의 prtotype이다.
// 함수.prototpye은 인스턴스 객체가 공유할 프로퍼티랑,메서드가 저장되어있다.

// 화살표함수와 메서드 축약 표현은 non-constructor암으로 prototype을 가지지 않는다.



// 생성자 함수의 prototype도 최상위 프로토타입인 Object.prototype을 상속 받은거다

//Function은 내장된 생성자 함수의 인스턴스. Function.prototype은 모든 함수의 프로토타입 객체를 나타내며,
//함수를 생성할 때 해당 함수에 상속될 속성과 메서드를 포함합니다.Function.Object의 프로퍼티인 call, apply 같은 것을 사용할 수 있다.






function Person2(name) {
    this.name = name

}

const me = new Person2("me")

console.log(Person2.prototype === me.__proto__)
console.log(Person2.prototype.__proto__ === Object.prototype)



// 리터럴 표기법에 의해 생성된 객체의 경우 프로토타입의 constructor프로퍼티가 가리키는 생성자 함수가 반드시 객체를 생성한 생성자 힘수라고 단정할 수는 없다.

const literalObj = {}

console.log(literalObj.prototype === Object); //true
console.log(literalObj.__proto__ === Object.prototype)//true



//Object에 의해 객체가 생성되고 하무런 인수도 전달하지 않으면 추상연산 (ordinaryObjectCreat)를 호출하여 빈 객체를 생성한다.
// 이후 값을 전달 하면 빈 객체에 값이 전달된다.

const abstractObj = new Object();

console.log(abstractObj);




function sayHello(name) {
    console.log(`Hello, ${name}!`);
}
const say = new sayHello("a")





// * 사용자 정의 생성자 함수와 프로토타입 생성 시점

//생성자 함수로서 호출할수 있는 함수, 즉 constructor는 함수 정의가 평가되어 함수객체를 생성하는 시점에 프로토타입을 생성한다.

console.log(Winter.prototype) //호이스팅에의해 함수선언문은 런타임에 먼저 실행 , 생성자 함수가 생성되는 시점

function Winter(name) {
    this.name = name
}





//생성된 프로토타입도 자신의 프로토 타입을 갖는다 , 생성된 프로토타입의 프로토타입은 Object.prototype이다.



// * 빌트인 생성자 함수와 프로토타입 생성 시점

// 모든 빌트인 생성자 함수는 전역 객체가 생성되는 시점에 프로토타입이 생성된다.
//빌트인 생성자에 의해 생성된 객체의 프로로토타입은 빌트인 생성자 함수의 프로로토타입 프로퍼티에 바인딩된다.





//객체 리터럴에 의해 생성된 객체의 프로토타입은 Object.prototype이다.
// 그래서 Object.prototype의 프로퍼티,메서드를 공유 할 수 있다.

const obj1 = { x: 1 }

console.log(obj1.__proto__ === Object.prototype)
console.log(obj1.__proto__.isPrototypeOf(Object))
console.log(obj1.toString())





//Object에 의해 생성된 객체의 프로토타입은 Object.prototype이다.

const obj2 = new Object()
obj2.x = 2;

console.log(obj2)
console.log(obj2.constructor === Object) //true






// ** 프로토타입 체인

//프로토타입의 프로토타입은 언제나 Object.prototype이다.
//모든 함수는 Function 빌트인 생성자로인해 생성되고 Function.prototype을 상속받아 이 프로토타입의 프로퍼티(apply,call 등)를 공유한다.
function Idol(name) {
    this.name = name;
}

Idol.prototype.sayHello = function () {
    return `안녕하세요 저는 ${this.name} 입니다.`
}

const winter = new Idol("winter")

console.log(winter.__proto__ === Idol.prototype)  // true
console.log(Idol.prototype.__proto__ === Object.prototype) //true , winter 인스턴스는 Object.prototype의 프로퍼티 및 메서드를 공유한다.
console.log(winter.__proto__.constructor === Idol)  //true
console.log(Idol.prototype.constructor === Idol)  //true


console.log(winter.hasOwnProperty("name"))

// winter 객체에는 hasOwnProperty 프로퍼티가 없다, 그래서 프로토타입 체인을 따라 winter의 [[prototype]]에 바인딩된 상위 프로파티를 따라가
// Idol.prototype으로 올라가서 hasOwnProperty을 찾는다. 여기서도 hasOwnProperty은 존재하지 않는다. 그래서 내부슬롯에 바인딩된 상위 프로토타입인
// Object.prototype으로 올라가서 hasOwnProperty을 찾는다, 이곳에는 존재함으로 가져온다.
// Object.prototype은 프로토타입의 종점이다. 당연하게도 종점이기때문에 [[Prototype]]의 내부슬롯은 null이다.
// Object.protoype에서도 프로퍼티를 찾을수 없는 경우 에러가아닌 undefined를 반환한다.
// 당연히 식별자는 스코프 체인에서 검색한다.


console.log('-----------------------------------------')

//정적 프로퍼티/메서드
// 인스턴스는 자신의 프로토타입 체인에 있는 프퍼로퍼티 이외의 프로퍼티에는 접근이 불가능하다.

function Idol2(name, group) {
    this.name = name;
    this.group = group;

    const groupName = "le"

    //static method
    Idol2.groupName = function () {
        console.log(groupName)
    }

}

//프로퍼티 메서드
Idol2.prototype.sayHello = function () {
    console.log("hi")
}


const eunChea = new Idol2("은채", "Le")
eunChea.sayHello()



Idol2.groupName()



const staticFuc = Object.create({ name: "winter" })

console.log(Object.hasOwnProperty("name")) // true




const Idol3 = (function Idol3() {

    const Idol = "Female Idol"

    return function () {
        console.log(Idol)
    }
}())

const en = new Idol3()


en.Idol





// in 연산자는 확인 대상 뿐만 아니라 확인 대상자가 상속받는 모든 프로토타입 체인을 올라가면서 찾는다!!

const person3 = {
    name: "a",
    age: 23,
    __proto__: { address: "ko" }
}

console.log(person3.__proto__ === Object.prototype)
console.log("name" in person3)
console.log("toString" in person3) // true toString은 Object.prototype 프로퍼티이다.


// Es6에서는 Reflect.has를 사용한다. 동작 방식은 in과 완전히 일치한다.

console.log(Reflect.has(person3, "age")) //true

if (Reflect.has(person3, "toString")) {
    console.log("person3의 상위 프로토타입은 Object.prototpe입니다.")

} else {
    console.log("error")
}


// 만약 해당 객체에만 존재하는지 알고 싶다면 hasOwnProperty 메서드를 사용한다.

console.log(person3.hasOwnProperty("name")) // true
console.log(person3.hasOwnProperty("toString")) // false, 이렇게 상속받은 프로퍼티는 찾지 않는다.



console.log("--------------for...in----------------")

//for ..in
for (const key in person3) {
    console.log(person3[key])
}


// for in 문은 프로토타입 체인상의 존재하는 모든 프로토타입 프로퍼티들중 enumerable이 true로 설정된 값들을 열거한다.

// console.log(Object.getOwnPropertyDescriptors(Object.prototype)) //Object.prototype의 모든 프로퍼티들의 enumerable은 fasle이다.





console.log("---------------ES8------------------")

//ES8도입된 Object.entries(), Object.keys(), Object.values()를 사용해서 원하는 객체에서만  값들을 배열 형태로 받을 수 있다.


console.log(Object.entries(person3))
console.log(Object.keys(person3))
console.log(Object.values(person3))


//보너스 Object.entries를 사용하면 키,벨류 값을 배열로 나열하지만 객체형태로 나열하지는 않는다 , 이것을 객체형태로 바꾸는법
// [['key' ,'value'],['key' ,'value']]  ----> {key:'value'}

const array = Object.entries(person3)
const objArray = Object.fromEntries(array)
console.log(objArray)








//forEach - map 차이

const num = [1, 2, 3, 4, 5]

const newNum2 = num.forEach(x => { return (x) })
console.log(newNum2)  // undefined forEach는 반환을 하지 않는다. 그래서 콜백 안에서 console.log를 통해 직접 출력하는 방식으로 사용
const newNum = num.map(x => { return (x) })
console.log(newNum)   // 새로운 배열을 생성해서 열거한다.




// 원시 값과 래퍼 객체

// 자바스크립트는 표준 빌트인 객체인 String,Number,Boolean,Function,Array,Date를 호출하고 인스턴스를 생성할 수 있다.(사용 X)
// 이 객치들로 인스턴스를 생성하면 각각의 프로토타입을 가진다(예, String.prototype)

// 그런데 빌트인 객체가 아닌 일반 원시값으로 해도 빌트입 프로토타입이 상속되어 프로토타입 체인이 형성된다.


// 원시 객체

const string = 100;

console.log(string.__proto__ === String.prototype)  // true

console.log(string.toUpperCase())

console.log(typeof string, string)