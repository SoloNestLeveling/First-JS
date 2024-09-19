/**
 * using function to creat object
 */

function IdolModel(name, year) {
    //console.log(new.target); // 실행시 new 키워드가 빠진 부분을 찾을 수있다.

    if (!new.target) {
        return new IdolModel(name, year); // 만약 new.tatget이 undefined면 실행된다. 실햏결과 new가 빠진 winter2가 정상적으로 출력된다.
    }

    this.name = name;
    this.year = year;

    this.dance = function () {
        return `${this.name}이 춤을 춥니다.`
    }
}

const winter = new IdolModel('김민정', 2001);
console.log(winter);
const winter2 = IdolModel('김민정', 2001);
console.log(winter2);    // new 키워드를 생성하지 않으면 undefined가 출력된다. new를 사용하지 않으면 this는 gobal에 소속된다.



console.log(winter.dance());


// 그러면 과연 arrow 함수는 생성자함수를 만들수 있을까?

const ArrowIdolModel = (name, year) => {
    this.name = name;
    this.year = year;

}

const winter3 = new ArrowIdolModel('김민정', 2001); // arrow함수는 constructor가 아니라고 에러가 발생한다.

