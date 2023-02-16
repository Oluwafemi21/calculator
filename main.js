const btn = document.querySelectorAll(".num");
const result = document.getElementById("input_field");
const inputArea = document.getElementById("field");
const equal = document.getElementById("equal");
const reset = document.getElementById("reset");
const del = document.getElementById("del");
const operators = document.querySelectorAll(".operator");

/* Theme Changer
 Get the buttons
 Add event listener for each button
 remove active class from all
 then add
 change visibility

*/

const themes = document.querySelectorAll(".items button");
// const circles = document.querySelectorAll('.rounded span');

themes.forEach((theme) => {
  theme.addEventListener("click", (e) => {
    e.preventDefault();
    themes.forEach((theme) => theme.classList.remove("active-btn"));

    theme.classList.add("active-btn");

    if (theme.id === "theme2") {
      body.classList.remove(body.classList);
      body.classList.add("theme-2");
    } else if (theme.id === "theme3") {
      body.classList.remove(body.classList);
      body.classList.add("theme-3");
    } else {
      body.classList.remove(body.classList);
      body.classList.add("home");
    }
  });
});

// circles.forEach((circle) =>{
//     circles.forEach(circle => circle .classList.remove('active'));
//     circle.classList.add('active');
// })

let value = "";
let res;
btn.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    e.preventDefault();
    value += e.target.value;
    inputArea.value = value;
  });
});
let opp;
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    e.preventDefault();
    value += operator.textContent;
  });
});

equal.addEventListener('click', (e) => {
    e.preventDefault()
    inputArea.value =eval(inputArea.value)

})

reset.addEventListener('click', (e) => {
    e.preventDefault()
    value = ''
    inputArea.value = ''
})

del.addEventListener('click', (e) => {
    e.preventDefault()
    value = inputArea.value.substring(0, value.length - 1)
    console.log(value)
    inputArea.value = value
})