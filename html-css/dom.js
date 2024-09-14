

const input = document.querySelector(".todo__input");
const inputBtn = document.querySelector(".todo__btn");
const todoDivBg = document.querySelector('.todo-list__bg');


function createTodo(event) {

    event.preventDefault()
    const todoValue = input.value;

    if (todoValue === '') {
        return;
    }


    const tododiv = document.createElement('div');
    const todoSpen = document.createElement('span');
    const todoBtn = document.createElement('button');

    todoDivBg.appendChild(tododiv);

    tododiv.classList.add("todo-list__order");

    tododiv.appendChild(todoSpen);
    tododiv.appendChild(todoBtn);



    todoSpen.innerText = todoValue;
    todoSpen.classList.add("todo-list__content");

    todoBtn.innerText = "완료"
    todoBtn.classList.add("todo-list__btn");

    input.value = ''

    todoBtn.addEventListener('click', function () {
        tododiv.remove()
    });

};

inputBtn.addEventListener('click', createTodo);


















// const todoForm = document.querySelector('.todo');
// const button = document.querySelector('.todo input[type="submit"]');
// const todoInput = document.querySelector('.todo input[type="text"]');
// const todoList = document.querySelector('.todo-list')


// const onSubmitTodo = (event) => {

//     event.preventDefault(event)
//     const todo = todoInput.value;

//     const newList = document.createElement('li')
//     const deletBtn = document.createElement('button')


//     deletBtn.textContent = '삭제';
//     newList.innerText = todo;
//     newList.appendChild(deletBtn);

//     newList.classList.add("todo-list__content");
//     deletBtn.classList.add("todo-list_button")


//     todoList.appendChild(newList);

//     todoInput.value = '';

//     deletBtn.addEventListener('click', function () {
//         newList.remove();
//     })


// };




// button.addEventListener('click', onSubmitTodo);


