/**
 * inheritance
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year
    }
}

class FemaleIdol extends IdolModel {
    dance() {
        return `여자 아이돌이 춤을 춥니다.`
    }
}

class MaleIdol extends IdolModel {
    sing() {
        return `남자 아이돌이 춤을 춥니다.`
    }
}

const wonYoung = new FemaleIdol('장원영', 2002);
console.log(wonYoung);
console.log(wonYoung.dance());
console.log(wonYoung instanceof IdolModel);
console.log(wonYoung instanceof FemaleIdol);