/*
Al enumerar los primeros seis números primos: 2, 3, 5, 7, 11 y 13, podemos ver que el sexto primo es 13.

¿Cuál es el número primo 10001?
*/

const isPrime = number => {
    if (number === 2) return true;
    if (number < 2) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

const numberPrime = (num) => {
    let i = 0;
    let countPrime = 0;
    while (countPrime != num) {
        if (isPrime(i)) {
            console.log(i);
            countPrime++;
        }
        i++;
    }
}

numberPrime(10001);



