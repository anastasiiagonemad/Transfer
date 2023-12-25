'use strict'

let burgerOpen = document.querySelector(".burger-open-btn");
let burgerClose = document.querySelector(".burger-close-btn");
let menu = document.querySelector(".header__nav");
let fade = document.querySelector(".burger__fade");
let links = document.querySelectorAll(".header__nav-item");
let body = document.body;

function toggleBurgerMenu() {
      menu.classList.toggle('active');
      // burgerBtn.classList.toggle('active');
      body.classList.toggle('body-lock');
      fade.classList.toggle('active');
  }
  function closeBurgerMenu() {
        menu.classList.remove('active');
        // burgerBtn.classList.remove('active');
        body.classList.remove('body-lock');
        fade.classList.remove('active');
    }


burgerOpen.addEventListener('click', toggleBurgerMenu);
burgerClose.addEventListener('click', closeBurgerMenu);
fade.addEventListener('click', closeBurgerMenu);
links.forEach(link => {
    link.addEventListener('click', closeBurgerMenu);
})



// function openBurgerMenu() {
//     menu.classList.add("active");
//     fade.classList.add("active");
// }

// function closeBurgerMenu() {
//     menu.classList.remove("header-nav-active");
//     fade.classList.remove("fade-active");
// }

// burgerClose.addEventListener("click", closeBurgerMenu);
// fade.addEventListener("click", closeBurgerMenu);
// burgerMenuItem.addEventListener("click", closeBurgerMenu);
















// let burger = document.querySelector('.burger');
// let burgerOpenBtn = document.querySelector('.burger-btn');
// let burgerCloseBtn = document.querySelector('.burger__close')
// let linksArr = document.querySelectorAll('.burger__nav-item');
// let body = document.body;
// let fade = document.querySelector('.burger__fade');



// function createBurger() {
//   let burgerBlock = document.createElement('div');
//   burgerBlock.innerHTML = burgerMenu;
//   burger.append(burgerBlock);
//   burger.classList.add('active');
// }

// burgerOpenBtn.addEventListener('click', function() {
//   createBurger();
//   fade.classList.add('active');

// })

// burgerCloseBtn.addEventListener ('click', function() {
//   burger.classList.remove('active');
//   fade.classList.remove('active');

// })





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




// let burgerOpen = document.querySelector(".burger-open-btn");
// let burgerClose = document.querySelector(".burger-close-btn");
// let menu = document.querySelector(".header-nav");
// let fade = document.querySelector(".fade");
// let burgerMenuItem = document.querySelector(".nav-container");

// function openBurgerMenu() {
//     menu.classList.add("header-nav-active");
//     fade.classList.add("fade-active");
// }

// function closeBurgerMenu() {
//     menu.classList.remove("header-nav-active");
//     fade.classList.remove("fade-active");
// }

// burgerOpen.addEventListener("click", openBurgerMenu);
// burgerClose.addEventListener("click", closeBurgerMenu);
// fade.addEventListener("click", closeBurgerMenu);
// burgerMenuItem.addEventListener("click", closeBurgerMenu);



// .lock-scroll {
//   overflow: hidden;
// }
