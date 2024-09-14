// set 배열에서 중복을 제거할 수있다 또는 중복을 제거한채 배열을 만든다.


// 배열 만들기

const s = new Set();

console.log(s.add(1).add(1).add(2).add(3)); // 중복 된것은 알아서 제거한다.


//배열에서 중복 제거하기

const number = [1, 2, 3, 4, 2, 1, 4, 5]

const s2 = new Set(number);

console.log(s2) // 깔끔하게 중복이 제거 된다.

//그리고 다시 어레이로 만들려면

const newNumberArray = Array.from(s2)

console.log(newNumberArray); // 중복은 제거된체 어레이로 변경



