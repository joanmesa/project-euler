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
    for (let i = 0; i <= limit; i++) {
        // if (primo(i)) primes.push(i);
        if (primo(i) && limit % i == 0) {
            console.log(i);
        }
    }
    return primes;
}

console.log(listPrime(65678900));

assssssssszzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzjj}vmmmvm}m}vvm}}mvv}mvm}vm}}}}}}}}vm}}mv7{7{{7<{7{7<{7<{7<{7<{<}}}}}}}}}
