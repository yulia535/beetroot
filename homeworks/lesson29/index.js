//? Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
const userName = prompt("Напиши своє ім'я");
console.log('Привіт, ' + userName + '!');

//? Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
const currentYear = 2023;
const birthYear = prompt('Вкажіть рік народження');
console.log('Ваш вік - ' + (currentYear - birthYear));

//? Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата

const lengtSide = Number(prompt('Вкажіть довжину сторони квадрату'));

if (Number.isNaN(lengtSide) === false) {
  //запитуємо NaN , якщо число виконуємо
  const squarePerimeter = lengtSide * 4;
  console.log('Периметр цього квадрату ' + squarePerimeter);
} else {
  alert('Ви ввели не число');
}

//? Запитай у користувача радіус кола і виведи площу такої окружності.

const circleRadius = Number(prompt('Вкажіть радіус кола'));
//перевіряємо чи число
const validNumber = Number.isNaN(circleRadius);

if (validNumber === false) {
  //перевіряємо результат перевірки на число NaN - true, число - false
  const circleArea = Math.round(Math.PI * Math.pow(circleRadius, 2));
  //Math.round()- округлює до найближчого цілого
  //Math.pow(x,y) зведення до степеня

  console.log('Площа такої окружності ' + circleArea);
} else {
  alert('Ви ввели не число');
}

//? Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.

const distance = Number(prompt('Вкажіть відстань між містами в кілометрах'));
const hours = Number(
  prompt('Вкажіть час за який хочете дістатися в хвилинах?')
);

if (
  Number.isNaN(distance) === false &&
  distance > 0 &&
  Number.isNaN(hours) === false &&
  hours > 0
) {
  //запитуємо тип змінної, яку приводимо до числа, якщо обидві змінні число - виконуємо
  console.log(
    'Швидкість з якою вам потрібно рухатися ' +
      distance / (hours / 60) +
      'км/год'
  );
} else {
  alert('Ви не ввели число');
}

//?Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.

const textInput = document.querySelector('.text-input');
const output = document.querySelector('.output');
const currentCurs = 0.91;

textInput.addEventListener('input', (event) => {
  const dolar = event.currentTarget.value;
  output.textContent = (dolar / currentCurs).toFixed(2);
});
