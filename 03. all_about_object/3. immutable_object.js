/**
 * immutable object
 */

const winter = {
    name: '김민정',
    year: 2001,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

console.log(winter);

// 1) Extensible : 확장가능한  (생각보다 많이 사용 하지는 않는다.)

// 현재 Extensible 상태 확인하는법

console.log(Object.isExtensible(winter)); // 출력 결과 true, 기본값은 true이다

//그러면 ture 값을 false 값으로 바꾸는 방법

Object.preventExtensions(winter);
console.log(Object.isExtensible(winter)); // false로 변경되었다.

//이제 false 상태에서 새로운 프로퍼티를 넣어보자

winter.part = 'Main vocal';

console.log(winter); // 출력 결과 추가되지 않았다. 에러는 던지지 않는다!!

console.log(winter.part); // 역시 undefined로 값이 없는것을 확인 할 수 있다.


//단!! 확장만 안될뿐 프로퍼티 삭제는 가능하다.

delete winter['year'];
console.log(winter);  //출력 결과 삭제 되었다.





//-----------------------------------------------------------//

console.log('----------------밑에는 winter2----------------------')


// 2) Seal : 봉인

const winter2 = {
    name: '김민정',
    year: 2001,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

console.log(Object.isSealed(winter2)); // 기본 값은 false이다.


//봉인 하기

Object.seal(winter2);

console.log(Object.isSealed(winter2)); // true로 변경되었다!!

winter2.part = 'visual';
console.log(winter2);  //출력 결과 프러퍼티가 추가 안됨!!!

delete winter2['year'];
console.log(winter2);  // Extensible이랑 다르게 봉인 하면 삭제도 불가능하다!!

// 중요한것은 에러를 던지지 않는것이다.

// 여기서 더 중요한거 seal(봉인)을 했을때 과연 property attribute도 변경 가능할까?

Object.defineProperty(winter2, 'name', {
    writable: false,
});

console.log(Object.getOwnPropertyDescriptor(winter2, 'name'));

// value 값은 정상적으로 바뀌었다. !!! 그런데 출력값을 보니 configurable이 false이다
// 즉!!! seal하는것은 configurable을 false로 변경한는 것이다.



//-------------------------------------------------------------//

console.log('----------------밑에는 winter3----------------------')

// 3) Freezed (동결): 값을 완전히 동결시킨다.
//   읽기 외에 모든 기능을 불가능하게 만드는게 목적이다.

const winter3 = {
    name: '김민정',
    year: 2001,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

console.log(Object.isFrozen(winter3)); // 기본 값은 false이다.

Object.freeze(winter3);
console.log(Object.isFrozen(winter3)); // true로 변경되었다.

console.log(Object.getOwnPropertyDescriptor(winter3, 'name'));

//!! 출력결과 freez를 하면 enumerable를 제외한 모든것이 false로 변경되었다!!





//!! 오브젝트 안에 오브젝트를 만들수 있는데 과연 상위 오브젝트를 freez 했을떄 하위도 freez될까??? 


console.log('----------------밑에는 winter4----------------------')

const winter4 = {
    name: '김민정',
    year: 2001,
    karina: {
        name: '유지민',
        year: 2000,
    },
};

Object.freeze(winter4);
console.log(Object.isFrozen(winter4));  // 잘 얼었다!

console.log(Object.isFrozen(winter4.karina)); // !! 하위 오브젝트는 얼지 않았다!!
// freez 뿐만 아니라 extensible, seal도 맞찬가지다.

//하위 까지 적용 싶으면 재귀함수를 사용해서 해야 한다.