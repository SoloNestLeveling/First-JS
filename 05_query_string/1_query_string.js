const queryString = "?name=winter&age=23&part=visual";

const parms = new URLSearchParams(queryString);
const parmAge = parms.get('age');

console.log(parms.get("name"));
console.log(parms.get("age"));
console.log(typeof parmAge);     // 쿼리스트링 안에 숫자는 스트링이다!!
console.log(parms.get("part"));



//-------------------------

const { URL } = require('url');  // require = 모듈을 가져오는 내장 함수  ,  변수는 import 하는 것 처럼 {}를 사용해서 URL내장 객체를 가져왔다.


const urlString = 'http://example.com/?paramName1=Winter&paramAge1=23'; //임시로 url 생성
const url = new URL(urlString);

const queryParams = new URLSearchParams(url.search);

const paramName1 = queryParams.get('paramName1');
const paramAge1 = parseInt(queryParams.get('paramAge1'), 10);  //쿼리 스트링의 숫자는 스트링임으로 parseInt로 정수로 바꾼다.

console.log(paramName1);
console.log(paramAge1);