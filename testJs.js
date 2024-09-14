
// var winter = 23

// const obj = {
//     winter: 1010,

//     foo() {
//         console.log(`foo's this : ${this}`)
//         console.log(`foo's this : ${this.winter}`)

//         const basic = () => {
//             console.log(`basic's this : ${this}`)
//             console.log(`basic's this : ${this.winter}`)
//         }

//         basic()
//     }


// }

// obj.foo()



// function binding() {
//     console.log(arguments)
//     console.log(`binding : ${this.b}`)
// }

// const number = {
//     a: 1,
//     b: 2
// }

// binding.apply(number, [23])



// const base = {
//     name: "winter",

//     sayHi() {
//         return `안녕하세요 ${this.name}입니다.`
//     }
// }


// const foo = {
//     __proto__: base,

//     sayHi() {
//         return `${super.sayHi()}, 저는 aespa group 맴버입니다.`
//     }
// }

// console.log(base.sayHi())
// console.log(foo.sayHi())


// const fooo = {
//     num: 1,
//     increse: () => ++this.num
// }

// console.log(fooo.increse())


// function bar() {
//     var foo = 10;
//     return foo
// }

// console.log(bar())



const users = [
    { id: 1, name: "a", age: 23 },
    { id: 2, name: "b", age: 20 },
    { id: 3, name: "c", age: 24 },
    { id: 4, name: "d", age: 30 },
    { id: 5, name: "e", age: 17 },
    { id: 6, name: "f", age: 15 },
    { id: 7, name: "g", age: 25 },
];


const curry = fn => (a, ...args) => args.length ? fn(a, ...args) : (...args) => fn(a, ...args);



const L = {}

L.map = curry(function* (fn, iter) {
    for (const a of iter) {
        yield fn(a);
    }
});



L.filter = curry(function* (fn, iter) {
    for (const a of iter) {
        if (fn(a)) yield a;
    }
});




const reduce = curry((fn, iter, acc) => {
    if (!acc) {
        iter = iter[Symbol.iterator]();
        acc = iter.next().value;
    }

    for (const a of iter) {
        acc = fn(acc, a)
    }
    return acc;
});


const add = (a, b) => a + b;


const go = (...args) => reduce((a, fn) => fn(a), args);


go(
    users,
    L.filter(user => user.age > 19),
    L.map(user => user.age),
    reduce(add),
    console.log
)

