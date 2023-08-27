import _ from 'lodash';

// 안풋 요소 가져오기
export const input = document.getElementById("myInput");

// es 2022 신규 문법
const hello = () => console.log('hello');
// 외부 모듈
console.log(_.random(1, 100));

// input에 영어만 허용
input.addEventListener('input', function(event) {
  const inputValue = event.target.value;
  const englishOnly = /^[A-Za-z]*$/;

  if (!englishOnly.test(inputValue)) {
    alert('영아만 입력 가능')
    event.target.value = inputValue.replace(/[^A-Za-z]/g, '');
  }
});
