const users = [
    { id: 1, name: "winter", age: 23 },
    { id: 2, name: "karina", age: 24 },
    { id: 3, name: "wonyoung", age: 21 },
    { id: 4, name: "yuna", age: 21 },
    { id: 1, name: "enchea", age: 23 },
]

const usersList1 = []

for (i = 0; i < users.length; i++) {
    users[i].age < 23 ? usersList1.push(users[i]) : undefined
}



console.log(usersList1)

const usersList2 = []

for (i = 0; i < users.length; i++) {
    users[i].age >= 23 ? usersList2.push(users[i]) : undefined
}

console.log(usersList2)



// for >> filter ,  if >> predicate


function add(a) {
    a + 1
    return 0
}

console.log(add(0))




let obj = { val: 10 };

function add(obj, b) {
    obj.val += b
}

console.log(obj.val)
add(obj, 20)
console.log(obj.val)



let obj2 = { val: 10 };

function add2(obj2, b) {
    return { val: obj2.val + b }
}

console.log(obj2.val)
add2(obj2, 20)
console.log(obj2.val)