//  Swipper and AOS Configuration

var colImg = document.querySelectorAll(".colImg");
var colContent = document.querySelectorAll(".colContent");
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  delay: 2500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' custom-bullet ">' + (index + 1) + '</span>';
  }},
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChangeTransitionStart: function () {
      for (var i = 0; i < colImg.length; i++) {
        colImg[i].style.opacity = "0";
        colContent[i].style.opacity = "0";
      }
      colImg.forEach(function (el) {
        el.classList.remove('aos-init', 'aos-animate');
      });
      colContent.forEach(function (el) {
        el.classList.remove('aos-init', 'aos-animate');
      });
    },
    slideChangeTransitionEnd: function () {
      colImg.forEach(function (el) {
        el.style.opacity = "1";
      });
      colContent.forEach(function (el) {
        el.style.opacity = "1";
      });
      AOS.refresh();
    }
}});

AOS.init();




