// Ejercicio 2

// Cada nuevo término en la sucesión de Fibonacci se genera sumando los dos términos anteriores. Al comenzar con 1 y 2, los primeros 10 términos serán:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// Al considerar los términos en la sucesión de Fibonacci cuyos valores no superan los cuatro millones, encuentre la suma de los términos de valor par.

const fibonacci = limit => {
    if (limit < 2) return "El limite debe ser mayor a 1";
    let numbers = [1, 2];
    let suma = 0;
    while (suma < limit) {
        let anterior = numbers[numbers.length - 2];
        let siguiente = numbers[numbers.length - 1];
        suma = anterior + siguiente;
        numbers.push(suma);
    }
    return numbers;
}

let numFibonacci = fibonacci(4000000);
numFibonacci.pop();

const sumaFibonacci = listOfNumbers => {
    let listParNumbers = listOfNumbers
        .filter(num => num % 2 == 0)
        .reduce((total, num) => total + num, 0);

    return listParNumbers;
}
console.log(sumaFibonacci(numFibonacci));