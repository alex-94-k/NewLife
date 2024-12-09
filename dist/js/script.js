/* Burger */

const menu = document.querySelector('.navbar__wrapper'),
burger = document.querySelector('.navbar__burger');

burger.addEventListener('click', function(){
    burger.classList.toggle('navbar__burger-active');
    menu.classList.toggle('navbar__wrapper-active');
});

/* Modal */

const btn = document.querySelector('.navbar__contacts');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close')

btn.addEventListener('click', function(){
    overlay.classList.add('overlay__active');
    modal.classList.add('modal__active');
});

closeBtn.addEventListener('click', function(){
    overlay.classList.remove('overlay__active');
    modal.classList.remove('modal__active');

    const errorMessages = document.querySelectorAll('.error__message');

    errorMessages.forEach(message => {
    message.style.display = 'none';
  });
});