const input1 = 'string';

// create your function here

const cadena = (palabra) => {
    const numero = palabra.length;
    const invertir = palabra.split('').reverse().join('');
    return `${numero} ${invertir}`
}

console.log(cadena(input1));

const input2 = 'variable';
console.log(cadena(input2));

const input3 = 'pointer';
console.log(cadena(input3));
