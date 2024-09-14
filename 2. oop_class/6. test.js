class Country {
    name;
    idolGroups;

    constructor(name, idolGroups) {
        this.name = name;
        this.idolGroups = idolGroups;
    }


}

class IdolGroup {
    groupName;
    memberName;

    constructor(groupName, memberName) {
        this.groupName = groupName;
        this.memberName = memberName;
    }
}


class Idol {
    name;
    year;;

    constructor(name, year) {
        this.name = name;
        this.year = year;

    }
}

class MaleIdol extends Idol {
    sing() {
        return `${this.name}이 노래합니다.`
    }
}

class FemaleIdol extends Idol {
    dance() {
        return ` ${this.name}이 춤을 춥니다.`
    }
}


const iveMembers = [
    {
        name: '장원영',
        year: 2002
    },
    {
        name: '안유진',
        year: 2003
    },
    {
        name: '리즈',
        year: 2003
    },
    {
        name: '가을',
        year: 2003
    },
];

const civeMembers = iveMembers.map(
    (x) => new FemaleIdol(x['name'], x['year'])
);

console.log(civeMembers);

const ivelGroup = new IdolGroup(
    '아이브',
    civeMembers,
)

console.log(ivelGroup);


const korea = new Country(
    '대한민국',
    [ivelGroup,]
)

console.log(korea);

//------------------------------------------------------------
console.log('-----------------------------')

class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `이름은${this.name}이고, 나이는${this.age}입니다.`
    }
}

const person = new Person('John', 20);
console.log(person.introduce());


class Teacher extends Person {
    subject;

    constructor(name, age, subject) {
        super(name, age),
            this.subject = subject;

    }
    introduce() {
        return `${super.introduce()}. 과목은${this.subject}입니다.`
    }
}

const teacher = new Teacher('jane', 30, 'Math');

console.log(teacher.introduce());


class AssistantProfessor extends Teacher {
    university;

    constructor(name, age, subject, university) {
        super(name, age, subject);
        this.university = university;
    }

    introduce() {
        return `${super.introduce()}, 대학은${this.university}입니다.`
    }
}

const assistantProfessor = new AssistantProfessor('Mike', 40, 'Computer Science', 'ABC Universty');

console.log(assistantProfessor.introduce());


console.log('-------------------------');


class Student {
    name;
    grade;

    constructor(name, grade) {
        this.name = name;
        this.grade = grade;

    }

    introduce() {
        return `안녕하세요, 저는 ${this.grade}학년 ${this.name}입니다.`;
    }


}