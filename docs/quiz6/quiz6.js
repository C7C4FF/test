const $num = document.querySelector('#num');
const $btn = document.querySelector('#btn');
const $result = document.querySelector('#result');

function gugudan() {
  let result = '';
  $result.innerHTML = result;
  // string을 parseInt 두번째 인자의 진수로 변환
  const num = parseInt($num.value, 10);

  if (Number.isNaN(num)) {
    // eslint-disable-next-line no-alert
    alert('숫자가 아닙니다');
    return;
  }

  for (let i = 1; i <= 9; i += 1) {
    result = `${num} X ${i} = ${num * i}<br>`;
    $result.innerHTML += result;
  }
  result = '';
}

$btn.addEventListener('click', gugudan);
