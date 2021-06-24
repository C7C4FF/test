const $box = document.querySelector('.box');
const $box1 = document.querySelector('.box1');

const offset = { x: 0, y: 0 };
let isDown = false;
let object = '';

function mousedown(para) {
  para.addEventListener('mousedown', (event) => {
    object = para;
    isDown = true;
    console.log('mousedown');
    offset.x = para.offsetLeft - event.clientX;
    offset.y = para.offsetTop - event.clientY;
  });
}

function mouseup() {
  document.addEventListener('mouseup', (event) => {
    isDown = false;
    console.log('mouseup');
  });
}

function mousemove() {
  document.addEventListener('mousemove', (event) => {
    if (!isDown) return;
    console.log(event.clientX, event.clientY);
    // 왜 px를 넣어야? 각자의 속성을 직접 바꿔주는 게 아니기 때문에?
    object.style.left = `${event.clientX + offset.x}px`;
    object.style.top = `${event.clientY + offset.y}px`;
  });
}

mousedown($box);
mousedown($box1);
mouseup();
mousemove();
