import a_number from './a.js';
import b_number from './b.js';
import c_number from './c.js';
console.log(a_number);
console.log(b_number);
console.log(c_number);  // 이렇게 모듈을 따로 관리하고 출력시 네트워크에서 보면 모듈을 하나하나 전부 불러오는 것을 볼 수있다. 
// 이것은 데이터 낭비이다!! 그리고 모듈이 많으면 사용자는 로딩이 느린 웹 화면을 보게 될 것이다.
// 심지어 a.js에 import한 a-1,a-2까지 전부다 불러와서 데이터를 차지한다...
// npm install --save-dev webpack webpack-cli  웹팩 설치 구문, 설치전 npm init -y로 package.json설치
// npx 명령어로 웹팩 설정
// npx webpack --entry ./src/index.js --output-path ./dist
// entry는 파일의 진입점이다. 이후 어떤 파일을 번들링 할 것인지 설정한다. index.js로 설정하면 index.js 안에 import된 파일들을 전부 추적해서 번들링한다.
// output-path를 사용해서 번들링할 파일 위치를 설정하면 dist 폴더가 생성되고, 그안에 번들링 파일인 main.js가 생성된다.

// 여기까지가 직접 설정해서 번들링 파일을 만드는 과정이고 이런 별도의 설정없이 환경설정을 통해서도 만들 수 있다.
// 1. webpack.config.js 파일을 만들고 webpack 홈페이지에서 환경설정을 복사에 넣는다. 그리고 직접 설정했던 main.js는 삭제 한다.
// 2. npx webpack 실행하면 dist 폴더에 새로운 번들 파일이 생성된다.

// package.json에 scrips에  "build": "webpack"를 추가하면 npm run build를 통해서 자동으로 dist폴더와 번들 파일이 생성된다.!

const $buttonA = document.querySelector('#button_a');
const $buttonB = document.querySelector('#button_b');
const $buttonC = document.querySelector('#button_c');
const $display = document.querySelector('#display');

$buttonA.addEventListener('click', () => {
    $display.textContent = a_number;
})

$buttonB.addEventListener('click', function () {
    $display.textContent = b_number;
})


$buttonC.addEventListener('click', function () {
    $display.textContent = c_number;
})