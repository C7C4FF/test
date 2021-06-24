/* eslint-disable 'no-unused-vars */

const $box = document.getElementById('box');
const $min = document.getElementById('min');
const $max = document.getElementById('max');
const $btn = document.getElementById('btn');

function make() {
  const min = parseInt($min.value, 10);
  const max = parseInt($max.value, 10);

  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  $btn.disabled = true;

  let startNum = randomNumber - 50;

  const timer = setInterval(() => {
    if (randomNumber > startNum) {
      startNum += 1;
      $box.innerHTML = startNum;
    } else if (randomNumber === startNum) {
      $btn.disabled = false;
      clearInterval(timer);
    }
  }, 30);
}

$btn.addEventListener('click', make);
