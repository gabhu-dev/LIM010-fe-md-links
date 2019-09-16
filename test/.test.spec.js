// testear mis funciones
// import { sum } from '../src/index.js';

// describe('esto deberia sumar', () => {
//     it('deberia sumar', () => {
//         sum('hola', 'mundo');
//         expect('holamundo').toBe('holamundo');
//     });
// });
import { isAbsoluteOrRelative } from '../src/index.js';

describe('Esta función debería saber distinguir la absoluta de la relativa', () => {
    it('deberia poder distinguir una absoluta', () => {
        expect('C:\Users\Files\gabhu.js').toBe('C:\Users\Files\gabhu.js');
        isAbsoluteOrRelative('C:\Users\Files\gabhu.js');
    })
    it('deberia poder distinguir una relativa', () => {
        isAbsoluteOrRelative('..\gabhu.js');
        expect('C:\Users\Files\gabhu.js').toBe('C:\Users\Files\gabhu.js');
    })
})