class Person {
    name;
    password;
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
}

const winter = new Person("winter", "wqko302441")

console.log(winter.__proto__ === Person.prototype) //true
console.log(Person.prototype.__proto__ === Object.prototype) //true
console.log(Person.prototype.constructor === Person) //true
console.log(winter.__proto__.constructor === Person) //true
console.log(winter instanceof Person) //true
console.log(Object.getPrototypeOf(winter) === Person.prototype) //true
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype) //true
console.log(Object.getPrototypeOf(Person.prototype) === Function.prototype)




// 자바스크립트에서 클래스는 런타임에 평가되어 함수 객체가 된다. 그래서 함수 객체의 고유 프로퍼티를 모두 갖고 있다.
// 그리고 당연하게도 프로토타입과 연결되어 있으며 자신의 스코프체인도 구성한다. 
// * 클래스의 constructor 메서드와 프로토타입의 프로퍼티인 constructor은 전혀 다른 것 이다.


//constructor에 반환문을 넣으면 this가 바인딩 되지 못하고 리턴한 리턴문이 반환된다.

class Idol {
    constructor(name) {
        this.name = name

        return {}
    }
}

const eun = new Idol("eun")
console.log(eun) // 이 처럼 this가 바인딩 되지 않고 마지막에 선언한 리턴문이 반환된다.

//하지만 리턴문에 원시값을 반환하면 this가 바인딩 된다.

class Idol2 {
    constructor(name) {
        this.name = name

        return 100;
    }
}

const karina = new Idol2("karina")
console.log(karina) // 정상적으로 this가 바인딩 되어서 인스턴스에 초기화 되었다.

// 이런 행위들은 클래스의 기본동작을 훼손하는 방법임으로 절대 따라하지 말것!





//인스턴스 생성 전에 암묵적으로 빈 객체가 생성되고 빈 객체는 this에 바인딩된다, 이 빈객체가 클래스가 생성 할 인스턴스이다.


class UserInfo {
    constructor(name) {
        console.log(this) // UserInfor {}
        console.log(Object.getPrototypeOf(this) === UserInfo.prototype) //true

        this.name = name  //this에 바인딩 되어있는 인스턴스를 초기화한다.
    }
}

const user12 = new UserInfo("de")



console.log("-----------------------------------접근자 프로퍼티--------------------------")





//접근자 프로퍼티 (get, set) - 접근자 프로퍼티는 자체적으로 값을 가지지 않고 , 프로터피의 값을 읽거나 저장한다.
//일반적인 객체 예시

const eunchea = {
    firstName: "EunChea",
    lastName: "Lee",

    get fullName() {
        return `${this.lastName} ${this.firstName}`
    },

    set fullName(name) {
        [this.lastName, this.firstName] = name.split(' ')
    }

}

console.log(eunchea)
console.log(eunchea.fullName) // getter 함수가 실행

eunchea.fullName = "Kim MinJung"; // 여기서 입력한 스트링 값이 setter함수의 매개변수인 name으로 전달되고, name split되어서 각각 last,firstName이 된다.

console.log(eunchea)



console.log("-----------------클래스 접근자------------------------")

//클래스에서 접근자 프로퍼티 사용

class FirendName {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(newName) {
        [this.firstName, this.lastName] = newName.split(' ');
    }
}

const firendName = new FirendName("Yu", "JiMin");
console.log(firendName)
console.log(firendName.fullName)

firendName.fullName = "Lee JiEun";
console.log(firendName)
console.log(firendName.fullName)

console.log(Object.getOwnPropertyDescriptor(FirendName.prototype, "fullName"))
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(firendName))) // firendName의 프로퍼티는 FriendName.property, FriendName.property의 프로퍼티는 constructor,fullName함수

//getOwnPropertyNames 해당 객체의 모든 프로퍼티를 가져온다,




console.log("-----------------클래스 필드------------------------")




//클래스 필드 - 클래스 기반 객체지향 언어에서 클래스가 생성할 인스턴스의 프로퍼티를 가리키는 용어다.
// 기존 자바스크립트 클래스에서는 클래스 내에서 메서드만 정의하고, 인스턴스 변수는 생성자에서 초기화 하는 방식을 사용
//ES6이후 클래스 내에서 직접 변수를 초기화 하고, 인스턴스마다 고유한 값을 독립적으로 소유한다.
// 클래스 필드에 함수를 정의하면 프로토타입 메서드가 아닌 인스턴스 메서드가 된다.






class Dog {
    // 클래스 필드
    name = "뽀삐";  // 이런식으로 클래스 필드에서 프로퍼티를 선언 할때 변수처럼 해도 된다. 
    // 클래스 필드를 생성하면 별도로 constructor 내에서 프로퍼티를 초기화 할 필요가 없다.

    constructor(bread) {
        this.bread = bread;
    }

    sayDog() {
        return `${this.name}의 견종은 ${this.bread}입니다.`  // 자바스크립트에서는 클래스 필드의 프로퍼티를 참조 할때는 반드시 this 키워드를 사용해야한다.
    }

    //클래스 필드에 함수선언
    //클래스 필드에 함수를 선언하면 생성된 인스턴스마다 독립적으로 함수를 가진다. 메모리 낭비, 권장 X

    sound = function () {
        console.log("bow!")
    }
}

const dog = new Dog("치와와");
console.log(dog.sayDog())
dog.sound()


// 만약 인스턴스를 생성힐때 외부의 초기 값으로 클래스 필드를 초기화 하고 싶으면 일반적인 방법으로 초기화한다.

class Cat {
    name;

    constructor(name) {
        this.name = name;
    }

    getName() {
        console.log(this.name)
    }

    sayCat = function () {
        console.log(this.name)
    }
}

const cat = new Cat("SARA");
const cat2 = new Cat("sds")


console.log(cat.sayCat() === cat2.sayCat())




console.log("-----------------클래스 상속------------------------")

//클래스 상속

//클래스 상속에서 [[Constructor]]내부 메서드를 갖는 함수 객체로 평가될 수있는 모든 표현식은 클래스에 상속 할 수있다.


// 조건에 따른 동적으로 상속하는 법
class A { };

function B() { };

let condition = true;

class C extends (condition ? A : B) { }


const c = new C()
console.log(c)
console.log(c instanceof A)
console.log(c instanceof B)




class Parent {
    constructor(name) {
        this.name = name;
    }

    say() {
        return `hi, ${this.name}`
    }
}

class Child extends Parent {

    say() {
        const __super = Object.getPrototypeOf(Child.prototype)
        return `${__super.say.call(this)} How are you doing?`
    }
}

const child = new Child("winter");
console.log(child.say())


console.dir(Parent, { showHidden: true });


const nums = [1, 1, 2, 3];
console.log(nums.filter((x) => x % 2))

