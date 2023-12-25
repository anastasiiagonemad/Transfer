'use strict'

let burger = document.querySelector('.burger');
let burgerBtn = document.querySelector('.burger-btn');
let links = document.querySelectorAll('.burger__nav-item');
let body = document.body;
let fade = document.querySelector('.fade');

console.log(burgerBtn);

let burgerMenu = `
  <div class="burger_container">
    <div class="burger__close><img class="assets/icons/close-icon.svg"</div>
    <nav class="burger__nav">
      <ul class="burger__nav-container">
        <li><a class="burger__nav-item" href="#">Направления</a></li>
        <li><a class="burger__nav-item" href="#">Услуги</a></li>
        <li><a class="burger__nav-item" href="#">Преимущества</a></li>
        <li><a class="burger__nav-item" href="#">Отзывы</a></li>
        <li><a class="burger__nav-item" href="#">Вопросы и ответы</a></li>
      </ul>
    </nav>
  </div>
`;


function createBurger() {

    let burgerBlock = document.createElement('div');
    // burgerBlock.className = 'burger_container';
    burgerBlock.innerHTML = burgerMenu;
    burger.append(burgerBlock);
    console.log(burgerBlock);

}

burgerBtn.addEventListener('click', function() {
  createBurger();
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