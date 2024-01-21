$(function () {
    $('.Leadership_image').slick({
        infinite: true,
        slidesToShow:4,
        slidesToscroll:1,
        prevArrow: '.leftArrow',
        nextArrow: '.rightArrow',
    })




    $('.customer_image').slick({
        infinite: true,
        slidesToShow:1,
        slidesToscroll:1,
        dots: true,
        dotsClass: "dotscustom",
        prevArrow: false,
        nextArrow: false,
   
        

    })
    $('.aetor_image').slick({
        infinite: true,
         slidesToShow:6,
        slidesToscroll:1,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        dotsClass: "mycustomdots",

    })
})