/**
 * 
 * static keyword
 * 
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static sayHello(name, year) {
        return `안녕하세요 kppo 출신, 저는 ${year}년생 ${name}입니다.`
    }

}

//const wonYoung = new IdolModel('장원영', 2002);
//const yuJin = new IdolModel('안유진', 2003);



console.log(IdolModel.sayHello('장원영', 2003));








// 가장 많이 사용한느 factory static

class IdolModel2 {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static fromObject(object) {
        return new IdolModel2(
            object.name,
            object.year
        );

    }
}

const wonYoung2 = IdolModel2.fromObject({
    name: '안유진',
    year: 2003,
})


console.log(wonYoung2);