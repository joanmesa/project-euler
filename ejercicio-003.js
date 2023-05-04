// Los factores primos de 13195 son 5, 7, 13 y 29.
// En teoría de números, los factores primos de un número entero son los números primos divisores exactos de ese número entero. El proceso de búsqueda de esos ...

// ¿Cuál es el mayor factor primo del número 600851475143?

const primo = number => {
    if (number === 2) return true;
    if (number < 2) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}


const listPrime = limit => {
    const primes = [];
    let i = 2;
    while ((i < limit) && (limit % i == 0)) {
        console.log("xx " + i);
        i++;
    }

    return i;
}

//ALORITMO SI ES MENOR QUE DECRECA Y PREUNTE Y PARE
// const listPrime = limit => {
//     const primes = [];
//     for (let i = 0; i <= limit; i++) {
//         // if (primo(i)) primes.push(i);
//         if (primo(i) && (limit % i == 0)) {

//         }
//     }
//     return "termine";
// }

console.log(listPrime(13195));
