import { extLinks, validateLink } from '../src/links.js';
// crear unn array
const arrayFiles = [
  'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme.md',
]
// const array = [
// {href:'https://es.wikipedia.org/wiki/Markdown',file:'../lib/readme.md',text:'Markdown'},
// {href:'https://nodejs.org/es/',file:'../lib/readme.md',text:'Node.js'}
// ]
describe('funcion extLinks', () => {
  it('deberia poder leer y extraer todos los links', () => {
    expect(extLinks(arrayFiles)).toStrictEqual([ { href: 'https://nodejs.org/es/', text: 'Node.js',file:'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme.md' }]);
  })
})

describe('funcion de status fetch', () => {
  it('deberia poder saber el status de un link', () => {
    expect(linkFetch('https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch')).toBe()
  })
})