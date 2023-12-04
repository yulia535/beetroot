// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const textInput = document.querySelector('.text-input');
const output = document.querySelector('.output');


textInput.addEventListener('input', (event) => {
  const volume = event.currentTarget.value;

  output.textContent = Math.floor(textInput*1000/820);
});