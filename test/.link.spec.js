import { extLinks, validateLink, statsLink, statsValidate } from '../src/links.js';

const path = require('path');
// crear unn array
const arrayFiles = [
    path.join(process.cwd(), 'pruebas', 'pruebaREADME.md')
];

const arrayOfLinks = [{
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: path.join(process.cwd(), 'pruebas', 'pruebaREADME.md'),
}, ];

const arrayOfLinksBad = [{
    href: 'https://nodejs.org/s/',
    text: 'Node.js',
    file: 'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme.md',
}, ]

const linksBad = [{
    href: 'https://nodejs.org/s/',
    text: 'Node.js',
    file: path.join(process.cwd(), 'pruebas', 'pruebaREADME.md'),
    statusText: 'fail',
    status: 404
}]

const bad = [{
    href: 'https://nodejsrg/e/',
    text: 'node.js',
    file: 'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme.md'
}]
const resultStat = 'Total : 2\nUnique : 2';

describe('funcion extLinks', () => {
    it('deberia poder leer y extraer todos los links', () => {
        expect(extLinks(arrayFiles)[0].text).toBe('Node.js');
    })
})

describe('funcion validate Link', () => {
    it('deberia retornar un status con 200', (done) => {
        validateLink(arrayOfLinks)
            .then((res) => {
                expect(res[0].status).toBe(200);
                done()
            })
    });
    it('deberia retornar un statusText', (done) => {
        validateLink(arrayOfLinksBad)
            .then((res) => {
                expect(res[0].statusText).toBe('fail');
                done()
            })
    });
    it('deberia de retornar error', (done) => {
        validateLink(bad)
            .then((res) => {
                expect(res[0].statusText).toBe('ENOTFOUND');
                done()
            })
    });
});

describe('funcion statsLink', () => {
    it('deberia retornar un objeto con 2 propiedades', () => {
        expect(statsLink(arrayOfLinks)).toBe('Total : 1\nUnique : 1');
    })
})

describe('funcion statsValidate', () => {
    it('deberia retornar total,unique,brokens', () => {
        expect(statsValidate(linksBad, resultStat)).toBe('Total : 2\nUnique : 2\nBroken : 1')
    })
})