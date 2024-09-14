/**
 * scope
 */

let numberOne = 20;

function levelOne() {
    console.log(numberOne);
}
//levelOne();  //정사적으로 20출력된다. 보는거와 같이 함수 내에서 외부의 상위 스코프를 가져올수있다.



function levelOne() {
    let numberOne = 40;
    console.log(numberOne);
}

// levelOne(); // 보는거와 같이 가장 가짜운 스코프의 변수를 가져온다. 

// console.log(numberOne); //상위 스코프의 변수는 전혀 변하지 않았다.


//조금더 복잡함 함수로 알아보자

function levelOne() {
    let numberOne = 40;

    function levelTwo() {
        let numberTwo = 99;
        console.log(`levelTwo numberTwo : ${numberTwo}`);
        console.log(`levelTwo numberOne : ${numberOne}`);
    }
    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`);
}

levelOne();    //모든 선언은 사장 가까운 선언부터 활용하게 된다.

//console.log(numberOne); // golbal scope인 맨위에서 선언된 20이 출력된다.
//console.log(numberTwo); // 에러 발생 이유는 하위 스코프에는 접근할 수 없기 때문이다.


console.log('-----------------------------------------------');

/**
 * Js = Lexocal scope
 * 
 * 선언된 위치가 상위스코프를 결정한다.
 *
 */

let numberThree = 3;

function levelOne() {
    let numberThree = 333;

    levelTwo()
}

function levelTwo() {
    console.log(numberThree);
}

levelOne();

// 실행결과 3을 출력한다. levelTwo는 글로벌 스코프에 선언되었기때문에 가장 가까운 스코프인 글로벌에 선언된 tree를 가져온다



//----------------------------------------------

console.log('-----------------------------');

// var, let ,const로 변수 선언시 어떤 차이를 만들어 내는지 확인해보자

var i = 100;

for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log(`Global scope : ${i}`); //분명 상위 글로벌 스코프가 존재 함에도 for문안에 선언된 스코프가 출력된다.
// 즉 var 키워드사용하면 외부에선 내부 스코프에 접근못한다는 법칙에 오류가 생겨서 사용하면 안된다.


let j = 100;

for (let j = 0; j > 10; j++) {
    console.log(j);
}
console.log(`Global scope : ${j}`); // let 키워드로 스코프 변수 생성시 새로운 스코프를 생성한다.
// 그리고 외부에서는 내부 스코프에 접근할 수없다. 즉 글로벌 스코프에 콘솔 출력시 상위 스코프를 찾아서 출력하고 그 결과 100이 출력된다.

//let,const를 사용하면 블록 레벨 스코프인 (for,if,while)같은 곳에서도 함수처럼 새로운 스코프를 생성 할 수 있다.



