/**
 * object /객체  가장 중요하다!!
 * 
 *  오브젝트 안에 함수를 지정 하는 것을 메소드라고 한다.
 * 
 * 
 */

let winter = {
    name: '김민정',
    group: 'aespa',
    dance: function () {
        return `${this.name}이 춤을 춘다.`  // 여기서 this는 함수가 선언된 객체안의 값을 의미한다.
    }

}

// 불러오는 방법에는 몇가지가 있다.

console.log(winter.name); // name의 value를 가져온다.
console.log(winter['name'])// 위랑 같음

let key = 'name';

console.log(winter[key]);  // 이런식으로도 불러올 수 있다.

// 객체안에 선언된 함수 불러오기

console.log(winter.dance());  // 역시 함수이기 때문에 ()를 꼭 실행한다.



//--------------------------------------------

console.log('-------------------------');

/**
 *  변수로 객체 선언하기!!!
 * 
 * 변수로 객체 선언시 key값 입력시에는 []안에 변수를 넣고, value에는 그냥 넣어도 된다.
 */


const nameKey = 'name';
const nameValue = '김민정';

const groupkey = 'group';
const groupValue = 'aespa';


const winter2 = {
    [nameKey]: nameValue,
    [groupkey]: groupValue,
    dance: function () {
        return `${this.name}이 춤을 춘다.`
    }
}

console.log(winter2[nameKey]);
console.log(winter2[groupkey]);

console.log(winter2.dance());

//value를 바꾸는법

winter2['name'] = '윈터';
console.log(winter2[nameKey]);

//만약 존재하지 않는 key값을 넣으면 새로추가가 된다.

winter2['face'] = '이쁘다';
console.log(winter2['face']);

console.log(winter2);





/**
 * 오브젝트는 const를 선언시 객체 자체는 당연히 변경이 불가능 하다.
 * 하지만 객체 안에 property는 변경이 가능 하다.
 */

//winter2 = {};  //이런식으로 객체를 변경하려고 하면 에러가 뜬다.

winter2['name'] = '김민정'; //이건 당연히 가능 하다.
console.log(winter2)



//모든 키값 가져오기

console.log(Object.keys(winter2)); //winter2의 모든 키값들이 array로 반환된다.

//모든 벨류값 가져오기
console.log(Object.values(winter2));



// 보너스- 비교적 최근에 생긴 조금더 빠르게 객체를 선언하는법

const name = '김민정';
const group = 'aespa';
const winter3 = {
    name,         // 이런식으로 키 이름과 벨류의 변수 이름이 같을 경우 하나만 써도 된다.
    group
}

console.log(winter3);