/**
 *  npm = node package module
 * 
 * 
 * 
 *  개발자는 코드를 반복하는것을 좋아하지 않는다. 그래서 자주 사용하는 코드는 모듈화해서 모듈 저장소에 저장한다.
 *  그리고 우리는 이 모듈들을 필요에 따라 그떄그떄 다운로드 받아 사용한다. 그리고 이것들을 다운 받을수 있게 도와주는 것이
 *  npm 이다. npm install <모듈명>   , 패키지 = 라이브러리= 모듈 다 같은 의미이다.
 * 
 * 
 *  라이브러리를 다운 받아서 사용 할수 있는 사이트  = npmjs.com
 * 
 * 
 * 
 * !! 파일 설명
 * 
 * 1) package,json
 *  - package.json 파일은 프로젝트에 대한 정보를 갖고 있는 파일이다. 그리고 dependencies와 같은 속성을 활용하여
 *  프로젝트에 의존된 라이브러리를 관리한다. 직접 작성할 수도 있고 , npm init 명령어로 자동으로 설치 할 수도 있다.
 * 
 *  -npm init -y 를 입력하면 모든값이 기본 값으로 입력돼서 설치 된다.
 * 
 *   
 *     - 개발 할때만 사용 하는 모듈은 devDependencies에 설치하고 npm i --save-dev <모듈명>
 *     - 실제로 운영할 때도 사용하는 모듈은 dependencies에 설치한다.
 * 
 *  2) package-look,json
 * 
 *   - 패키지들간에 의존성 트리를 나타낸다.
 *    
 * 
 *  3) 배포시 devDependencies는 배포하지 않음으로 node_module를 삭제하고 
 *    npm i --production 명령어로 dev만 제외한 node_modules를 다시 설치하고 배포한다.
 * 
 * 
 *  4) 버전의 의미
 *   - 기본 버전으로는 [major, minor, patch]  (시멘틱 버전)
 * 
 *     1. major : 주요변화, 기존 API추가/변경/삭제 등 이전 버전과 호환이 안될 수 있음
 *     2. minor : 기능추가, 이전 버전과 호환됨
 *     3. patch : 버그수정, 이전 버전과 호환됨
*/

