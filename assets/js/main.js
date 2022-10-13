const navIconEl = document.querySelector(".nav-icon");
const navCloseEl = document.querySelector(".nav-close");
const navListEl = document.querySelector(".nav-list");
const navOverlayEl = document.querySelector(".nav-overlay");

const navOpen = () => {
  navListEl.classList.add("show");
  navOverlayEl.classList.add("show");

  // this disables scroll when mobile menu is open
  document.body.style =
    "visibility: visible; height: 100vh; width: 100vw; overflow: hidden;";
};

const navClose = () => {
  navListEl.classList.remove("show");
  navOverlayEl.classList.remove("show");

  // reset page scroll after mobile menu is closed
  document.body.style =
    "visibility: visible; height: initial; width: 100%; overflow-x: hidden;";
};

navIconEl.addEventListener("click", navOpen);
navCloseEl.addEventListener("click", navClose);
// allows to close mobile menu when clicking outside of menu
navOverlayEl.addEventListener("click", navClose);
