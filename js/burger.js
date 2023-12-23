'use strict'

const menu = document.querySelector('.header__nav');
let burgerBtn = document.querySelector('.header__burger');
const links = document.querySelectorAll('.nav-menu__link');
let body = document.body;
let fade = document.querySelector('.fade');

let burgerMenu = `
  <div class="form-container">
  <form class="form form_passengers" name="passengers">
    <div class="form__dest">
      <div class="departure">Германия</div>
      <img class="reverse-btn" src="assets/icons/exchange.svg">
      <div class="arrival">Калининград</div>
    </div>
`

function toggleBurgerMenu() {
    menu.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    body.classList.toggle('lock');
    fade.classList.toggle('active');
}

function closeBurgerMenu() {
    menu.classList.remove('active');
    burgerBtn.classList.remove('active');
    body.classList.remove('lock');
    fade.classList.remove('active');
}

burgerBtn.addEventListener('click', toggleBurgerMenu);
fade.addEventListener('click', closeBurgerMenu);
links.forEach(link => {
    link.addEventListener('click', closeBurgerMenu);
})