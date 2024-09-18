const input = 10;
// create your function here

const digitos = (numero) => {
    const caracteres = numero.toString().split('');
    return caracteres.join('-')
}

console.log(digitos(input)) // '1-0'
const secondInput = 1;
console.log(digitos(secondInput))
const thirdInput = 11234;
console.log(digitos(thirdInput)) // '1-1-2-3-4'