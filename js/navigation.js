"use strict";

const posArray = [
  "js-menu-open-pos0",
  "js-menu-open-pos1",
  "js-menu-open-pos2",
  "js-menu-open-pos3"
];

const burgerChange = document.querySelector(".burger-button");
const liList = document.querySelectorAll(".menu-general-a");

burgerChange.addEventListener("click", function () {
  // e.preventDefault();
  burgerChange.classList.toggle("js-burgerButtonChange");

  for (let i = 0; i < liList.length; i++) {
    liList[i].classList.toggle("js-menu-open");
    liList[i].classList.toggle(posArray[i]);
  }
});
