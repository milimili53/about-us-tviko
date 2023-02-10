const burger = document.querySelector(".burger");
const resMenu = document.querySelector(".responsive-menu");
const resOverlay = document.querySelector(".overlay");
const closeMenu = document.querySelector(".close");

burger.addEventListener("click", function () {
  resMenu.classList.remove("none");
  resOverlay.classList.remove("none");
});

closeMenu.addEventListener("click", function () {
  resMenu.classList.add("none");
  resOverlay.classList.add("none");
});

resOverlay.addEventListener("click", function () {
  resMenu.classList.add("none");
  resOverlay.classList.add("none");
});
