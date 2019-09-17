// testear mis funciones

import { isAbsoluteOrRelative, existRoute, extensions, isFileOrDirectory, saveExtensions, saveFiles } from '../src/index.js';


describe('Esta función debería saber distinguir la absoluta de la relativa', () => {
    it('deberia poder distinguir una absoluta', () => {
        isAbsoluteOrRelative('C:\Users\Files\gabhu.js');
        expect('C:\Users\Files\gabhu.js').toBe('C:\Users\Files\gabhu.js');
    })
    it('deberia poder distinguir una relativa', () => {
        isAbsoluteOrRelative('..\gabhu.js');
        expect('C:\Users\Files\gabhu.js').toBe('C:\Users\Files\gabhu.js');
    })
})

describe('Esta función debería poder determinar si existe la ruta', () => {
    it('debería tener como resultado <si existe> cuando la ruta es verdadera', () => {
        existRoute('C:\Users\gabhu\Desktop\markdown');
        expect('si existe').toBe('si existe');
    })
    it('deberia tener como resultado no existe', () => {
        existRoute('C:\Users\gabhu\Desktop\markdow');
        expect('no existe').toBe('no existe');
    })
})

describe('Esta función debería poder determinar si es un archivo', () => {
    it('existe archivo', () => {
        isFileOrDirectory('C:\Users\gabhu\Desktop\markdown\LIM010-fe-md-links\src\index.js');
        expect('es archivo').toBe('es archivo');
    })
    it('existe directorio', () => {
        isFileOrDirectory('C:\Users\gabhu\Desktop\markdown\LIM010-fe-md-links\src');
        expect('es directorio').toBe('es directorio');
    })
})

describe(' function extensions', () => {
    it('deberia poder obtener la extension de la  ruta', () => {
        extensions('C:\Users\gabhu\Desktop\markdown\LIM010-fe-md-links\README.md');
        expect('.md').toBe('.md');
    })
    it('deberia salir error porque no se encontró extension', () => {
        extensions('C:\Users\gabhu\Desktop\markdown\LIM010-fe-md-links\src');
        expect('no hay extensiones').toBe('no hay extensiones');
    })
})
describe('funcion saveExtensions', () => {
    it('deberia poder guardar en el array', () => {
        saveFiles('README.md');
        expect('README.md').toBe('README.md');
    })
})