import { extLinks, validateLink } from '../src/links.js';
// crear unn array
describe('funcion extLinks', () => {
    it('deberia poder leer y extraer todos los links', () => {
        expect(extLinks('C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\pruebaREADME.md')).toStrictEqual([{ href: 'https://nodejs.org/es/', title: null, text: 'Node.js' }]);
    })
})

describe('funcion de status fetch', () => {
    it('deberia poder saber el status de un link', () => {
        expect(linkFetch('https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch')).toBe()
    })
})