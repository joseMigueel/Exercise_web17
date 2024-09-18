const input = 10;
// create your function here

const digitos = (numero) => {
    const caracteres = numero.toString().split('');
    return caracteres.join('-')
}

console.log(digitos(input))
yourFunction(input); // '1-0'
const secondInput = 1;
yourFunction(input); // '1'
const thirdInput = 11234;
yourFunction(input); // '1-1-2-3-4'