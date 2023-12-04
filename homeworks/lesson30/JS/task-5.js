// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

let num = prompt('Введіть тризначне число');
let reverseNumber = 0;

let a = num % 10;
num = num / 10;
reverseNumber += a * 100;

a = Math.floor(num % 10);
num = num / 10;
reverseNumber += a * 10;

a = Math.floor(num % 10);
num = num / 10;
reverseNumber += a;

export {reverseNumber};
