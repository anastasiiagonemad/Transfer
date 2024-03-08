'use strict'

//create blocks for passengers, euro-passengers and cargo
let passengers = `
<div class="form-container">
  <form action="#" method="POST" class="form form_passengers" name="passengers" id="form">
    <div class="form__dest">
      <div class="departure" id="departure" name="departure">Германия</div>
      <img class="reverse-btn" src="assets/icons/exchange.svg">
      <div class="arrival">Калининград</div>
    </div>

    <div class="input-line">
      <label for="date">Дата поездки:*</label>
      <input class="date" id="date" type="text" name="date" required>
    </div>

    <div class="input-line">
      <label for="places">Количество пассажиров:*</label>
      <select class="places" id="places" name="places" required>
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
      <input class="address" name="address" id="address" type="text" required>
    </div>

    <div class="input-line">
      <label for="tel">Ваш номер телефона:*</label>
      <input class="tel" id="tel" type="tel" name="tel" required>
    </div>

    <div class="input-line">
      <label for="luggage">Есть ли у вас багаж?*</label>
      <select id="luggage" name="luggage" class="luggage" required>
        <option value="">выберите значение</option>
        <option value="да">да</option>
        <option value="нет">нет</option>
      </select>
    </div>

    <div class="input-line">
      <label for="comments">Комментарии:</label>
      <textarea id="comments" name="comments" cols="40" rows="2"></textarea>
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
  <form class="form form_euro-passengers" name="euro-passengers" id="form" action="mail.php" method="post">
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
  <form class="form form_cargo" name="cargo" id="form" action="mail.php" method="post">
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
let orderBtnArr = document.querySelectorAll(".order__button");
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

//function - add contents to the block passengers, Euro passengers, cargo
function addOrderContents(blockValue) {
  for (let box of boxArr) {
    let block = document.createElement('div');
    block.className = 'block';
    block.innerHTML = blockValue;
    box.append(block);
  }
}

//function - create calendar
function createCalendar() {
  flatpickr('.date', {
    altInput: true,
    altFormat: 'j F Y',
    dateFormat: 'd-m-Y',
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
  addOrderContents(passengers);
  reverse();
  createCalendar();
  getFields();

});

//change block contents
orderBtnArr.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    removeOrderContents();

    if (event.target.classList.contains('order__passengers')) {
      passengersBtnArr.forEach((item) => item.classList.add('checked'));
      euroPassengersBtnArr.forEach((item) => item.classList.remove('checked'));
      cargoBtnArr.forEach((item) => item.classList.remove('checked'));
      removeOrderContents();
      addOrderContents(passengers);
      reverse();
      createCalendar();

    } else if (event.target.classList.contains('order__euro-passengers')) {
      euroPassengersBtnArr.forEach((item) => item.classList.add('checked'));
      passengersBtnArr.forEach((item) => item.classList.remove('checked'));
      cargoBtnArr.forEach((item) => item.classList.remove('checked'));
      removeOrderContents();
      addOrderContents(euroPassengers);
      createCalendar();

    } else if (event.target.classList.contains('order__cargo')) {
      cargoBtnArr.forEach((item) => item.classList.add('checked'));
      passengersBtnArr.forEach((item) => item.classList.remove('checked'));
      euroPassengersBtnArr.forEach((item) => item.classList.remove('checked'));
      removeOrderContents();
      addOrderContents(cargo);
      reverse();
      createCalendar();
    }
  })
})


//getting form fields
function getFields() {
  const formPassengers = document.forms.passengers;

  formPassengers.addEventListener('submit', formSend);

  async function formSend(event) {
    event.preventDefault();

    let formData = new FormData (formPassengers);
    let departure = formPassengers.querySelector('.departure').textContent;

    formData.append('departure', departure);
    console.log(formData.get('departure'));

    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData
    });

    if(response.ok) {
      let result = await response.json();
      alert(result.message);
      formPassengers.reset();

    } else {
      alert('Ошибка, попробуйте ещё раз через пару минут');
    }
  }
}
