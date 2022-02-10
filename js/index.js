window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
};

function burgerMenu(selector) {
  let menu = document.querySelector(selector);
  let button = menu.querySelector(".burger-menu_button");
  let links = menu.querySelector(".burger-menu_link");
  let body = document.querySelector("body");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.addEventListener("click", () => toggleMenu());

  function toggleMenu() {
    if (menu.classList.contains("burger-menu_active")) {
      menu.classList.remove("burger-menu_active");
      body.style.overflow = "visible";
    } else {
      menu.classList.add("burger-menu_active");
      body.style.overflow = "hidden";
    }
  }
}

burgerMenu(".nav__burger-menu");
