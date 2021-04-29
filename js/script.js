let burger = document.querySelector('.burger');

let closeBurger = document.querySelector('.close')

burger.addEventListener('click', function () {
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.burger__menu').classList.toggle('animate');
})

closeBurger.addEventListener('click', function () {
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.burger__menu').classList.toggle('animate');
})


let modal = document.getElementById('myModal');


let btn = document.getElementById("myBtn");


let closeModal = document.getElementsByClassName("modal__close")[0];


btn.addEventListener('click', function () {
    modal.style.display = "block";
})

closeModal.addEventListener('click', function () {
    modal.style.display = "none";
})


window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        navText:["",""]

    });
  });