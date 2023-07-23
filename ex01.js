// 변수, 객체, 함수, 메소드, 이벤트, DOM 컨트롤이 있다.

// 타입 지시자 없이 값을 대입하면, 자동으로 형(Type)이 정의(변환)된다.
var data1 = "김일일"; // 재선언이 가능하고, 값도 언제나 변경가능하다.
let data2 = "김이이"; // 재선언은 불가능하나, 값은 언제나 변경가능하다.
const data3 = "김삼삼"; // 재선언이 불가능하고, 값도 변경 불가능하다.
console.log(data1, data2, data3);

var result = document.getElementById("result"); // 태그 아이디에 의한 접근
var ul = document.getElementsByClassName("lst"); // 자동적으로 배열이 된다. 태그 클래스에 의한 접근
var nav = document.getElementsByTagName("a"); // 태그명에 의한 접근


var div_lst = document.querySelector("#result .lst");
div_lst = div_lst.getElementsByTagName("li");




for(var i=0; i<div_lst.length; i++){
    div_lst[i].innerHTML = i*3;
}

function fnc1(){
    document.write("출력");
}

function fnc2(){
    alert("알람");
}

// 간단한 객체 정의 문법
var obj = {
    name: "김기태",
    method1: function(num1){
        console.log("간단한 객체 정의 문법");
        console.log(num1);
    }
}

obj.method1(3);

var button1 = document.getElementById("fnc_button1");
button1.addEventListener("click", fnc2);

var button2 = document.getElementById("fnc_button2");
button2.addEventListener("click", fnc1);