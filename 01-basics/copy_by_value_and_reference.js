/**
 * 반드시 이해하고 넘어가야함!!!
 * 
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1)기본적으로 모든 primitive 값은 copy by value다
 * 2)객체는 copy by reference다
 */


//증명

//copy by value

let name = 'winter'

let minJung = name;

console.log(name);
console.log(minJung);

minJung += '는 이쁘다'

console.log(name);
console.log(minJung);

console.log(minJung === name);

// copy by reference

const winter4 = {
    name: '김민정',
    face: '이쁘다'

}

const minDoong = winter4;

console.log(minDoong);

minDoong['name'] = 'winter';

console.log(minDoong);
console.log(winter4);

console.log(winter4 === minDoong);  //true가 나온다


/**   !!  winter4는 메모리에서 선언한 객체를 직접 가지고 있는것이 아니다. 객체는 다른 메모리에 저장되고
(예를 들어 메모리 이름을 007이라고 하겠다), winter4는 007에서 메모리를 가리키는 것 뿐이다. 
그리고 마찬가지로 , mindoongd에 winter4를 복사하면 mindoong은 똑같이 007메모리를 가리킨다.  !! 값을 참조할뿐이다!!

그래서!!  007에 저장된 객체를 변경하면, 007에 저장된 객체만 변경된다. 그리고 winter4,mindoong은 단지 007 저장공간을 가리키고 있을뿐
       그렇기 때문에 winter4를 mindoong에 복사후 mindoong의 프라퍼티를 변경했음에도 winter4 === mindoong은 true가 나온다.
*/




// spread operator

const winter5 = {
    ...winter4     // spreed는 copy by value다!! spread를 하면 완전히 새로운 객체를 만들기때문
}

console.log(winter5);
console.log(winter4 === winter5);  //증명 값이 같아도 winter5는 완전히 다른 오브젝트임으로 false가 나온다.

