const usuario = {
    nombre: 'Jose Miguel',
    apellidos: 'Marrero',
    temasBootcamp: [
        {
            nombre: 'Node.js',
            fecha: '2024-01-08'
        },
        {
            nombre: 'Git',
            fecha: '2024-02-08'
        },
        {
            nombre: 'React',
            fecha: '2024-03-10'
        }
    ],
    busquedaActiva: true
};

const moduloReact = usuario.temasBootcamp.find(tema => tema.nombre === 'React');
console.log(`La fecha de inicio del modulo de React es: ${moduloReact.fecha}`)