"use strict";
(function() {

  window.addEventListener("load", init);

  function init() {
    id("add").addEventListener("click", addClass);
  }

  function addClass() {
    id("text").classList.add("mystery");

     console.log(this);
     this.classList.add("glow-up");
  }

  function id(id) {
    return document.getElementById(id);
  }
})();