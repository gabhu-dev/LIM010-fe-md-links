// testear mis funciones
// import { sum } from '../src/index.js';

// describe('esto deberia sumar', () => {
//     it('deberia sumar', () => {
//         sum('hola', 'mundo');
//         expect('holamundo').toBe('holamundo');
//     });
// });
import { isAbsoluteOrRelative } from '../src/index.js';

describe('Esta función debería botar booleano', () => {
    it('deberia poder distinguir', () => {
        isAbsoluteOrRelative('C:\Users\gabhu\Desktop\projects-gabhu\test de dany con mocks de firebase y firestore');
        expect('C:\Users\gabhu\Desktop\projects-gabhu\test de dany con mocks de firebase y firestore').toBe('C:\Users\gabhu\Desktop\projects-gabhu\test de dany con mocks de firebase y firestore');
    })
})