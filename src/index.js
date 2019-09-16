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
export const isAbsoluteOrRelative = (myPath) => {
        if (path.isAbsolute(myPath)) {
            return path;
        } else {
            return path.resolve(myPath);
        }
    }
    // hay archivos?