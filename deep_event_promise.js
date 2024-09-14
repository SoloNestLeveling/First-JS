

//<이벤트 루프.>

// 콜스택 = 소스평가에서 생성된 실행컨텍스트가 실행되고 추가되는 스택구조
// 힙  = 객체가 저장된 메모리 공간, 콜스택 요소인 실행컨텍스트는 힙에 저장된 객체를 참조한다.
//태스크 큐 - 비동기 함수의 콜백 함수 또는 이벤트 핸들러가 일시적으로 보관되는 영역
//이벤트 루프 - 현재 실해중인 콜스택이 있는지, 태스크 큐에 현재 보관 중인 함수가 있는지 실시간으로 확인한다.
// 만약 콜스택이 전부 비워졌다면 태스크 큐를 확인하고 대기중인 함수를 콜스택으로 순차적으로 옴겨서 콜스택으로 옴겨진 함수를 실행한다. 이 과정은 이벤트 루프라고 한다.




// <Ajax.>

//Ajax (Asynchronous JavaScript and XML) - 자바스크립트를 사용하여 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고 , 서버가 응답한 데이터를
//수신하여 웹페이지를 동적으로 갱신하는 프로그래밍 방식을 의미한다.

//Ajax는 브라우저에서 제공한는 Web API인 XMLHttpRequest 객체를 기반으로 동작한다. XMLhttpRequest는 HTTP 비동기 통신을 위한 메서드와 프로퍼티를 제공

//변경의 필요한 데이터반 비동기 방식으로 전송받아 웹페이지를 변경할 필요가 없는 부분은 다시 렌더링 하지 않고, 변경에 필요한 부분만 한정적으로 렌더링한다.
// 비동기로 동작하기 때문에 서버에게 요청으로 보낸 이후 블로킹이 발생하지 않는다.(Non-Blocking)




//<JSOM 자바스크립트 객체 표기법(JavaScript Object Notation)>

// json은 클라이언트와 서버 간의 HTTP 통신을 위한 텍스트 데이터 포멧이다. 
// json은 자바스크립트에 종속되지 않는 언어 독립형 포맷으로, 대부분 프로그래밍 언어에서 사용할 수 있다.
// 키와 값으로 구성된 순수한 텍스트.


// JSON.stringify - 객체를 JSOM 포맷의 문자열로 변환한다. 클라이언트가 서버로 객체를 전송하려면 객체를 문자열화 하는데이를 "직렬화 "라고 한다.


const obj = {
    name: "winter",
    age: 23,
    part: "visual",
    boyFriendName: "kyungMin"
}

const convertToJson = JSON.stringify(obj)

console.log(convertToJson)


const rangeOfJson = JSON.stringify(obj, null, 2)  // 보기 쉽게 정렬 하기
console.log(rangeOfJson)



//JSON.parse - 서버로 부터 전송받은 JSON 데이터는 문자열이다. 문자열을 객체로서 사용하려면 객체화 해야하는데 그떄 이것을 역직렬화라고 한다.


const returnToObj = JSON.parse(rangeOfJson)
console.log(returnToObj)



//promise

//프로미스 상태 - 1.pending : 비동기 처리가 아직 처리 되지 않은 상태
//             2.fulfilled : 비동기 처리가 수행된 상태(성공)
//             3.rejected : 비동기 처리가 수행된 상태 (실패) 


// promise는 처리상태와,처리결과를 상태를 저장 관리하는 객체이다.
const fulfilled = new Promise(resolve => resolve(1));
console.log(fulfilled)

// 이 코드를 실행하면
//Promise {<fulfilled>: 1}
// [[Prototype]]
// : Promise
// [[PromiseState]]
// : "fulfilled"
// [[PromiseResult]]
// : 1


const fulfilled2 = new Promise((resolve) => resolve("fulfilled"))
    .then(v => console.log(v), e => console.log(e))

const rejected = new Promise((_, reject) => reject(new Error("failure")))
    .then(v => console.log(v), e => console.log(e))




// 마이크로태스크 큐

// 이벤트 루프에서 배웠듯 비동기 함수를 잠시 담아두는 영역인 태스크 큐가 존재하는데 프로미스는 테스크 큐에 보관되지 않는다.

//프로미스를 보관하는 영역은 마이크로태스크 큐라고 하고 태스크 큐보다 우선순위가 높다


function setTime() {
    return setTimeout(() => { console.log("1") }, 0)
}

function promise() {
    return new Promise((resolve) => resolve("2"))
        .then(v => console.log(v))
}

setTime()
promise()    // 결과를 보면 프로미스가 먼저 실행된다.

// 콜스택 > 마이크로태스크 큐 > 태스크 큐