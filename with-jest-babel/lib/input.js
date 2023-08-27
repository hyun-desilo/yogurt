"use strict";

// 안풋 요소 가져오기
var input = document.getElementById("myInput");

// es 2022 신규 문법
var hello = function hello() {
  return console.log('hello');
};

// input에 영어만 허용
input.addEventListener('input', function (event) {
  var inputValue = event.target.value;
  var englishOnly = /^[A-Za-z]*$/;
  if (!englishOnly.test(inputValue)) {
    alert('영아만 입력 가능');
    event.target.value = inputValue.replace(/[^A-Za-z]/g, '');
  }
});