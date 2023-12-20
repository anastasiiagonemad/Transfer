'use strict'

//create blocks for passengers and cargo
let passengers = `
<div class="form-container">
  <form class="form" name="passangers">
    <div class="form__dest">
      <div class="departure">Германия</div>
      <img class="reverse-btn" src="../assets/icons/exchange.svg">
      <div class="arrival">Калининград</div>
    </div>
    <div class="input-line">
      <label for="date">Дата поездки: *</label>
      <input class="date" name="date" type="text" placeholder="дата" required>
    </div>

    <div class="input-line">
      <label for="places">Количество пассажиров: *</label>
      <select class="places" name="places" required>
        <option value="">выберите количество</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="больше">Больше 4 - укажите в комментарии</option>
      </select>
    </div>

    <div class="input-line">
      <label for="address">Ваш адрес с индексом: *</label>
      <input class="address" name="address" type="text" placeholder="адрес с индексом">
    </div>

    <div class="input-line">
      <label for="tel">Ваш номер телефона:</label>
      <input class="tel" name="tel" type="tel" placeholder="номер телефона" required>
    </div>

    <div class="input-line">
      <label for="luggage">Есть ли у вас багаж?</label>
      <select name="luggage" class="luggage">

        <option value="да">да</option>
        <option value="нет">нет</option>
      </select>
    </div>

    <div class="input-line">
      <label for="comments">Комментарии:</label>
      <textarea name="comments" cols="40" rows="2"></textarea>
    </div>

    <button class="submit-btn" name="passangers-submit">Оставить заявку</button>
  </form>


</div>
`;

let cargo = `
<div class="">
  <div style="border-bottom: 2px solid green; width: 80px;">Посылки</div>
  <div class="departure">Германия</div>
  <div class="reverse-btn" style="border: 1px solid red; width: 40px;">btn</div>
  <div class="arrival">Калининград</div>
  <input class="date" type="text" placeholder="выберите дату">

</div>
`;

let box = document.querySelector('.order__container');

let passengersBtn = document.querySelector('.order__passengers');
let cargoBtn = document.querySelector('.order__cargo');

//function - clean contents of the block
function removeOrderContents() {
  let orderContents = document.querySelector('.block');
  orderContents.remove();
}

//function - add contents to the block passengers
function addOrderContentsPass() {
  let block = document.createElement('div');
  block.className = 'block';
  block.innerHTML = passengers;
  box.append(block);
}

//function - add contents to the block cargo
function addOrderContentsCargo() {
  let block = document.createElement('div');
  block.className = 'block';
  block.innerHTML = cargo;
  box.append(block);
}

//function - create calendar
function createCalendar() {
  flatpickr('.date', {
    altInput: true,
    altFormat: "j F Y",
    dateFormat: "Y-m-d",
    minDate: "today",
    locale: "ru",
    enable: [
      function(date) {
        if (document.querySelector('.departure').textContent === 'Германия') {
          return (date.getDay() === 3);
        } else if (document.querySelector('.departure').textContent === 'Калининград') {
          return (date.getDay() === 6);
        }
      }
    ]
  })
}

//function - change destinations
function reverse() {
  let reverseBtn = document.querySelector('.reverse-btn');
  let departure = document.querySelector('.departure');
  let arrival = document.querySelector('.arrival');
  reverseBtn.addEventListener('click', function() {
    [
      departure.textContent,
      arrival.textContent
    ] = [
      arrival.textContent,
      departure.textContent
    ];
    createCalendar();
  })

}

// add block to the page
window.addEventListener('load', function() {
  addOrderContentsPass();
  reverse();
  createCalendar();
});

//change block contents
passengersBtn.addEventListener("click", function() {
  removeOrderContents();
  addOrderContentsPass();
  reverse();
  createCalendar();
})

cargoBtn.addEventListener("click", function() {
  removeOrderContents();
  addOrderContentsCargo();
  reverse();
  createCalendar();
})
