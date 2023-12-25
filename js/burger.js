'use strict'

let burger = document.querySelector('.burger');
let burgerOpenBtn = document.querySelector('.burger-btn');
let burgerCloseBtn = document.querySelector('.burger__close')
let linksArr = document.querySelectorAll('.burger__nav-item');
let body = document.body;
let fade = document.querySelector('.burger__fade');



let burgerMenu = `
  <div class="burger__container">
    <div class="burger__close"><img src="assets/icons/close-icon.svg" alt="close button"></div>
    <nav class="burger__nav">
      <ul class="burger__nav-container">
        <li><a class="burger__nav-item" href="#departures">Направления</a></li>
        <li><a class="burger__nav-item" href="#services">Услуги</a></li>
        <li><a class="burger__nav-item" href="#advantages">Преимущества</a></li>
        <li><a class="burger__nav-item" href="#review">Отзывы</a></li>
        <li><a class="burger__nav-item" href="#faq">Вопросы и ответы</a></li>
        <li><a class="burger__nav-item" href="#contacts">Контакты</a></li>
      </ul>
    </nav>
  </div>
`;


function createBurger() {
  let burgerBlock = document.createElement('div');
  burgerBlock.innerHTML = burgerMenu;
  burger.append(burgerBlock);
  burger.classList.add('active');
}

burgerOpenBtn.addEventListener('click', function() {
  createBurger();
  fade.classList.add('active');

})

burgerCloseBtn.addEventListener ('click', function() {
  burger.classList.remove('active');
  fade.classList.remove('active');

})

// function toggleBurgerMenu() {
//     menu.classList.toggle('active');
//     burgerBtn.classList.toggle('active');
//     body.classList.toggle('lock');
//     fade.classList.toggle('active');
// }

// function closeBurgerMenu() {
//     menu.classList.remove('active');
//     burgerBtn.classList.remove('active');
//     body.classList.remove('lock');
//     fade.classList.remove('active');
// }

// burgerBtn.addEventListener('click', toggleBurgerMenu);
// fade.addEventListener('click', closeBurgerMenu);
// links.forEach(link => {
//     link.addEventListener('click', closeBurgerMenu);
// })