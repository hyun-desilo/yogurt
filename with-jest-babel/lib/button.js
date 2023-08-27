"use strict";

// 버튼 요소 가져오기
var button = document.getElementById("myButton");
var text = document.getElementById("myText");

// 버튼 클릭 시 동작 정의
button.addEventListener("click", function () {
  // 재밌는거, 하나의 html파일에서 부르면 namespace가 같다.
  // 따로 input 요소를 가져오지 않아도 된다.
  var newText = input.value;
  text.innerHTML = newText;
});