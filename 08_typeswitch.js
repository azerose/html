/* 

    자바스크립트에서는 데이터 타입 전환을 쉽게 할 수 있도록 기능을 내장하고 있습니다.
    Number() 함수를 이용하면 문자열을 숫자로 변환할 수 있고, String()을 이용하면 숫자를 문자열로 변환할 수 있습니다.

    ----

    문제
    
    함수 typeSwitch는 str 이름의 임의의 매개변수를 입력받아, 숫자를 리턴하는 함수입니다
    값을 숫자로 변환하여 리턴할 수 있도록 코드를 작성하세요.

*/


function typeSwitch(str) {
    let result=num(str);
    return result;
    // 여기에 코드를 작성하세요

}

module.exports = typeSwitch;