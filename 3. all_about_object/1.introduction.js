/**
 * all about objects
 * 
 * 객체를 선언할떄 사용 할 수 있는 방법들
 * 
 * 1)object 생성해서 객체 생성 -기본기 {}
 * 2)class를 인스턴스화해서 생성 -class와 oop
 * 3)function을 사용해서 객체 생성  (오래된 방식)
 */


//1

const winter = {
    name: '김민정',
    year: 2001,
}

console.log(winter);


//2

class IdolModel {
    name;
    year;
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const winter1 = new IdolModel('김민정', 2001);
console.log(winter1);


//3

function IdolModel2(name, year) {
    this.name = name;
    this.year = year;
}

const winter2 = new IdolModel2('김민정', 2002);
console.log(winter2);