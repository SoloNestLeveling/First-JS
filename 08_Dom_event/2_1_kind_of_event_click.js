const $propertyBtn = document.querySelector('#property');
const $listenerBtn = document.querySelector('#listener');


$propertyBtn.onclick = function () {
    alert("Hello My Winter");
};


$listenerBtn.addEventListener('click', () => {
    alert('Hello My new world');
});