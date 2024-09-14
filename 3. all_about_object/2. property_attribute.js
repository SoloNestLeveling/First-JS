/**
 * 
 * property attribute
 */

const winter = {
    name: '김민정',
    year: 2001,
};


//property attribute 알아보기

console.log(Object.getOwnPropertyDescriptor(winter, 'name'));
console.log(Object.getOwnPropertyDescriptors(winter));  //winter안에 프로퍼티 어트리뷰트를 전부 가져온다.


/**
 * writable: 값을 수정 할 수 잇는지 여부. false로 설정하면 프로퍼티 값을
 *            수정 살 수 없다.
 * enumable: 열거가 가능한지 여부이다. for...in 룹 등을 사용 할 수 있으면
 *            true를 반환한다.
 * configurable:프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 *               false일 경우 프로터티 삭제나 어트리뷰트 변경이 금지된다.
 *               단 , writable이 true인 경우 값 변경과 writable을 변경하는건 가능하다.
 */


const winter2 = {
    name: '김민정',
    year: 2001,

    get age() {
        return new Date().getFullYear() - this.year;  // Date는 내장된 클래스고 new를 통해 생성자 함수로 정적 메서드인 getFullYear를 불러온다.
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }

}

console.log(winter2);
console.log(winter2.age);

winter2.age = '32';
console.log(winter2.age);
console.log(winter2.year);

console.log(Object.getOwnPropertyDescriptor(winter2, 'age'));

//일반 적으로 프로퍼티 추가하는법

// 1. winter2.part = 'visual';
// 또는 winyer2['part'] ='visual';



//property를 새로 추가하면서 property attribute 값을 하나하나 설정하고싶다면 defineProperty를 상용한다.

Object.defineProperty(winter2, 'part', {
    value: 'visual',
    writable: true,
    enumerable: true,
    configurable: true,   //만약 value를 제외한 값들을 입력하지 않으면 기본적으로 false로 설정된다.
})

console.log(Object.getOwnPropertyDescriptor(winter2, 'part'));


// --------------property attribut들의 기능 증명--------------------------------------

// 1) writable  true인 경우

winter2.part = 'Main vocal';
console.log(winter2);  // 이런 식으로 잘 변경이 된다.


//  writable를 false변경후 다시 해보자!!

Object.defineProperty(winter2, 'part', {
    writable: false, //한번 정의한 defineProperty는 재 정의 할 수 있고, 변경하고 싶은 속성만 변경가능하다.
})

console.log(Object.getOwnPropertyDescriptor(winter2, 'part'));


winter2.part = 'visual';

console.log(winter2);  //오류는 생기지 않지만 false인 경우 값이 전혀 변경되지 않는다.

//-----------------------------------------------------------------------------------------//


// 2) enumerble true인 경우

console.log('--------------------------------');

// 우선 key 값들만 출력 해보자

console.log(Object.keys(winter2));  // 정상적으로 열거된다,


// for 룹 실행

for (let key in winter2) {
    console.log(key);           //역시 for룹도 정상적으로 열거된다.
}

//그러면 enumerable를 false로 변경우 다시 해보자!!

Object.defineProperty(winter2, 'part', {
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(winter2, 'part'));


console.log(Object.keys(winter2));  // 결과를 보면 'part'만 빠져있다!!!! part만 열거되지 않음!!

for (let key in winter2) {
    console.log(key);               //역시나 열거되지 않음!!
}

// 하지만 값 자체가 없어진것은 아니다

console.log(winter2.part);



//-----------------------------------------------------------------------------//


console.log('--------------------------------')
// configurable은 false인 경우만 확인해보자 왜냐하면 위에 보다시피 true 경우 어트리뷰트 값들을 변경해 보았기때문에

console.log(Object.getOwnPropertyDescriptor(winter2, 'part'));

// writable, enumerable 값은 false, configurable 값을 true로 변경후 다른 값들을 변경해보자!!

Object.defineProperty(winter2, 'part', {
    configurable: false,
})

console.log(Object.getOwnPropertyDescriptor(winter2, 'part')); //정상적으로 configurable이 false로 변경


// 자 이제 configurable이 false인 경우 다른 값들은 변결해보자

Object.defineProperty(winter2, 'part', {
    writable: true,
})

console.log(Object.getOwnPropertyDescriptor(winter2, 'part')); //실행결과 에러가 발생한다.

// configurable이 false인경우 재정의를 할 수 없다!!!!

// 단!!!  단!! 위에 정의한 것 처럼  만약 writable이 true인 경우 configurable이 false더라도 
// value 값을 변경 할 수있다. 추가로 writable을 false로 변경하는 것도 가능 
// 하지만 writable를 false로 변경 한 순간 당연히 다시 값을 변경하는 것이 불가능하다!!!



//  ! Property Attribute를 사용하는 경우는 좀 더 섬세하게 프로그래밍을 하기위해 한다!!




