
import {length, substr} from "./js/strings";

const reverse = (str) => {
    if (length(str) < 2) {
        return str;
    } else {
        const first = substr(str, 0, 1);
        const rest = substr(str, 1, length(str) - 1);
        return reverse(rest) + first;
    }

};
console.log('\x1b[33m%s\x1b[0m', reverse('Строка наоборот'));
console.log(length('Длина строки'));

let anyString = 'foo';
console.log(substr(anyString, 1, 2));


const sumSquareDifference = (n) => {
    let summ = 0;
    let squareSumm = 0;

    for (let i = 1; i <= n; i++) {
        summ = summ + i;
        squareSumm = squareSumm + (i ** 2);
    }

    const summSquare = summ ** 2;
    return summSquare - squareSumm;
};
console.log(sumSquareDifference(25));
