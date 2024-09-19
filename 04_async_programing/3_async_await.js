/**
 * async / await 
 * await는 프로미스로 만든 함수에서만 사용 가능하다.
 */


//--------------------------배열의 합-------------------------

const arrayNumbers = [1, 2, 3, 4, 5];

const addNumbers = (arrayNumbers, seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(arrayNumbers.reduce((p, n) => p + n, 0))
        reject('에러 발생')
    }
        , seconds * 1000)
})

async function runner() {
    try {
        const result1 = await addNumbers(arrayNumbers, 2);
        console.log(result1);
        const result2 = await addNumbers(arrayNumbers, 2);
        console.log(result2);
        const result3 = await addNumbers(arrayNumbers, 4);
        console.log(result3);
    } catch (e) {
        console.log(e);
    } finally {
        console.log('정상적으로 작업을 완료 했습니다')
    }
}

runner();


//reject를 가져오려면 try,catch를 사용한다.


