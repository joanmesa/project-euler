/*
La suma de los cuadrados de los diez primeros números naturales es,
1^2 + 2^2 + ... + 10^2 = 385
El cuadrado de la suma de los primeros diez números naturales es,
(1 + 2 +...+ 10)^2 == 55^2 = 3025
Por tanto, la diferencia entre la suma de los cuadrados de los diez primeros números naturales y el cuadrado de la suma es.
3025 - 385 = 2640
Encuentra la diferencia entre la suma de los cuadrados de los primeros cien números naturales y el cuadrado de la suma.
*/

const sumSquare = limit => {
    let suma = 0;
    for (let i = 1; i <= limit; i++) {
        suma += i ** 2;
    }
    return suma;
}

const squareSum = limit => {
    let result = 0;
    for (let i = 1; i <= limit; i++) {
        result += i;
    }
    return result ** 2;
}

const diff = (squareSum, sumSquare) => squareSum - sumSquare;

console.log(diff(squareSum(10), sumSquare(10)));
console.log(diff(squareSum(100), sumSquare(100)));
