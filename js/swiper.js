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

  const noticeSlider = new Swiper('.notice-slider', {
    // Optional parameters
    // direction: 'vertical',
    // autoplay: true,
    // autoplay: {
    //   delay: 3000,
    // },
    loop: true, //계속 돌아가게(반복)
    slidesPerView: 1.5,
    spaceBetween: 70,
    speed: 1000, //슬라이드 되는 속도 기본값 300ms
    effect: 'slide', //기본값(slide), fade, cube, coverflow, flip

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      //브라우저 창 크기가 768px 이상일 때(변화하는 부분만 언급)
      // 768: {
      //   slidesPerView: 2,
      // },
      //브라우저 창 크기가 1200px 이상일 때
      900: {
        slidesPerView: 2.5,
        spaceBetween: 70,
      },
    },
  });
});
