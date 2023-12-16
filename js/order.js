'use strict'

let passengers = `
<div class="">
    <div>blablabla</div>
    <div class="popup__container">
    <img class="img" src='../../assets/image/driver.jpg' alt="driver" width="350">
    </div>
</div>
`;

let cargo = `
<div class="">
    <div>xoxoxo</div>
    <div class="popup__container">
    <img class="img" src='../../assets/image/nav.jpg' alt="nav" >
    </div>
</div>
`;

let box = document.querySelector('.top-container__order-box');

window.addEventListener('load', () => {
  let block = document.createElement('div');
  block.className = 'block';
  block.innerHTML = passengers;
  box.append(block);
});