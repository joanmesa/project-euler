// Multiples of 3 or 5
// Problema 1

// Si enumeramos todos los números naturales debajo de 10 que son múltiplos de 3 o 5, obtenemos 3, 5, 6 y 9. La suma de estos múltiplos es 23.

// Encuentra la suma de todos los múltiplos de 3 o 5 por debajo de 1000.

const getNaturalNumbers = limit => {
    let naturalNumbers = [];
    let i = 1;
    while (i < limit) {
        if (i % 3 == 0 || i % 5 == 0)
            naturalNumbers.push(i);
        i++;
    }
    return naturalNumbers;
}

const sumNaturalNumbers = getNaturalNumbers(1000);

console.log(sumNaturalNumbers.reduce((total, number) => total + number, 0));