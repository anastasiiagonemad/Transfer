'use strict'

//create blocks for passengers, euro-passengers and cargo
let passengers = `
<div class="form-container">
  <form class="form form_passengers" name="passengers" id="form" action="#" method="POST">
    <div class="form__dest">
      <div class="departure" id="departure">Германия</div>
      <img class="reverse-btn" src="assets/icons/exchange.svg">
      <div class="arrival">Калининград</div>
    </div>

    <div class="input-line">
      <label for="date">Дата поездки:*</label>
      <input class="date" id="date" type="text" required>
    </div>

    <div class="input-line">
      <label for="places">Количество пассажиров:*</label>
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
      <label for="address">Ваш адрес с индексом:*</label>
      <input class="address" id="address" type="text" required>
    </div>

    <div class="input-line">
      <label for="tel">Ваш номер телефона:*</label>
      <input class="tel" id="tel" type="tel" required>
    </div>

    <div class="input-line">
      <label for="luggage">Есть ли у вас багаж?*</label>
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

    <button class="submit-btn" name="passengers-submit" type="submit">Оставить заявку</button>

    <div class="order__footer">
      <div class="confidentiality">Нажимая кнопку, вы даёте согласие на обработку персональных данных</div>
      <div class="required-fields">Поля, обозначенные звёздочкой *, являются обязательными для заполнения</div>
    </div>
  </form>
</div>
`;

let euroPassengers = `
<div class="form-container">
  <form class="form form_euro-passengers" name="euro-passengers" id="form" action="#" method="POST">
    <div class="input-line">
      <label for="destination">Направление<br>поездки: *</label>
      <input class="euro-destination" id="destination" type="text" required>
    </div>

    <div class="input-line">
      <label for="date">Желаемая дата поездки:*</label>
      <input class="date" id="date" type="text" required>
    </div>

    <div class="input-line">
      <label for="places">Количество пассажиров:*</label>
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
      <label for="address">Ваш адрес с индексом:*</label>
      <input class="address" id="address" type="text" required>
    </div>

    <div class="input-line">
      <label for="tel">Ваш номер телефона:*</label>
      <input class="tel" id="tel" type="tel" required>
    </div>

    <div class="input-line">
      <label for="luggage">Есть ли у вас багаж?*</label>
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

    <button class="submit-btn" name="euro-passengers-submit" type="submit">Оставить заявку</button>

    <div class="order__footer">
      <div class="confidentiality">Нажимая кнопку, вы даёте согласие на обработку персональных данных</div>
      <div class="required-fields">Поля, обозначенные звёздочкой *, являются обязательными для заполнения</div>
    </div>
  </form>
</div>
`;

