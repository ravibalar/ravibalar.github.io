$(document).ready(function(){

//   $("#year-btn-1").click(function(){
//     $(".animation-resume") .fadeOut(0);
//       $("#resume1") .fadeIn(0);
//       $("#resume1") .css('display','flex');
//   });
//   $("#year-btn-2").click(function(){
//     $(".animation-resume") .fadeOut(0);
//     $("#resume2") .fadeIn(0);
//     $("#resume2") .css('display','flex');
// });
// $("#year-btn-3").click(function(){
//   $(".animation-resume") .fadeOut(0);
//   $("#resume3") .fadeIn(0);
//   $("#resume3") .css('display','flex');
// });
// $("#year-btn-4").click(function(){
//   $(".animation-resume") .fadeOut(0);
//   $("#resume4") .fadeIn(0);
//   $("#resume4") .css('display','flex');
// });

$(document).ready(function(){
  $(".menu-toggle a").click(function(){ 
    $(".menu").slideToggle(700);
  });
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
});