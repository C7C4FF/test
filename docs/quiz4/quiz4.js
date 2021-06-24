const $box = document.getElementById('box');

let offset = { x: 0, y: 0 };
let isDown = false;

$box.addEventListener('mousedown', (event) => {
  isDown = true;
  // console.log($box.offsetLeft);
  console.log('mousedown');
  offset.x = $box.offsetLeft - event.clientX; // 박스의 현재 left 길이에서, 마우스의 x 좌표를 빼주기
  offset.y = $box.offsetTop - event.clientY;
});

$box.addEventListener('mouseup', (event) => {
  isDown = false;
  console.log('mouseup');
});

document.body.addEventListener('mousemove', (event) => {
  console.log('mousemove');
  if (!isDown) return;
  console.log(event.clientX, event.clientY);

  $box.style.left = event.clientX + offset.x;
  $box.style.top = event.clientY + offset.y;
});

/*

var box = document.getElementById('box');

boxDrag(box);

function boxDrag(ele) {
    // 주석을 달거나 변수 이름을 나중에 봐도 알아볼 수 있도록록
  var x1 = 0, 
    x2 = 0,
    y1 = 0,
    y2 = 0;

  ele.addEventListener('mousedown', boxDown);

  function boxDown(e) {
    x1 = e.clientX; // 마우스의 x 좌표
    y1 = e.clientY; // 마우스의 y 좌표
    document.addEventListener('mousemove', boxMove);
    document.addEventListener('mouseup', boxUp);
  }

  function boxMove(e) {
    x2 = x1 - e.clientX;
    y2 = y1 - e.clientY;
    x1 = e.clientX;
    y1 = e.clientY;
    ele.style.left = ele.offsetLeft - x2 + 'px';
    ele.style.top = ele.offsetTop - y2 + 'px';
  }

  function boxUp() {
    document.removeEventListener('mouseup', boxUp);
    document.removeEventListener('mousemove', boxMove);
  }
}

*/
