// Увеличивает счетчик конкретной кнопки, обрезает последние 3 символа текста кнопки
// @param btn Object Кнопка, на которую пользователь нажал

const count = (btn) => {
  let elem = btn.target;
  let id = elem.id;
  counters[id]++;
  elem.innerHTML = elem.innerHTML.slice(0, -3) + " (" + counters[id] + ")";
}

let counters = {};

let buttons = document.getElementsByClassName("b_cl");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = count;
  counters[buttons[i].id] = 0;
}