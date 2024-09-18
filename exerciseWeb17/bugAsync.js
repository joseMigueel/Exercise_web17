// Este programa simula una llamada asincrónica para obtener un usuario
function obtenerUsuario(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, nombre: 'John Doe' }); 
            }else {
                resolve(null); 
            }
        }, 2000);
    });
}


async function main() {
    const usuario = await obtenerUsuario(1); 
    console.log(usuario); 
}
main();


