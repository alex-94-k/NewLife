/* Burger */

const menu = document.querySelector('.navbar__wrapper'),
burger = document.querySelector('.navbar__burger');

burger.addEventListener('click', function(){
    burger.classList.toggle('navbar__burger-active');
    menu.classList.toggle('navbar__wrapper-active');
});