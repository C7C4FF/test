const $point = document.querySelector('#point');
const $life = document.querySelector('#life');
const $bug = document.querySelector('#bug');
const $box = document.querySelector('.box');

let point = 0;
let life = 10;
let timerId = 0;
let timer2 = 0;

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

function bug() {
  $bug.style.display = 'block';
  const x = getRandom($box.offsetWidth - $bug.offsetWidth);
  const y = getRandom($box.offsetHeight - $bug.offsetHeight);

  $bug.style.left = `${x}px`;
  $bug.style.top = `${y}px`;
}

function end() {
  alert('end!');
  $bug.style.display = 'none';
  clearInterval(timerId);
  event.stopPropagation();
}

function wrong() {
  life -= 1;
  $life.innerHTML = life;
  setTimeout(() => {
    if (life === 0) {
      end();
    }
  }, 0);
}

function miss() {
  if (life !== 0) {
    if ($bug.style.display === 'block') {
      wrong();
    }
  }
}

function start() {
  clearInterval(timerId);
  clearInterval(timer2);
  timer2 = setInterval(miss, 3000);
  timerId = setInterval(bug, 3000);
}

function hit(event) {
  point += 1;
  $point.innerHTML = point;
  $bug.style.display = 'none';
  start();
  event.stopPropagation();
}

start();
$bug.addEventListener('click', hit);
$box.addEventListener('click', wrong);
