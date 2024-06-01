// DOM 구조가 파악되면 실행
$(function () {

  
    // swiper.js
    const visualSlider = new Swiper('.visual-slider', {
      autoplay: {
        delay: 5000,
      },
      loop: true,
  
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  
      // Navigation arrows
      navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      },
    });
  
    const reviewList = new Swiper('.review-list', {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      // centeredSlides: true,
  
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
  