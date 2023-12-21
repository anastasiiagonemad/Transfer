'use strict'

//create blocks for passengers, euro-passengers and cargo
let passengers = `
<div class="form-container">
  <form class="form form_passengers" name="passengers">
    <div class="form__dest">
      <div class="departure">Германия</div>
      <img class="reverse-btn" src="../assets/icons/exchange.svg">
      <div class="arrival">Калининград</div>
    </div>

    <div class="input-line">
      <label for="date">Дата поездки: *</label>
      <input class="date" id="date" type="text" required>
    </div>

    <div class="input-line">
      <label for="places">Количество пассажиров: *</label>
      <select class="places" id="places" required>
        <option value="">выберите количество</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="больше">Больше 4 - укажите в комментарии</option>
      </select>
    </div>

    <div class="input-line">
      <label for="address">Ваш адрес<br>с индексом: *</label>
      <input class="address" id="address" type="text" required>
    </div>

    <div class="input-line">
      <label for="tel">Ваш номер телефона: *</label>
      <input class="tel" id="tel" type="tel" required>
    </div>

    <div class="input-line">
      <label for="luggage">Есть ли у вас багаж? *</label>
      <select id="luggage" class="luggage" required>
        <option value="">выберите значение</option>
        <option value="да">да</option>
        <option value="нет">нет</option>
      </select>
    </div>

    <div class="input-line">
      <label for="comments">Комментарии:</label>
      <textarea id="comments" cols="40" rows="2"></textarea>
    </div>

    <button class="submit-btn" name="passengers-submit">Оставить заявку</button>

    <div class="order__footer">
      <div class="confidentiality">Нажимая кнопку, вы даёте согласие на обработку персональных данных</div>
      <div class="required-fields">Поля, обозначенные звёздочкой *, являются обязательными для заполнения</div>
    </div>
  </form>
</div>
`;

let euroPassengers = `
<div class="form-container">
  <form class="form form_euro-passengers" name="euro-passengers">
    <div class="input-line">
      <label for="euro-destination">Направление<br>поездки: *</label>
      <input class="euro-destination" id="euro-destination" type="text" required>
    </div>

    <div class="input-line">
      <label for="euro-date">Желаемая дата поездки: *</label>
      <input class="date" id="euro-date" type="text" required>
    </div>

    <div class="input-line">
      <label for="places">Количество пассажиров: *</label>
      <select class="places" id="places" required>
        <option value="">выберите количество</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4 и больше">4 и больше - укажите в комментарии</option>
        <option value="груз">перевозка груза</option>
      </select>
    </div>

    <div class="input-line">
      <label for="address">Ваш адрес <br>с индексом: *</label>
      <input class="address" id="address" type="text" required>
    </div>

    <div class="input-line">
      <label for="tel">Ваш номер телефона: *</label>
      <input class="tel" id="tel" type="tel" required>
    </div>

    <div class="input-line">
      <label for="luggage">Есть ли у вас багаж? *</label>
      <select id="luggage" class="luggage" required>
        <option value="">выберите значение</option>
        <option value="да">да</option>
        <option value="нет">нет</option>
      </select>
    </div>

    <div class="input-line">
      <label for="comments">Комментарии:</label>
      <textarea id="comments" cols="40" rows="2"></textarea>
    </div>

    <button class="submit-btn" name="euro-passengers-submit">Оставить заявку</button>

    <div class="order__footer">
      <div class="confidentiality">Нажимая кнопку, вы даёте согласие на обработку персональных данных</div>
      <div class="required-fields">Поля, обозначенные звёздочкой *, являются обязательными для заполнения</div>
    </div>
  </form>
</div>
`;