/**
 * node.js nest.js의 심장!! nest.js를 구동 시켜주는 엔진이다.
 * 
 * node.js란 오픈소스, 크로스 플랫폼, 자바스크립트 런타임
 * 
 * 오픈소스 : 누구나 볼 수 있도록 소스코드가 오픈되어있다.
 * 크로스 플랫폼 : 여러 OS에서 사용 할 수있다.
 * 자바스크립트 런타임: 자바스크립트를 실행 할 수있다.
 *  
 * 다시 node.js란 누구나 볼 수있도록 오픈된 소스코드이며 여러 OS에서 사용 가능한 자바스크립트 런타임이다.
 * 
 * 
 * 
 *  V8엔진이 자바스크립트 언어에서 어떻게 작용하나??
 * 
 * compild언어
 * - 프로그램을 실행하기 전에 작성된 코드를 기계어로 한번에 모두 변환한 후 실행한다.
 * - 기계어로 모두 변환이 된 상태에서 실행되기때문에 실행 과정은 뻐르다.
 * - 작성한 코드가 변경될때마다 오랜시간 컴파일을 해야하는 문제가 있다.
 * - 타겟 플랫폼에서 직접 컴파일을 진행한다.
 * 
 * interpreted언어
 * - 프로그램을 실행하면서 동시에 코드를 한줄 한줄씩 변환해서 사용한다.
 * - 모든 코드가 변환이 된 상태로 실행되지 않기때문에 실행이 비교적 느리다.
 * -한번에 컴파일을 할 필요가 없기때문에 코드 변경이 있을때마다 매번 전체 컴파일을 할 필요가 업다.
 * - 코드를 실행하는 또다른 프로그램 (Interpreter)가 존재한다.
 * 
 * 
 * Just In Time Compilation (JIT)
 * 
 * JIT는 compile 방식과 Interpreted 방식의 장점을 모아둔 형태이다.
 * V8또한 JIT Compilation을 사용하고 있다.
 * 
 * 
 * 
 * JIT V8
 * 
 * 1. 코드실행 환경 준비하기
 * 2. 컴파일하기
 * 3. 바이트코드 (Byte Code)생성
 * 4. Ignition 툴을 사용하여 Interpret실행하기 (Byte code)
 * 5. 4번 과정에서 자주쓰는 파일을 최적화(Optimization)을 통해 5번과정으로 보내고 Turbofan 툴을 사용하여 compile 실행하기 (Machine Code생성)
 *    반복적으로 자주쓰이고 변경이 안되는 코드를 Machine Code로 생성해서 사용한다.
 *    그리고 자주사용하던 코드가 이제 자주 사용하기 않거나 변경이되면 다시 최적화를 풀어서(Deoptimization) 4번 과정으로 보낸후 Byte Code로 변환후 compile한다.
 * 
 * 
 * 
 *  Machine Code vs Byte Code  
 *  - 기본적으로 우리가 작성하는 자바스크립트, 타입스크립트 문법은 기계가 이해하는 언어가 아니다.
 *    그러면 이 언어를 기계가 이해할수 있는 언어로 변경해야하는데 기계가 이해할 수 있는 언어를 Machine Code, Byte Code라고 한다.
 * 
 * 
 * 1. Machine Code (compild 언어)
 * 
 * - CPU가 바로 읽고 사용 할 수 있는 바이너리로 구성된 코드이다.
 * - 바이트 코드보다 컴퓨터에 더 가까운 (Low Level) 코드이다.
 * - 실행이 매우 빠르다.
 * - 컴파일이 느리다.
 * - 플랫폼에 종속성이 있다. 하나의 운영체제에서 실행 할 수 있는 기계어는 다른 운영체제에서 실행 할 수 없다.
 *   즉, 윈도우즈에서 한번 실행하면 맥os에서 사용할때에는 한번더 실행해줘야 한다.
 * 
 * 
 * 
 * 2.Byte Code (Interpreted 언어)
 *  
 * 
 * - 바이트 코드는 CPU가 바로 읽을 수 있는 코드가 아니다.
 *   중간에 가상환경이나 또다른 프로그램(Interpreter)이 실행을 중재한다.
 * - 머신코드보단 사람과 가까운 (High Level)코드다. 
 * - 실행이 상대적으로 느리다.
 * - 컴파일이 빠르다.
 * - 플랫폼 종속성이 없다. Interpreter만 있으면 실행 가능하다. 
 * 
 *
 *   그러면 왜 자바스크립느는 컴파일이 빠르고 실행속도가 비교적 느린 바이트 코드를 사용하는가??
 * 
 *  이유는 메모리 최적화 때문이다.
 *  예를들어 자바스크립트오 1만줄의 코드를 작성했다고 하면 바이트코드로는 8만줄이 작성되고
 *  머신코드로는 8천만줄이 작성된다.
 * 
 * 
 * 
 *  최종 정리 
 * JIT는 Interpreted언어와 Compiled언어의 장점을 모두 가져간다.
 * 
 * Ignition을 이용해서 Iterpretation을 해서 자바스크립트의 Dynamically Typed 특성을 살리며
 * 컴파일 시간을 짦게 가져간다.
 * 
 * Turbofan을 이용해서 자주 사용되는 코드를 Machine Code로 최적화해서 컴파일 해둔다.
 * 해당 코드는 최적화 된 상태에서 반복적으로 빠르게 사용 할 수 있다.
 * 
 * 만약 최적화가 잘못되었거나 더이상 필요없어지면 다시 바이트 코드로 변환한다.
 * 
 * 
 * 
 * 
 * 
 *  HTTP
 *  
 *  HTTP는 클라이언트와 서버가 통신하는 방법 중 하나이다.
 *  클라이언트가 요청을 보내면 서버가 응답을 반환한다.
 *  요청과 응답의 구조화된 데이터를 보낼떄 일반적으로 JSON구조를 사용한다.
 * 
 * 
 *  HTTP 요청의 구성 요소
 * 
 *  URL: 요청을 보내는 주소
 *  Method: 요청의 종류/타입 (GET/POST/PUT/PATCH/DELETE)
 *  Header: 요청의 메타데이터(데이터의 정보를 담고있는데이터)
 *  Body: 요청에 관련된 데이터
 * 
 * https://lojk747.tistory.com/javascript?page=1   = URL
 * 
 * https:  = Scheme
 * lojk747.tistory.com = Host (흔히 도메인 이라고도 부른다.)
 * javascript = Path (요청하는 리소스)
 * page=1  = Query Paramrter ( ? 뒤에오는 내용) ,(요청하는 리소스에대한 추가 정보(일반적으로 필터링에 맣이 사용됨))
 * 
 *
 * 
 * Method
 * 
 * -같은 URL에 여러개의 Method가 존재 할 수 있다.
 *  GET https://lojk747.tistory.com/javascript?page=1
 *  POST https://lojk747.tistory.com/javascript?page=1
 *  둘은 같은 URL에 요청하지만 완전히 다른 요청이다.
 * 
 * 
 * -GET (데이터를 조회할때 사용한다.)
 *  GET https://lojk747.tistory.com/javascript?page=1
 *  자바스크립트 관련 데이터를 가져오는 요청이라고 유추 할 수 있다. 
 * 
 * 
 * -POST (데이터를 생성할때 사용한다.)
 *  POST https://lojk747.tistory.com/javascript?page=1
 *  자바스크립트 관련 데이터를 생성하는 요청이라고 유추 할 수 있다.
 * 
 * -PUT (데이터를 업데이트 또는 생성 할떄 사용한다.)
 *  PUT https://lojk747.tistory.com/javascript?page=1
 *  자바스크립트 관련 데이터를 업데이트 또는 생성하는 요청이라고 유추 할 수있다.
 *  업데이트 요청을 했을때 업데이트할 데이터가 없다면 새로 생성한다.
 * 
 * 
 * -PATCH (데이터를 업데이트 할떄 사용한다.)
 *  PATCH https://lojk747.tistory.com/javascript?page=1
 *  자바스크립트 관련 데이터를 업데이트하는 요청이라고 유추 할 수 있다.
 *  PUT요청과 다른점은 업데이트할 데이터가 없을시 에러를 발생시킨다.
 * 
 * -DELETE (데이터를 삭제할떄 사용한다.)
 *  DELETE https://lojk747.tistory.com/javascript?page=1
 *  자바스크립트 관련 데이터를 삭제하는 요청이라고 유추 할 수 있다.
 * 
 * 계속 유추라고 말하는이유는 Method는 정해진 목적대로 사용해야하지만 개발자가 마음대로 
 * 기능을 정의 할 수있기 때문에 유추라고 했다.
 * 하지만 이 것들은 개발자들간의 약속이다. 절대 마음대로 기능을 정의하면 안된다.
 * 
 * 
 * 
 *  Header
 *  - Header는 메타데이터를 정의한다.
 *  - 메타데이터는 데이터에대한 데이터 즉,요청에 대한 정보를 정의한다.
 *  - 흔한 예제로 Cookie, 인증 토큰, 요청의 바이트 길이, 요청/응답을 보낸 Host,
 *    요청할때 사용된 클라이언트 타입과 버전 등을 정의한다.
 *  - Key/Value 형태로 정의되고 Key와 Value 모두 String형태다.
 *  - 라이브러리/프레임워크/환경에 의해 자동 생성되는 값들이 많고 직접 값을 변경하는 경우는
 *    Body 보단 상대적으로 적다.
 * 
 * 
 *  Body
 *  - Body는 요청에대한 로직 수행에 직접적으로 필요한 정보를 정의한다.
 *  -만약에 새로운 블로그 글을 생성하는 POST 요청을 한다면 이 글을 생성할때 필요한 제목
 *   내용등의 모든 데이터를 Body에 입력하게된다.
 * - 일반적으로 JSON 구조를 사용한다.
 * - Header와 가장 큰 차이점은 Header는 요청 자체에 대한 정보를 담고 있고
 *  Body는 요청을 수행하는데 필요한 데이터를 담고 있다는 것이다.  
 * 
 * 
 * 
 * 
 * 
 * 
 * HTTP 응답의 구성 요소
 * 
 * - Status Code: 응답의 종류
 * - Header: 응답의 메타데이터
 * - Body: 응답에 관련된 데이터
 * 
 * 
 * Status Code (응답의 상태를 분류해준다.)
 * 100-599까지의 숫자를 사용한다.
 * 100-199 Informational Response(정보 응답) // 많이 사용하지 않는다.
 * 200-299 Successful Response (성공 응답)
 * 300-399 Redirection Message (리다이렉션 응답) // 요청한 주소가 변경됐을경우 변경된 주소를 응답해준다.
 * 400-499 Client Error Response(클라이언트 에러 응답) //프런트엔드에서 무언가를 잘못했을때
 * 500-599 Server Error Response (서버 에러 응답)
 * 
 * 
 * 
 * 주요 Status Code
 * 
 * 200(OK) - 문제없이 요청이 잘 실행됨  //우리가 앞으로 가장 많이 봐야할 코드이다 ㅋ!!
 * 201(Created) - 문제없이 데이터 생성이 잘 됨(POST 요청에서 많이 사용)
 * 301(Moved Permanently) - 리소스가 영구적으로 이동됨
 * 400(Bad Request) - 요청이 잘못됨(필수 값 부족 등)
 * 401(Unauthorized) - 요청 토큰/키가 잘못됨
 * 403(Forbidden) - 접그 불가능한 리소스, 401과 달리 인증은 된 상태
 * 404(Not Found) - 존재하지 않는 리소스
 * 405(Method Not Allowed) - 허가되지 않은 요청 Method
 * 500(Internal Server Error) - 알 수 없는 서버 에러
 * 
 */



/**
 *  Nest.js
 * 
 *  -Nest.js는 효울적이고 스케일링이 쉬운 Node.js서버를 만드는데 사용하는 프레임워크다.
 * 
 *  - 타입스크립트로 만들어졌으며 타입스크립트를 완전히 지원한다.
 * 
 *  - Nest.js는 Express같은 견고한 HTTP 서버 프레임워크를 사용하고 있으며 원한다면 
 *   Fastify를 대신 사용 할 수도 있다.
 * 
 *  - 상당히 많은 Node.js 라이브러리, 헬퍼,툴들이 있음에도 불구하고 아키텍처 설계에대한 문제를 해결해주는
 *    해결책은 존재하지 않는다.
 * 
 *  - Nest.js는 자체적으로 서버 아키텍처를 제공해준다. 그래서 테스트하기 쉽고 디커플링이 잘 돼있고
 *   유지보수가 편한 서버를 제작하게 해준다.
 * 
 * 
 * 
 */





let numbers = [{ number: 10 }, { number: 11 }, { number: 12 }];

let number = numbers.find((x) => x.number === 10);

number.number = 30;

const arr = [
    ...numbers,
    ...number
]

console.log(arr)





