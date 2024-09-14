/**
 * callback
 * 특정 작업이 끝난고 다시 불리는 함수
 */

//콜백 지옥

function waitback() {
    setTimeout(() => {
        console.log('1번 콜백 끝');

        setTimeout(() => {
            console.log('2번 콜백 끝');

            setTimeout(() => {
                console.log('3번 콜백 끝');


            }, 2000)
        }, 2000)
    }, 2000)
}

//waitback();      // 이런 식으로 코드를 짝면 안된다.


/**
 * promise
 * 
 * resolve는 then으로 실행시킬 수 있고
 * reject는 catch로 실행시킬 수 있다
 */

const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, 2000)
});

timeoutPromise.then((x) => {
    console.log(x);
});


// 프로미스 활용법: 여러개의 프로미스를 연결할 수 있다.
//promise를 반환하는 함수



const getPromise = (second) => new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve('완료')

        reject('에러');

    }, second * 1000);
},)

/** getPromise(2)
    .then((x) => {
        console.log(x);   //resolve로 실행시킬수 있다.
    })
    .catch((x) => {
        console.log(x);   // reject로 실행시킬수 있다.
    })
    .finally(() => {
        console.log('finished');  // finally는 then이 실행되든 catch가 실해되는 상관없이 실행된다. 인자를 받지 않음!
    }) */


//여러개의 promise들을 한번에 실행시키는 방법

//Promise.all([
//   getPromise(1),
//   getPromise(3),
//    getPromise(2),
//]).then((x) => {
//    console.log(x);
//}).catch((x) => {
//    console.log(x);
//})        //가장 오래걸리는 것을 기준으로 전체가 한번에 출력된다.




//-----------------------------------------------------------------

//promise로 콜백 지옥처럼 여러개 실행하기 실행하기

const getPromise2 = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('1번쨰 콜백');
    }, seconds * 1000);
})

getPromise2(2)
    .then((x) => {
        console.log(x);

        return getPromise2(4)
    }).then(() => {
        console.log('2번쨰 콜백');

        return getPromise2(2)
    }).then(() => {
        console.log('3번째 콜벡');
    });


//-----------------------------1번문제----------------------------------

const sayHello = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello, World!');

    }, seconds * 1000)
});

sayHello(1).then((x) => {
    console.log(x);
});

//------------------------------2번 문제------------------------------

const sayHello2 = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello, World!');

    }, seconds * 1000)
});

sayHello(1).then((x) => {
    console.log(x);

    return sayHello(2)
}).then((x) => {
    console.log(x)

    return sayHello(1)
}).finally(() => {
    console.log('Both promises have resolved!');
})
//----------------------------3번문제--------------------------------
const number = 5;
const squaredNumber = (number) => new Promise((resolve, reject) => {
    resolve(Math.pow(number, 2));
})

squaredNumber(number).then((x) => {
    console.log(x);
})


