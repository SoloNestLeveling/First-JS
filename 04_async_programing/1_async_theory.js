/**
 * async theory
 */

//function longWork() {
const now = new Date();

const milliseconds = now.getTime();
const afterTwoSeconds = milliseconds + 2 * 1000;

while (new Date().getTime() < afterTwoSeconds) {

}

console.log('완료');

//}

//console.log('hello');
//longWork();
//console.log('world')  // 비동기 방식은 예상했던거와 같이 hello 실행후 2초뒤 longwork를 끝내고 출력후 world가 출력!!


//-------------------------------------------------------------------

console.log('------------------------------------');

// setTimeout 이라는 자바스크립트에서 기본적으로 제공해주는 함수로 예를 들어보자 setTimeout은 기본적으로 비동기 이다.
function longWork() {
    setTimeout(() => {
        console.log('완료');
    }, 2000);
}

console.log('hello');
longWork();
console.log('world')    // 2초를 기다리지 않고 바로 다음거 실행후 2초뒤 longwork를 실행한다.