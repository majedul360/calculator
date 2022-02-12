let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn-common");
let equal = document.querySelector(".btn-equal");
let clear = document.querySelector(".btn-clear");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let number = button.innerText;
    screen.value += number;
  });
});

equal.addEventListener("click", () => {
  if (screen.value == "") {
    screen.value = "enter your number";
  } else {
    let answer = eval(screen.value);
    screen.value = answer;
  }
});

clear.addEventListener("click", () => {
  screen.value = "";
});
