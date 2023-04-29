// Ejercicio 2

// Cada nuevo término en la sucesión de Fibonacci se genera sumando los dos términos anteriores. Al comenzar con 1 y 2, los primeros 10 términos serán:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// Al considerar los términos en la sucesión de Fibonacci cuyos valores no superan los cuatro millones, encuentre la suma de los términos de valor par.

const a = limit => {
    if (limit < 2) return "El limite debe ser mayor a 1";
    let anterior = 1;
    let siguiente = 2;
    let sumando = anterior + siguiente;
    let numbers = [];
    while (siguiente < limit) {
        anterior = siguiente;
        siguiente = sumando;
        console.log(anterior);
        console.log(siguiente);
        numbers.push(anterior);
        numbers.push(siguiente);
    }
    return numbers;
}


console.log(a(100));