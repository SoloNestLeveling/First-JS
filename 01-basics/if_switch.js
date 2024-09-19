
// if
let number = 5;
if (number % 2 === 0) {
    console.log('number는 짝수 입니다.');
} else if (number % 2 !== 0) {
    console.log('number는 홀수입니다.');
}


//switch

let today = 'wednesday'

let koreaDay;

switch (today) {
    case 'monday':
        koreaDay = '월요일';
        break;
    case 'thusday':
        koreaDay = '화요일';
        break;
    case 'wednesday':
        koreaDay = '수요일';
        break;
    default:
        koreaDay = '주말입니다';
        break;
}

console.log(koreaDay);