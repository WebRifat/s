$(function () {
    $('.slider_images').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '.leftArrow',
        nextArrow: '.rightArrow',
      
    })
    $('.related_images').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '.leftarrow',
        nextArrow: '.rightarrow',
       
      
    })


  



   
})

let increment = document.querySelector(".increment");
let quantity  = document.querySelector(".quantity");



function incrementing () {
    quantity.innerHTML = Number(quantity.innerHTML) + 1;
  

}



increment.addEventListener("click", incrementing);


let decrement = document.querySelector(".decrement");



function decrementing () {

    if(quantity.innerHTML > 1){
        quantity.innerHTML = Number(quantity.innerHTML) - 1;

    }

}



decrement.addEventListener("click", decrementing);


















incrementss.addEventListener("click", increment);