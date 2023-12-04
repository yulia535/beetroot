import { result } from './JS/task-2.js';

// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
console.log((0.1 + 0.2).toFixed(1));

console.log(`Результат другої задачі = ${result}`);

// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const textInput = document.querySelector('.text-input');
const output = document.querySelector('.output');

textInput.addEventListener('input', (event) => {
  const volume = event.currentTarget.value;

  output.textContent = `${Math.floor(
    (volume * 1000) / 820
  )} файлів розміром 820 Мб поміщається на флешку.`;
});

//Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const walletInput = document.querySelector('.wallet-input');
const priceInput = document.querySelector('.price-input');
const walletOutput = document.querySelector('.wallet-output');
const walletButton = document.querySelector('.walletButton');
let volume;
let price;
walletInput.addEventListener('input', (event) => {
  volume = event.currentTarget.value;
});
priceInput.addEventListener('input', (event) => {
  price = event.currentTarget.value;
});
walletButton.addEventListener('click', (event) => {
  const amound = Math.floor(volume / price);
  const remnant = volume % price;

  walletOutput.textContent = `Можете придбати ${amound} шт, залишок ${remnant}грн `;
});

// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
const numInput = document.querySelector('.num-input');
const numOutput = document.querySelector('.num-output');
const numButton = document.querySelector('.numButton');
let num;
let result2 = 0;
numInput.addEventListener('input', (event) => {
  num = +event.currentTarget.value;
});

numButton.addEventListener('click', (event) => {
  let a = num % 10;
  num = num / 10;
  result2 += a * 100;

  a = Math.floor(num % 10);
  num = num / 10;
  result2 += a * 10;

  a = Math.floor(num % 10);
  num = num / 10;
  result2 += a;

  numOutput.textContent = result2;
  a = 0;
  result2 = 0;
});

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
const depositInput = document.querySelector('.deposit-input');
const depositOutput = document.querySelector('.deposit-output');
const depositButton = document.querySelector('.depositButton');
let deposit;

depositInput.addEventListener('input', (event) => {
  deposit = +event.currentTarget.value;
});

depositButton.addEventListener('click', (event) => {
  const result = (((deposit / 100) * 5) / 12) * 2;

  depositOutput.textContent = `Нараховано відсотків по вкладу - ${result.toFixed(
    2
  )} грн`;
});

//Що повернуть вирази:
console.log(2 && 0 && 3);
console.log(2 || 0 || 3);
console.log((2 && 0) || 3);
