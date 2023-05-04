// 2520 es el número más pequeño que se puede dividir por cada uno de los números del 1 al 10 sin resto.
// ¿Cuál es el número positivo más pequeño que es divisible por todos los números del 1 al 20?

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const numero = () => {
    let repite = true;
    let seCumplio = false;
    let i = 2;
    while (repite) {
        seCumplio = numbers.every(num => i % num === 0);
        if (seCumplio) return i;
        i++;
    }
}

console.log(numero());



// console.log(2025 / 1);

// const a = [1, 1, 2, 1, 1];


// b = a.every(num => num === 1);
// console.log(b);



// const xx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// xx.forEach(n => {
//     console.log(2519 % n);
// });

// const ff = xx.every(n => 2519 % n === 0);
// console.log(ff);

// const todos = shophing.every(shop => shop.precio === 10101);
// console.log(todos);


