/*
La suma de los números primos por debajo de 10 es 2 + 3 + 5 + 7 = 17.
Encuentra la suma de todos los números primos por debajo de dos millones.
*/

const isPrime = num => {
    if (num === 2) return true;
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// const sumPrimes = num => {
//     let sum = 0;
//     for (let i = 0; i < num; i++) {
//         if (!isPrime(i)) {
//             continue;
//         }
//         sum += i;
//     }
//     return sum;
// }



const sumPrimes = num => {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

// const sumPrimes = num => {
//     let i = 0;
//     let sum = 0;
//     while (i < num) {
//         if (isPrime(i)) {
//             sum += i;
//         }
//         i++;
//     }
//     return sum;
// }


console.log(sumPrimes(2000000));
