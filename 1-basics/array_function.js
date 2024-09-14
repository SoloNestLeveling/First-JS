/**
 * Array function
 */

let iveMembers = [
    '장원영',
    '안유진',
    '이서',
    '가을',
    '리즈',
    '레이'
];

console.log(iveMembers);

/**
 * push
 * push는 마지막에 추가해주고 추가이후 arrary의 길이를 반환한다.
 *  
 * */
console.log(iveMembers.push('코드'));
console.log(iveMembers);

console.log('------------------------');

/**
 * pop
 * pop은 마지막요소를 제거하고 제거한 요소를 반환해준다.
 */

console.log(iveMembers.pop());
console.log(iveMembers)

console.log('---------------------');

/**
 * shift
 * shift는 첫번째 요소를 제거하고 제거한 요소를 반환해준다.
 */

console.log(iveMembers.shift());
console.log(iveMembers);


console.log('----------------');
/**
 * unshift
 * unshift는 첫번째에 새로운 요소를 추가해주고 길이를 반환한다.
 */



console.log(iveMembers.unshift('장원영'));
console.log(iveMembers);


console.log('------------------');

/**
 * splice 
 * splice는 두개의 값이 들어가고 각각 첫번째에는 몇번째부터 삭제 할껀지, 두번째에는 몇개를 삭제 할껀지 적어준다.
 * 예) (0,3) 이렇게 입력하면 0번 인덱스 부터 3개의 요소를 삭제한다.
 * 
 * 그리고 삭제한 요소를 반환해준다.
 * 
 */

console.log(iveMembers.splice(0, 3));
console.log(iveMembers);




console.log('---------immutable---------')





//-----------------------------------------------------------------------------------------------------

//immutable programing (한번 지정한 것을 변경하지 않는 방식이 프로그래밍에서 정말 중요하다!!)



iveMembers = [
    '장원영',
    '안유진',
    '이서',
    '가을',
    '리즈',
    '레이'
];

/**
 * concat
 * concat은 마지막에 요소를 추가한다, 하지막 push랑 다른점음 원래 array를 변경하는것이 아닌 완전이 새로운 array를 만들어낸다.
 * 그리고 새로만들어낸 array를 반환한다.
 */

const newMembers = iveMembers.concat('경민');
console.log(newMembers);  //기존 array를 변경하지 않고 새로운 array에 추가한다!!
console.log(iveMembers);


console.log('------------------------');

/**
 * slice
 * slice는 splice랑 같은 기능을한다. 하지만 다른점은 slice는 원래의 array변경하지 않고 완전히 새로운 array만든다
 * 그리고 또다른점 slice에 두번째 들어가는 값은 몇번 인덱스를 제외하고 삭제 할껀지 지정하는거다
 * 예를들어 (0,3) 이렇게 적용하면 첫번째 값은 0인덱스부터, 그리고 두번째는 3인덱스를 제외한 0,1,2번 인덱스를 삭제 하겠다는 뜻이다.
 * 그리고 역시 삭제한 결과 값을 반환한다.
 * 
 */

console.log(iveMembers.slice(0, 3));
console.log(iveMembers);


console.log('-------------------------')



/**
 * spread operator
 *  ...을 사용하고 array안에 다른 array를 집어 넣으면 새로운 array를 만들어낸다.
 * 새로운 메모리에 저장@
 */


let iveMembers2 = [
    ...iveMembers
]
console.log(iveMembers2);

//증명 : 과연 정말 새로운 array일까?

console.log(iveMembers2 === iveMembers);  // === false

//----------------------------------------------------------------------------------------------


//여기서 부터는 실무에서 압도적으로 많이 사용하는 것

/**
 * join
 * join은 array를 스트링으로 묶어 줄수있는 유용한 함수 이다!!
 * 그리고 join 은 argumets를 받을수 있는데 변환된 스트링들이 어떻게 나열될지 넣어주면된다
 * 사이사이 공간을 주던가, /로 나줘준다.
 * 
 */

console.log(iveMembers.join());
console.log(iveMembers.join(', '));
console.log(iveMembers.join('/'));



/**
 *sort 
 sort는 오름차순으로 정렬해준다 가나다 순서, 그리고 기존 array가 변경된다.
 */

iveMembers.sort();
console.log(iveMembers);


// reverse는 반대로 정렬헤 준다
iveMembers.reverse();
console.log(iveMembers);


// sort를 지정해서 사용할때(어려움)
// a와 b를 비교했을때
// 1) a를 b뒤에 두려면 0보다 큰숫자를 반환 (예, 1 )
// 2) a를 b앞에 두려면 0보다 작은숫자를 반환 (예, -1)
// 3) 원래 순서를 그대로 두려면 0을 반환

let numbers = [2, 1, 5, 4, 3];

numbers.sort((a, b) => {
    return a > b ? 1 : -1
});

console.log(numbers);

//예  2 > 5 ? 1 : -1
// 2는 5보다 작기 때문에 false임으로 -1 반환 -1은 0보다 작음으로 a는 b앞에 정렬

//반대경우도 가능

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);

//예 2 > 5 ? -1 : 1 
// 2는 5보다 작기 때문에 false임으로 1을 반환 1은 0보다 큼으로 a는 b뒤에 정렬



//-------------------------------------

//map은  기존의 array를 변경하지 않고 새로운 array를 반환한다.
console.log('-------------map-----------------')


const membersMap = iveMembers.map((x) => `아이브: ${x}`);

console.log(membersMap);

//응용 if문을 통해서 원하는 값만 넣을수있다.

const iveCharacter = iveMembers.map((x) => {

    if (x === '장원영') {
        return `이쁨: ${x}`
    } else if (x === '안유진') {
        return `키큼: ${x}`
    } else {
        return `잘모름: ${x}`
    }
})

console.log(iveCharacter);


//응용2

const files = [1, 2, 3, 4, 5];

const kindOfFiles = files.map((x) => {
    if (x % 2 === 0) {
        return `${x}.jpg`
    } else {
        return `${x}.mp3`
    }
})

console.log(kindOfFiles);


//--------------------------------------------

console.log('---------------------------')

/**
 * 특정 값을 찾아서 반환하는 기능
 * 
 * filter , find ,findIndex
 */

// (1) filter 특정 값을 반환한다.

const numbers2 = [1, 2, 3, 4, 5];

const even = numbers2.filter((x) => x % 2 === 0);

console.log(even);  // numbers2 안에서 짝수 값을 찾아 모두 반환한다.



// (2) find는 특정값을 찾되 인덱스 0부터 순서대로 찾다가 
//특정 값이 나오면 뒤에도 설정한 특정 값이 있든 없든 앞에서 찾은 값만 반환한다
//그런데 반환된 값은 oject 타입이 아닌 값의 원래 타입으로 나옴

const even2 = numbers2.find((x) => x % 2 === 0);
console.log(even2); // 순서대로 찾다가 짝수 2가 나오자 멈추고 2만 출력한다. 타입은 number


// (3) findIndex는 find랑 같지만 값을 출력하는게 아닌 index를 출력한다.

const evenIndex = numbers2.findIndex((x) => x % 2 === 0);
console.log(evenIndex);


//-------------------------------코팩형님이 가장 좋아하는 reduce-------

console.log(`---------------reduce-----------------`)


/**
 * reduce
 */

const allCalculate = numbers2.reduce((p, n) => p + n, 0);

console.log(allCalculate);

// 초기값 0이 p로 들어가고 n에 numbers2 첫번째 숫자 들어가고 서로더해서 다시 p로 들어가고
//그다음 numbers2 값이 n에 들어가는 방식