let cargo = `
<div class="form-container">
  <form class="form form_cargo" name="cargo">
    <div class="form__dest">
      <div class="departure">Германия</div>
      <img class="reverse-btn" src="../assets/icons/exchange.svg">
      <div class="arrival">Калининград</div>
    </div>

    <div class="input-line">
      <label for="date">Дата отправления: *</label>
      <input class="date" id="date" type="text" required>
    </div>

    <div class="input-line">
      <label for="cargo-type">Тип груза: *</label>
      <select class="cargo-type" id="cargo-type" required>
        <option value="">выберите тип груза</option>
        <option value="письмо">Письмо</option>
        <option value="посылка">Посылка</option>
        <option value="лекарства">Лекарства</option>
        <option value="животное">Животное</option>
        <option value="прах">Прах</option>
        <option value="другое">Другое - укажите в комментарии</option>
      </select>
    </div>

    <div class="input-line">
      <label for="weight">Примерный вес<br>груза: *</label>
      <input class="weight" id="weight" type="text" required>
    </div>

    <div class="input-line">
      <label for="tel">Ваш номер телефона: *</label>
      <input class="tel" id="tel" type="tel" required>
    </div>

    <div class="input-line">
      <label for="comments">Комментарии:</label>
      <textarea id="comments" cols="40" rows="4"></textarea>
    </div>

    <button class="submit-btn" name="cargo-submit">Оставить заявку</button>

    <div class="order__footer">
      <div class="confidentiality">Нажимая кнопку, вы даёте согласие на обработку персональных данных</div>
      <div class="required-fields">Поля, обозначенные звёздочкой *, являются обязательными для заполнения</div>
    </div>
  </form>
</div>
`;

let boxArr = document.querySelectorAll('.order__container');
console.log(boxArr);

let passengersBtn = document.querySelector('.order__passengers');
let euroPassengersBtn = document.querySelector('.order__euro-passengers');
let cargoBtn = document.querySelector('.order__cargo');

//function - clean contents of the block
function removeOrderContents() {
  let orderContentsArr = document.querySelectorAll('.block');
  for (let orderContents of orderContentsArr) {
    orderContents.remove();
  }
}

//function - add contents to the block passengers
function addOrderContentsPass() {
  for (let box of boxArr) {
    let block = document.createElement('div');
    block.className = 'block';
    block.innerHTML = passengers;
    box.append(block);
  }
}

//function - add contents to the block Euro passengers
function addOrderContentsEuroPass() {
  for (let box of boxArr) {
    let block = document.createElement('div');
    block.className = 'block';
    block.innerHTML = euroPassengers;
    box.append(block);
  }
}

//function - add contents to the block cargo
function addOrderContentsCargo() {
  for (let box of boxArr) {
    let block = document.createElement('div');
    block.className = 'block';
    block.innerHTML = cargo;
    box.append(block);
  }
}

//function - create calendar
function createCalendar() {
  flatpickr('.date', {
    altInput: true,
    altFormat: "j F Y",
    dateFormat: "Y-m-d",
    minDate: "today",
    locale: "ru",
    disable: [
      function(date) {
        if (!document.querySelector('.departure')) {
          return;
        } else if (document.querySelector('.departure').textContent === 'Германия') {
          return (date.getDay() !== 3);
        } else if (document.querySelector('.departure').textContent === 'Калининград') {
          return (date.getDay() !== 6);
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
  passengersBtn.classList.add('checked');
  addOrderContentsPass();
  reverse();
  createCalendar();
});

//change block contents
passengersBtn.addEventListener("click", function() {
  passengersBtn.classList.add('checked');
  euroPassengersBtn.classList.remove('checked');
  cargoBtn.classList.remove('checked');
  removeOrderContents();
  addOrderContentsPass();
  reverse();
  createCalendar();
})

euroPassengersBtn.addEventListener("click", function() {
  passengersBtn.classList.remove('checked');
  cargoBtn.classList.remove('checked');
  euroPassengersBtn.classList.add('checked');
  removeOrderContents();
  addOrderContentsEuroPass();
  createCalendar();
})

cargoBtn.addEventListener("click", function() {
  passengersBtn.classList.remove('checked');
  euroPassengersBtn.classList.remove('checked');
  cargoBtn.classList.add('checked');
  removeOrderContents();
  addOrderContentsCargo();
  reverse();
  createCalendar();
})
