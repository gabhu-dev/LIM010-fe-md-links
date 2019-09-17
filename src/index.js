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
export const isFileOrDirectory = (myRoute) => {
    if (fs.statSync(myRoute).isFile()) {
        return 'es archivo';
    } else {
        return 'es directorio';
    }
}
export const extensions = (myRoute) => {
    if (path.extname(myRoute).length > 0) {
        return path.extname(myRoute);
    } else {
        return 'no hay extensiones';
    }
}

// guardar archivos en un array
export const saveFiles = (files) => {
    let arrayExtensions = [];
    arrayExtensions.push(files);
    return arrayExtensions;
}