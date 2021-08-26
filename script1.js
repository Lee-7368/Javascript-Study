let message; //var는 let과 거의 동일하게 동작. var도 let처럼 변수를 선언하는 데 쓰이나 var는 ‘오래된’ 방식.
    message = 'Hello!'

/*변수명주의사항
* 숫자로 시작해선 안됨 : let 1a;
* 하이픈 '-'은 변수명에 올 수 없음 : let my-name;
* 변수명으로 예약어 목록에 있는 단어 사용 불가 let, class, return, function 등등 : let let = 5;
* */

const myBirthday = '12.22.2021' //const는 상수라고 부르며, 상수는 재할 당 할 수 없음, 변화하지 않는 변수 선언 시 사용

/*숫값이 절대 변경되지 않을 것이라 확신하면, 값이 변경되는 것을 방지하면서
다른 개발자들에게 이 변수는 상수라는 것을 알리기 위해 const를 사용해 변수를 선언하도록 해야함*/

let name = "Lee";

alert( `Hello, ${name}!` ); // Hello, Lee!
alert( `the result is ${1 + 2}` );
//역 따옴표로 변수나 표현식을 감싼 후 ${…}안에 넣어주면, 위와 같이 원하는 변수나 표현식을 문자열 중간에 넣을 수 있음

let age = null; //존재하지 않는(nothing)’ 값, ‘비어 있는(empty)’ 값, ‘알 수 없는(unknown)’ 값을 나타내는 데 사용
//변수가 ‘비어있거나’ ‘알 수 없는’ 상태라는 걸 나타내려면 null 사용

