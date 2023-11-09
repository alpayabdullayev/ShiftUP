var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 5,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      960: {
        slidesPerView: 4
      },
     300: {
        slidesPerView: 2
      },
    },  
    autoplay: {
       delay: 1500,
    }
  });