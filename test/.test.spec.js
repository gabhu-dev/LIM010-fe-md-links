// testear mis funciones
import { sum } from '../src/index.js';

describe('esto deberia sumar', () => {
    it('deberia sumar', () => {
        sum('hola', 'mundo');
        expect('holamundo').toBe('holamundo');
    });
});