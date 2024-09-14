const winter = {
    name: '김민정',
    year: 2001,
    part: 'visual',
}

console.log(Object.getOwnPropertyDescriptor(winter, 'name'));
console.log(Object.defineProperty(winter, 'name', {
    value: 'winter',
    writable: '',
    enumerable: '',
    configurable: ''
}))

console.log(Object.getOwnPropertyDescriptor(winter, 'name'));


for (let i = 0; i < 6; i++) {
    let space = "";
    for (let j = 0; j < 6; j++) {
        space += " * "

    }
    console.log()
}

