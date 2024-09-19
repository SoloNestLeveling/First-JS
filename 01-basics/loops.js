/**
 * Loops
 * 1) for
 * 2) while
 * 
 * 
 * for(기준을 잡을 변수; 조건 ; 어떤 행동을 할껀지)
 */

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('---------------------');


let space = ``;

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++)
        console.log(i, j);
}

/**
 * for in
 * 
 * key값을 가져온다
 */


let fruits = ['사과', '망고', '딸기', '수박'];

for (let key in fruits) {
    console.log(`${key} ${fruits[key]}`);
}

/**
 * for of 
 * 
 * velu값을 가져온다.
 */

for (let value of fruits) {
    console.log(value);
}

/**
 * while문
 * 
 * 조건이 참인경우 바디가 계속 실행되고 조건 거짓이 된경우 loop을 멈춤다
 */


let number1 = 0;
while (number1 < 10) {
    number1++;
    console.log(number1);
}


/**
 *break
 if문을 사용해서 특정 구간에서 break를 걸어준다,
 4까지는 참이라 실행이 되었지만, 5가된후 break가 되면서 console은 실행되지 않는다.
 */
console.log('------------');
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}

console.log('---------while break------')

let number2 = 0;

while (number2 < 10) {
    if (number2 === 5) {
        break;
    }
    number2++;
    console.log(number2);

}

/**
 * 
 * continue
 * 특정 부분만 제외(skip)하고 출력하게 한다,
 */

console.log('----------------');

for (let i = 0; i < 10; i++) {
    if (i === 4) {
        continue;
    }

    console.log(i);
}

console.log('----------while number-----')

let number3 = 0;
while (number3 < 10) {
    number3++
    if (number3 === 4) {
        continue
    }


    console.log(number3);
}



//---------------------------for문 문제
console.log('----------------------')
let sum = 0;

for (let i = 0; i <= 10; i++) {
    sum += i
}
console.log(sum);



for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}


for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
    }
}

//--------------------------------------------------

console.log('------------------------------');


const user1 = {
    year: 2001,
}



if (new Date().getFullYear() - user1.year < 19) {
    console.log('19세 미만은 이용하실수 없습니다.');
} else {
    console.log('이용 가능 합니다.');
}

//----------------------------------------
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

//------------------------------------------

for (let i = 0; i < 5; i++) {
    let space = "";
    for (let j = 0; j < 5; j++) {
        space += " * ";

    }
    console.log(space)
}