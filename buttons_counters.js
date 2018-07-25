// Увеличивает счетчик конкретной кнопки, обрезает последние 3 символа текста кнопки
// @param btn Object Кнопка, на которую пользователь нажал

const count = (btn) => {
  let elem = btn.target;
  let id = elem.id;
  counters[id]++;
  btn.target.innerHTML = buttonNames[id] + " (" + counters[id] + ")";
}

let counters = {};
let buttonNames = {};
let buttons = document.getElementsByClassName("b_cl");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = count;
  counters[buttons[i].id] = 0;
  buttonNames[buttons[i].id] = buttons[i].innerHTML.slice(0, -3);
}