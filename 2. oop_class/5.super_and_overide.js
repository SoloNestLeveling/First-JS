/**
 * super and override
 */

class IdolModel {
    name;
    year;
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `안녕하세요 저는 ${this.name}입니다.`
    }
}

class FemaleIdol extends IdolModel {

    part;    // 새로운 프로퍼티를 생성하기위에 오버라이드 한다.
    constructor(name, year, part) {
        super(name, year);  // 기존 생성자를 그대로 쓰고 싶으몬 super 키워드를 사용한다.
        this.part = part;
    }

    //함수 오버라이드 하기

    sayHello() {
        return `${super.sayHello()} ,저는 ${this.part}를 맡고있습니다.`
    }

}

const wonYoung = new FemaleIdol('장원영', 2002, 'visual');
console.log(wonYoung);
console.log(wonYoung.sayHello());