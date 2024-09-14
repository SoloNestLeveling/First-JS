/**
 * getter,setter
 */

class IdolModel2 {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    get name() {
        this.name = name;

    }

    set name(newName) {
        this.name = newName;
    }
}

const wonYoung = new IdolModel2('장원영', 2004);

console.log(wonYoung.name);

wonYoung.name = '오경민';
console.log(wonYoung.name);
console.log(wonYoung)
    ;