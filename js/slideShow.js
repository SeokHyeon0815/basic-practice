var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var number = 0;

showSlides(number); //현재 이미지
prev.onclick = prevSlide; //이전
next.onclick = nextSlide; //다음

function showSlides(n) {
  //for문 setTimeout
  //var가 아닌 let으로 비동기 문제 처리!!
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.animation = "fadeOut 1s";
    setTimeout(() => {
      slides[i].style.display = "none";
    }, 1000);
  }
  slides[n].style.animation = "fadeIn 1s"; //n번째 이미지만
  setTimeout(() => {
    slides[n].style.display = "block";
  }, 1000);
}

function prevSlide() {
  if (number > 0) {
    //이전위치로
    number -= 1;
  } else {
    // 마지막 위치로
    number = slides.length - 1;
  }
  showSlides(number);
}

function nextSlide() {
  if (number < slides.length - 1) {
    //다음위치로
    number += 1;
  } else {
    // 첫번째 위치로
    number = 0;
  }
  showSlides(number);
}

//이미지 자동으로 이동--------------------/
//   number++;
//   if (number > slides.length) {
//     number = 1;
//   }
//   slides[number - 1].style.display = "block";
//   setTimeout(showSlides, 2000);

//애니메이션 더 자연스럽게 고칠 예정
