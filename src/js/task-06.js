 const validationInput = document.getElementById("validation-input");

  validationInput.addEventListener("blur", function () {
    const desiredLength = parseInt(validationInput.getAttribute("data-length"));
    const enteredValue = validationInput.value.trim();
    const isValid = enteredValue.length === desiredLength;

    validationInput.classList.remove("valid", "invalid");
    validationInput.classList.add(isValid ? "valid" : "invalid");
  });
