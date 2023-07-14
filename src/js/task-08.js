 const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    if (emailInput.value === "" || passwordInput.value === "") {
      alert("Please fill in all fields."); // Выводим предупреждение, если поля не заполнены
    } else {
      const formData = {
        email: emailInput.value,
        password: passwordInput.value
      };

      console.log(formData); // Выводим объект с данными в консоль
      loginForm.reset(); // Очищаем значения полей формы
    }
  });
