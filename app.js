$(document).ready(function(){
  $('.banner_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    dotsClass: "mycustomdots",
   
  });

  $('.arrival_image').slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    prevArrow: '.lefts',
    nextArrow: '.rights',


 
    
    
   
  });

  $('.deals_image').slick({

    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    dotsClass: "mycustomdot",



  });


  $('.newsimage').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    prevArrow: false,
    nextArrow: false,
    dots: true,
    dotsClass: "customdot",

  })



 
  


 
});