let cargo = `
<div class="form-container">
  <form class="form form_cargo" name="cargo" id="form" action="#" method="POST">
    <div class="form__dest">
      <div class="departure" id="departure">Германия</div>
      <img class="reverse-btn" src="assets/icons/exchange.svg">
      <div class="arrival">Калининград</div>
    </div>

    <div class="input-line">
      <label for="date">Дата отправления:*</label>
      <input class="date" id="date" type="text" required>
    </div>

    <div class="input-line">
      <label for="cargo-type">Тип груза:*</label>
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
      <label for="weight">Примерный вес груза:*</label>
      <input class="weight" id="weight" type="text" required>
    </div>

    <div class="input-line">
      <label for="tel">Ваш номер телефона:*</label>
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

let passengersBtnArr = document.querySelectorAll('.order__passengers');
let euroPassengersBtnArr = document.querySelectorAll('.order__euro-passengers');
let cargoBtnArr = document.querySelectorAll('.order__cargo');

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
    altFormat: 'j F Y',
    dateFormat: 'Y-m-d',
    minDate: 'today',
    locale: 'ru',
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
  let reverseBtnArr = document.querySelectorAll('.reverse-btn');
  let departureArr = document.querySelectorAll('.departure');
  let arrivalArr = document.querySelectorAll('.arrival');
  for (let btn of reverseBtnArr) {
    btn.addEventListener('click', function() {
      for (let departure of departureArr) {
        for (let arrival of arrivalArr) {
          [
            departure.textContent,
            arrival.textContent
          ] = [
            arrival.textContent,
            departure.textContent
          ];
          createCalendar();
        }
      }
    })
  }
}

// add block to the page
window.addEventListener('load', function() {
  passengersBtnArr.forEach((item) => item.classList.add('checked'));
  addOrderContentsPass();
  reverse();
  createCalendar();
  whatsappPass();
});

//change block contents
for (let btn of passengersBtnArr) {
  btn.addEventListener('click', function() {
    passengersBtnArr.forEach((item) => item.classList.add('checked'));
    euroPassengersBtnArr.forEach((item) => item.classList.remove('checked'));
    cargoBtnArr.forEach((item) => item.classList.remove('checked'));
    removeOrderContents();
    addOrderContentsPass();
    reverse();
    createCalendar();
    whatsappPass();
  })
}

for (let btn of euroPassengersBtnArr) {
  btn.addEventListener('click', function() {
    euroPassengersBtnArr.forEach((item) => item.classList.add('checked'));
    passengersBtnArr.forEach((item) => item.classList.remove('checked'));
    cargoBtnArr.forEach((item) => item.classList.remove('checked'));
    removeOrderContents();
    addOrderContentsEuroPass();
    createCalendar();
    whatsappEuroPass();
  })
}

for (let btn of cargoBtnArr) {
  btn.addEventListener('click', function() {
    cargoBtnArr.forEach((item) => item.classList.add('checked'));
    passengersBtnArr.forEach((item) => item.classList.remove('checked'));
    euroPassengersBtnArr.forEach((item) => item.classList.remove('checked'));
    removeOrderContents();
    addOrderContentsCargo();
    reverse();
    createCalendar();
    whatsappCargo();
  })
}

//whatsapp
function whatsappPass() {
  let form = document.getElementById('form');
  let number = '375296770484';
  console.log(form);

  function sendToWhatsapp(text, phone) {
    text = encodeURIComponent(text);
    let url = `https://web.whatsapp.com/send?phone=${phone}&text=${text}&source=&data=`;
    window.open(url);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let text = 'Заявка от ' + document.getElementById('tel').value + ' ' +
              'пункт отправления: ' + document.getElementById('departure').textContent + ', ' +
              'дата отправления: ' + document.getElementById('date').value + ', ' +
              'количество пассажиров: ' + document.getElementById('places').value + ', ' +
              'адрес: ' + document.getElementById('address').value + ', ' +
              'есть ли багаж: ' + document.getElementById('luggage').value + ', ' +
              'комментарии: ' + document.getElementById('comments').value;
    console.log(text);

    sendToWhatsapp(text, number);
  });
}


function whatsappEuroPass() {
  let form = document.getElementById('form');
  let number = '375296770484';
  console.log(form);

  function sendToWhatsapp(text, phone) {
    text = encodeURIComponent(text);
    let url = `https://web.whatsapp.com/send?phone=${phone}&text=${text}&source=&data=`;
    window.open(url);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let text = 'Заявка от ' + document.getElementById('tel').value + ' ' +
              'желаемое направление по Европе: ' + document.getElementById('destination').textContent + ', ' +
              'дата отправления: ' + document.getElementById('date').value + ', ' +
              'количество пассажиров или перевозка груза: ' + document.getElementById('places').value + ', ' +
              'адрес: ' + document.getElementById('address').value + ', ' +
              'есть ли багаж: ' + document.getElementById('luggage').value + ', ' +
              'комментарии: ' + document.getElementById('comments').value;
    console.log(text);

    sendToWhatsapp(text, number);
  });
}



function whatsappCargo() {
  let form = document.getElementById('form');
  let number = '375296770484';
  console.log(form);

  function sendToWhatsapp(text, phone) {
    text = encodeURIComponent(text);
    let url = `https://web.whatsapp.com/send?phone=${phone}&text=${text}&source=&data=`;
    window.open(url);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let text = 'Заявка от ' + document.getElementById('tel').value + ' ' +
              'пункт отправления: ' + document.getElementById('departure').textContent + ', ' +
              'дата отправления: ' + document.getElementById('date').value + ', ' +
              'тип груза: ' + document.getElementById('cargo-type').value + ', ' +
              'примерный вес: ' + document.getElementById('weight').value + ', ' +
              'комментарии: ' + document.getElementById('comments').value;
    console.log(text);

    sendToWhatsapp(text, number);
  });
}
