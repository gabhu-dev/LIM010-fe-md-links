// aqui van mis funciones
// export const sum = (text, word) => {
//     const concat = text + word;
//     return concat;
// };

// export const restar = (text, word) => {
//     const concat = text + word;
//     return concat;
// };
// recibir la ruta
// si es ruta relativa convertirla a absoluta
// recorrer el directorio
// preguntar si hay archivo ahi
//
// console.log('hello');
//------------COMENZANDO-----------------
const path = require('path');
// Es absoluta ???
export const isAbsoluteOrRelative = (myPath) => {
    if (path.isAbsolute(myPath)) {
        return path;
    } else {
        return 'error';
    }
}