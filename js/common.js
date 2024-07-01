// DOM 구조가 파악되면 실행
$(function () {
  //대상을 변수에 저장
  const $window = $(window); /* 제이쿼리 객체여야 제이쿼리 메서드 쓸 수 있음 */
  const $header = $('header');
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300;

  //모바일 메뉴
  const $btnMmenu = $('.btn-m-menu');
  const $mSubmenu = $('.m-submenu-wrap');
  const $dim = $('.dim');
  const $btnClose = $('.btn-close');
  const $mGnbMenu = $('.m-gnb > li');
  const $mGnbSubMenu = $('.m-gnb-sub');

  $btnMmenu.on('click', function () {
    // console.log('dddd');
    $mSubmenu.addClass('active');
    $dim.fadeIn(duration);
  });
  $btnClose.add($dim).on('click', function () {
    $mSubmenu.removeClass('active');
    $dim.fadeOut(duration);

    //모바일 용 서브메뉴 초기화
    $mGnbMenu.removeClass('on');
    $mGnbSubMenu.stop().slideUp(duration);
    // 열려있던거 닫음
  });
  //모바일용 메뉴를 클릭했을 때
  $mGnbMenu.on('click', function () {
    $(this).toggleClass('on');
    $(this).siblings().removeClass('on');
    $(this).find($mGnbSubMenu).stop().slideToggle();
    $(this).siblings().find($mGnbSubMenu).stop().slideUp(duration);
  });

  //메뉴 영역에 마우스가 들어오면
  $menu.on('mouseenter', function () {
    $submenu.stop().slideDown(duration);

    //활성화된 메뉴 표시: on클래스 부여
    $(this).addClass('on');

    //header에 active 클래스 부여
    $header.addClass('active');
  });
  //메뉴 영역에 마우스가 나가면
  $menu.on('mouseleave', function () {
    $submenu.stop().slideUp(duration);
    $menu.removeClass('on');
    $header.removeClass('active');
  });

  //마우스 휠을 조작할 때
  $window.on('wheel', function (e) {
    // console.log(e);
    //이벤트의 original event > wheel delta +휠올림 - 휠내림

    if (e.originalEvent.wheelDelta > 0) {
      //휠을 올렸을 때
      $header.removeClass('hide');
    } else {
      //휠을 내렸을 때
      $header.addClass('hide');
    }
  });

  const tabMenu = $('.use-guide .tab-menu > a');
  const tabContents = $('.use-guide .tab-contents > div');

  tabAction(0);

  tabMenu.on('click', function (e) {
    e.preventDefault();
    const tabIdx = $(this).index();
    tabAction(tabIdx);
  });

  function tabAction(index) {
    tabMenu.removeClass('active').eq(index).addClass('active');
    tabContents.hide().eq(index).show();
  }

  $('.custom-select').click(function () {
    if ($('.custom-options').css('display') === 'none') {
      $('.custom-options')
        .css('display', 'block')
        .css('animation', 'slideDown 0.3s forwards ease-out');
    } else {
      $('.custom-options').css('animation', 'slideUp 0.3s forwards ease-out');
      setTimeout(function () {
        $('.custom-options').css('display', 'none');
      }, 300); // Adjust to match the duration of the slideUp animation
    }
  });

  $('.custom-option').click(function () {
    var value = $(this).data('value');
    $('.custom-select').text($(this).text());
    $('.custom-options').css('animation', 'slideUp 0.3s forwards ease-out');
    setTimeout(function () {
      $('.custom-options').css('display', 'none');
    }, 300); // Adjust to match the duration of the slideUp animation
  });

  $(document).click(function (e) {
    if (!$(e.target).closest('.custom-select-wrapper').length) {
      $('.custom-options').css('animation', 'slideUp 0.3s forwards ease-out');
      setTimeout(function () {
        $('.custom-options').css('display', 'none');
      }, 300); // Adjust to match the duration of the slideUp animation
    }
  });
});
