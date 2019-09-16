//------------COMENZANDO-----------------

const path = require('path');
const fs = require('fs');

// existe la ruta?
export const existRoute = (route) => {
    if (fs.existsSync(route)) {
        return 'si existe';
    } else {
        return 'no existe';
    }
}

// Es absoluta ???
export const isAbsoluteOrRelative = (myRoute) => {
    if (path.isAbsolute(myRoute)) {
        return path;
    } else {
        return path.resolve(myRoute);
    }
}

// hay archivos?
export const isFile = (myRoute) => {
    if (fs.stats.isFile(myRoute)) {
        return 'es archivo';
    } else if (fs.stats.isDirectory(myRoute)) {
        return 'es directorio';
    } else {
        return 'no es ni archivo ni directorio'
    }
}