const m = new Map();

console.log(m.set('a', 'b'))

const object = {};

console.log(m.set(object, 'e'));
console.log(m.get(object));

//여러 개 추가하기

console.log(m.set('x', 1).set('y', 3));


//map에서의 길이는 length가 아닌 size이다.

console.log(m.size);





//* 기존 객체를 가져오는 반복문의 문제점 *
//for...in 문을 사용하여 객체를 반복할 때, 해당 객체뿐만 아니라 상속된 프로퍼티들까지 모두 반복하게 됩니다.
//이는 때로 예상치 못한 동작을 일으킬 수 있으며, 원하는 결과와 다를 수 있습니다.

const obj = {
    'x': 1,
    'y': 2,
    'z': 10
}

const child = Object.create(obj) //이렇게 obj를 상속받으면 객체의 프로토타입으로 다른 객체를 지정한다.
// 즉, child는 obj의 프로토타입을 상속 받는다

console.log(child['x'])  //상속 받았음으로 결과값은 1
console.log(child['x'] = 100)  // 기존 x값을 변경

console.log('------------------------------------------')

for (let i in child) {
    console.log(child[i])
}
//기존 obj 프로퍼티까지 출력된다.. 이걸 방지 하기 위해

console.log('------------------------------------------')


for (let i in child) {
    if (child.hasOwnProperty(i)) {
        console.log(child[i])
    }
}

// 이렇게 하면 코드가 지저분해져서 map을 이용한다.

console.log('------------------------------------------')


const child2 = new Map();

child2.set('x', 100);
child2.set('y', 200);
child2.set('z', 300);

for (let [key, val] of child2) {
    console.log(val)
}

child2.forEach((K, V) => {
    console.log(K, V);
})   //배열이 아닌데도 forEach 사용 가능 


// child2.has() 속성여부 확인 등등 다른 부가적인 기능 들이 있다.


