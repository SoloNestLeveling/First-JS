/**
 * class keyword
 * 
 * 클래스 타입은 함수다, 인스턴스는 오브젝트 타입이다.!!
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {  // 생성자
        this.name = name;      // this.name은 위에 변수 , 오른쪽 name은 생성자에서 받은 값
        this.year = year;

    }

    sayHello() {
        return `안녕하세요 저는 ${this.name}입니다.`
    }
}

const wonyoung = new IdolModel('장원영', 2004);  // instance

console.log(wonyoung);


console.log(wonyoung.name);
console.log(wonyoung.sayHello());