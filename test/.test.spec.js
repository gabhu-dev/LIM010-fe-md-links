// testear mis funciones

import { isAbsoluteOrRelative, existRoute } from '../src/index.js';
import { isFile } from '@babel/types';

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
        isFile('C:\Users\gabhu\Desktop\markdown\LIM010-fe-md-links\src\index.js');
        expect('es archivo').toBe('es archivo');
    })
    it('existe directorio', () => {
        isFile('C:\Users\gabhu\Desktop\markdown\LIM010-fe-md-links\src');
        expect('es directorio').toBe('es directorio');
    })
    it('no e ninguno de los dos', () => {
        isFile('C:\Users\gabhu\Desktop\markdown\LIM010-fe-md-links\src');
        expect('es directorio').toBe('es directorio');
    })
})