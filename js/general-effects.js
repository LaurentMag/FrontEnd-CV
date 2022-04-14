"use strict";

// PORTFOLIO MODAL ----------------------------------------------------------------
const portfolioModal = document.querySelectorAll(".portfolio__article-descriptif");
const portfolioModalButtonS = document.querySelectorAll(".portfolio__article-arrow");

for (let button of portfolioModalButtonS) {
  button.addEventListener("click", funcModalMove);
}

function funcModalMove(funcParam) {

  let whichButton = funcParam.target;
  let buttonIndex = Array.prototype.indexOf.call(portfolioModalButtonS, whichButton);
  //Array.prototype.indexOf.call(portfolioModalButtonS, whichButton)
  //= get index of an element from a nodelist
  // first param = nodeList
  // second param = the node

  whichButton.classList.toggle("js-arrow-activate");
  portfolioModal[buttonIndex].classList.toggle("js-activate-descriptif");
}




document.querySelector('.hello').scrollIntoView({ 
  behavior: 'smooth' 
});


// let domtokenToArray = [...square.classList]
// console.log(domtokenToArray)