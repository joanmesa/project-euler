// 2520 es el número más pequeño que se puede dividir por cada uno de los números del 1 al 10 sin resto.
// ¿Cuál es el número positivo más pequeño que es divisible por todos los números del 1 al 20?

const createVector = num => {
    const numbers = [];
    for (let i = 1; i <= num; i++) {
        numbers.push(i);
    }
    return numbers;
}

const searchNumber = num => {
    let repeat = true;
    let isFulfilled = false;
    let i = 2;
    const numbers = createVector(num);
    while (repeat) {
        isFulfilled = numbers.every(
            num => i % num === 0
        );
        if (isFulfilled) return i;
        i++;
    }
}

console.log(searchNumber(10));
console.log(searchNumber(20));