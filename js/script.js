$(document).ready(function () {

  $('.menu-item li a').click(function () {
    $('li a').removeClass("active");
    $(this).addClass("active");
  });

  $('.resposive-menu a li').click(function () {
    $('a li').removeClass("active-resposive-header");
    $(this).addClass("active-resposive-header");
  });

  // $(window).scroll(function () {
  //   var windscroll = $(window).scrollTop();
  //   if (windscroll >= 100) {
  //     $('.menu-item li a').addClass('active');
  //     $('section').each(function (i) {
  //       if ($(this).position().top <= windscroll -20) {
  //         $('.menu-item li a.active').removeClass('active');
  //         $('.menu-item li a').eq(i).addClass('active');
  //       }
  //     });

  //   } else {

  //     $('.menu-item li a').removeClass('active');
  //     $('.menu-item li a.active').removeClass('active');
  //     $('.menu-item li a:first').addClass('active');
  //   }

  // }).scroll();


  $('.menu-item li a').on('click', function () {

    var scrollAnchor = $(this).attr('data-scroll'),
      scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

    $('body,html').animate({
      scrollTop: scrollPoint
    }, 500);

    return false;

  })


  $(window).scroll(function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
      $('.menu-item li a').addClass('active');
      $('section').each(function (i) {
        if ($(this).position().top <= windscroll + 70) {
          $('.menu-item li a.active').removeClass('active');
          $('.menu-item li a').eq(i).addClass('active');
        }
      });

    } else {

      $('.menu-item li a').removeClass('active');
      $('.menu-item li a.active').removeClass('active');
      $('.menu-item li a:first').addClass('active');
    }

  }).scroll();


  $('.skill-slider').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 551,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.award-part').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 1000,
    setInterval: 1000,

    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".menu-toggle a").click(function () {
    $(".menu").slideToggle(700);
  });

  if ($(window).width() < 769) {
    $('.year-for-flex').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
  }


});