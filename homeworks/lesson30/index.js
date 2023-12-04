import { result } from './JS/task-2.js';
import { volume } from './JS/task-3.js';
import { amound, remnant } from './JS/task-4.js';
import { reverseNumber } from './JS/task-5.js';
import { percentages } from './JS/task-6.js';

// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
console.log('Результат першої задачі =' + ' ' + (0.1 + 0.2).toFixed(1));

console.log(`Результат другої задачі = ${result}`);

console.log(`${volume} файлів розміром 820 Мб поміщається на флешку.`);

console.log(`Можете придбати ${amound} шт, залишок ${remnant}грн `);

console.log(`перевернуте число ${reverseNumber}`);

console.log(`Нараховано відсотків по вкладу - ${percentages.toFixed(2)} грн`);

//Що повернуть вирази:
console.log(2 && 0 && 3);
console.log(2 || 0 || 3);
console.log((2 && 0) || 3);
