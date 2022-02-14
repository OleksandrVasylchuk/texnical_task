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

// Существуют разные способы получить DOM-узел; здесь мы определяем саму форму и
// поле ввода email и элемент span, в который поместим сообщение об ошибке
const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

email.addEventListener("input", function (event) {
  // Каждый раз, когда пользователь что-то вводит,
  // мы проверяем, являются ли поля формы валидными

  if (email.validity.valid) {
    // Если на момент валидации какое-то сообщение об ошибке уже отображается,
    // если поле валидно, удаляем сообщение
    emailError.textContent = ""; // Сбросить содержимое сообщения
    emailError.className = "error"; // Сбросить визуальное состояние сообщения
  } else {
    // Если поле не валидно, показываем правильную ошибку
    showError();
  }
});

form.addEventListener("submit", function (event) {
  // Если поле email валдно, позволяем форме отправляться

  if (!email.validity.valid) {
    // Если поле email не валидно, отображаем соответствующее сообщение об ошибке
    showError();
    // Затем предотвращаем стандартное событие отправки формы
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // Если поле пустое,
    // отображаем следующее сообщение об ошибке
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    // Если поле содержит не email-адрес,
    // отображаем следующее сообщение об ошибке
    emailError.textContent = "Entered value needs to be an e-mail address.";
  } else if (email.validity.tooShort) {
    // Если содержимое слишком короткое,
    // отображаем следующее сообщение об ошибке
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Задаём соответствующую стилизацию
  emailError.className = "error active";
}
