

const afterButton = document.querySelector('#after');
const beforeButton = document.querySelector('#before');
const input = document.querySelector('input');
const target = document.querySelector('#target');

const ul = document.querySelector('.toDoList');




afterButton.addEventListener('click', () => {
    const li = document.createElement('li');    // createElement 말 그대로 엘리먼트를 새로 추가 할 수있다.
    const xbutton = document.createElement('button');
    xbutton.classList.add('remove-btn')
    xbutton.setAttribute('type', 'button')
    xbutton.textContent = 'X'
    li.textContent = input.value
    ul.appendChild(li);   // ul 태그 안에 추가하겠다는 문법  
    li.appendChild(xbutton);
    input.value = '';  // 인풋 값 입력후 입렵했던 값은 인풋박스에서 제거 된다.
    input.focus();    // 입력했던 인풋값을 초기화하고 다른 인풋을 바로 입력 할 수 있게 포커스가 활성화된다.


})

// 내 코드는 html에 button을 미리 생성해놓지 않아서 이렇게 해야한다.
// 이벤트 위임(Event Delegation)을 사용하여 해결할 수 있습니다. 이벤트 위임은 부모 요소에 이벤트 리스너를 추가하고, 
// 이벤트가 발생한 요소를 확인하여 처리하는 방식입니다.

// 부모요소인 ul에 이벤트를 생성하고  if문을 통해 xbutton을 동적으로 찾아 준다.
// 여기서 target은 클릭된 대상이고 그 클릭이벤트가 실행된 타겟이 class="remove-btn를 포함한다면 true가 된다."
// event는 클릭이벤트에 대한 정보 target은 클릭된 대상

ul.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-btn')) {
        event.target.parentNode.remove();
    }
});





// beforeButton.addEventListener('click', () => {
//     const li = document.createElement('li')
//     const ul = document.querySelector('.toDoList');
//     li.textContent = input.value
//     ul.insertBefore(li, target);  // insertBefore은 특정 element 앞에 위치시킨다. (추가할 테그, 어디 앞에 넣을껀지)
// })