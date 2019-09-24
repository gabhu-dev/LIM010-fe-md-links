import { extLinks, validateLink, statsLink } from '../src/links.js';
// crear unn array
const arrayFiles = [
  'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme.md',
]
const arrayOfLinks = [ 
  { href: 'https://nodejs.org/es/',
  text: 'Node.js',
  file:'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme.md' },
  ]
describe('funcion extLinks', () => {
  it('deberia poder leer y extraer todos los links', () => {
    expect(extLinks(arrayFiles)).toStrictEqual([ { href: 'https://nodejs.org/es/', text: 'Node.js',file:'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme.md' }]);
  })
})

// describe('funcion de status fetch', () => {
//   it('deberia poder saber el status de un link', () => {
//     expect(validateLink('https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch')).toBe()
//   })
// })
describe('funcion validate Link',()=>{
  it('deberia retornar un array con objeto de 5 propiedades',()=>{
    validateLink(arrayOfLinks)
    .then((res) =>{
      expect(res).toBe([ { href: 'https://nodejs.org/es/',
      text: 'Node.js',
      file:
       'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme.md',
      statusText: 'OK',
      status: 200 } ]);
  })
});
});

describe('funcion statsLink',()=>{
  it('deberia retornar un array',()=>{
    expect(statsLink(arrayOfLinks).toBe())
  })
})