
  const counter = document.getElementById('counter');
  const valueSpan = document.getElementById('value');
  const decrementButton = counter.querySelector('[data-action="decrement"]');
  const incrementButton = counter.querySelector('[data-action="increment"]');

  // Инициализируем переменную counterValue значением 0
  let counterValue = 0;

  // Функция обновления интерфейса
  function updateCounter() {
    valueSpan.textContent = counterValue;
  }

  // Слушатель клика на кнопке уменьшения
  decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    updateCounter();
  });

  // Слушатель клика на кнопке увеличения
  incrementButton.addEventListener('click', () => {
    counterValue += 1;
    updateCounter();
  });