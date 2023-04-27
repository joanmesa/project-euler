const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const shophing = [
    { nombre: 'Monitor 27 Puladas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

months.forEach(month => {
    if (month == "Enero") {
        console.log("Verdadero");
    }
});

months.forEach((month, i) => {
    if (month === "Abril") console.log(`${i}`);
});

// Array Methods Include
//-----------------------------------------

const result = months.includes("Enero");
console.log(result);

// Array Methods some -> Para arrelo de objetosa
//-----------------------------------------

const exist = shophing.some(item => item.nombre === 'Teclado');
console.log(exist);

const existMonth = months.some(month => month === "Diciembre");
console.log(existMonth);

// Array methods findIndex

const indexMonth = months.findIndex(month => month === "Abril");
console.log(indexMonth);

const indexShop = shophing.findIndex(shop => shop.nombre === "Pepita");
console.log(indexShop);

// Array methods reduce

// con un ciclo sumamos
let total = 0;
shophing.forEach(shop => total += shop.precio);
console.log(total);

// Con reduce
const res = shophing.reduce((total, shop) => total + shop.precio, 0);
console.log(res);

// Array mt