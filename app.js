var tabs = document.querySelectorAll("ul > li");
var list = document.getElementById("list");
var active = document.querySelector(".active");
var more = document.querySelector(".btn");
var size = 10;

var loading = document.getElementById("loading").outerHTML;

tabs.forEach(function (element) {
  element.addEventListener("click", makeActvie);
});

function start() {
  setTimeout(function () {
    tabPrint(active.textContent, size);
  }, 1000);
}

function makeActvie() {
  active.classList.remove("active");
  active = event.target.parentNode;
  active.classList.add("active");
  size = 10; // 새로 불러올 때 10개만 보여주기 위해서 다시 size = 10
  list.innerHTML = loading; // 로딩 화면으로 바꾸고, 1초 있다 tabPrint 실행
  setTimeout(function () {
    tabPrint(active.textContent, size); // 현재 액티브 된 textcontent를 인자로 넣어줌
  }, 1000);
}

function tabPrint(Text, size) {
  // 탭의 글자와 크기를 받음
  if (Text === "최근") {
    fetch("recent.json")
      .then((response) => response.json())
      .then((json) => print(json, size));
  } else if (Text === "많이본") {
    fetch("popular.json")
      .then((response) => response.json())
      .then((json) => print(json, size));
  } else if (Text === "실시간인기") {
    fetch("view.json")
      .then((response) => response.json())
      .then((json) => print(json, size));
  }
}

function print(json, size) {
  var str = ""; // 매번 초기화
  for (i = 0; i < size; i++) {
    // 처음 10개, 더보기를 눌렀을 때 10개씩 늘리기 위해 size를 받음.
    str += "<h2>" + json[i].title + "</h2>\n";
    str += "<img src=" + json[i].img + " width = 450px><br>\n"; // 이미지 크기가 제각각이라 가로는 통일
    str += "<a href=" + json[i].url + ">글 읽기</a><br>\n";
    str += "CP: " + json[i].cp + "<br>\n";
  }
  list.innerHTML = str;
}

function seeMore() {
  if (active.textContent === "최근") {
    size = 20;
  } else if (active.textContent === "많이본" && size < 30) {
    size += 10;
  } else if (active.textContent === "실시간인기" && size < 30) {
    size += 10;
  }
  list.innerHTML += loading; // 더보기는 아래쪽에 로딩이 생기도록 리스트의 마지막에 넣어줌.
  setTimeout(function () {
    tabPrint(active.textContent, size);
  }, 1000);
}

start();
more.addEventListener("click", seeMore);
