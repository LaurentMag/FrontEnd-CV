"use strict";

    
const burgerChange = document.querySelector(".burger-button");
const navBar = document.querySelector(".mainNav")
    
burgerChange.addEventListener("click", function() {
  // e.preventDefault();
  burgerChange.classList.toggle('js-burgerButtonChange');
  navBar.classList.toggle('js-navbarOpen');
}) 
  