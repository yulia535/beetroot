//Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const wallet = prompt('Введіть суму грошей в гаманці');
const price = prompt('Введіть вартість шоколадки');
const amound = Math.floor(wallet / price);
const remnant = wallet % price;

export { amound, remnant };
