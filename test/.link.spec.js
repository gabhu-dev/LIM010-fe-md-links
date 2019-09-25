import { extLinks, validateLink, statsLink } from '../src/links.js';
// crear unn array
const arrayFiles = [
    // 'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme.md',
    'C:\\Users\\gabhu\\Desktop\\markdown\\LIM010-fe-md-links\\lib\\readme.md'
];

const arrayOfLinks = [{
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    'C:\\Users\\gabhu\\Desktop\\markdown\\LIM010-fe-md-links\\lib\\readme.md'
}, ];


describe('funcion extLinks', () => {
    it('deberia poder leer y extraer todos los links', () => {
        expect(extLinks(arrayFiles)[0].text).toBe('Node.js');
    })
})

describe('funcion validate Link', () => {
    it('deberia retornar un array con objeto de 5 propiedades', () => {
        validateLink(arrayOfLinks)
            .then((res) => {
                expect(res[0].statusText).toBe('OK');
            })
    });
});

// describe('funcion statsLink', () => {
//     it('deberia retornar un array', () => {
//         expect(statsLink(arrayOfLinks).toBe())
//     })
// })