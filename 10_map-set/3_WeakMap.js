// 기존 객체를 변경하지 않으채 새로운 객체를 생성 할 수 있다.
// 추가로 가비지 컬렉팅이 되어 키 값에 null해서 없애면 메모리에서 완전히 지워진다.

let winter = {
    name: '김민정',
    age: 23
}


const wm = new WeakMap();

wm.set(winter, { part: 'vocal' });


console.log(winter)


// winter = null; //이렇게 하면 키값인 winter 객체가 null이 됨으로 메모리에서 벨류값까지 전부 없어진다.


function Person(name, year) {
    this.name = name
    this.year = year

    this.sayHi = function () {
        return `${this.name}`
    }
}


const user1 = new Person("do", 23)
const user2 = new Person("fo", 23)

console.dir(Person.prototype)


class Person2 {
    name;
    year;
    constructor(name, year) {
        this.name = name
        this.year = year
    }

    sayHello() {
        return `${this.name}`
    }
}

const user3 = new Person2("do", 23)
const user4 = new Person2("fo", 23)

console.dir(Person2.prototype)