import { extLinks, validateLink, statsLink, statsValidate } from '../src/links.js';
// crear unn array
const arrayFiles = [
  'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme.md',
];

const arrayOfLinks = [{
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file:'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme.md',
}, ];

const arrayOfLinksBad =[{
  href: 'https://nodejs.org/s/',
  text: 'Node.js',
  file:'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme.md',
},
]

const linksBad = [ 
{ href: 'https://nodejs.org/s/',
text: 'Node.js',
file:
 'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme.md',
statusText: 'fail',
status: 404 } ]

const resultStat = 'Total: 2, Unique:2';

describe('funcion extLinks', () => {
    it('deberia poder leer y extraer todos los links', () => {
        expect(extLinks(arrayFiles)[0].text).toBe('Node.js');
    })
})

describe('funcion validate Link', () => {
    it('deberia retornar un status con 200', () => {
        validateLink(arrayOfLinks)
            .then((res) => {
                expect(res[0].status).toBe(200);
            })
    });
    it('deberia retornar un statusText', () => {
      validateLink(arrayOfLinksBad)
          .then((res) => {
              expect(res[0].statusText).toBe('fail');
          })
  });
});

describe('funcion statsLink', () => {
    it('deberia retornar un objeto con 2 propiedades', () => {
        expect(statsLink(arrayOfLinks)).toBe('Total: 1, Unique:1');
    })
})

describe('funcion statsValidate',()=>{
  it('deberia retornar total,unique,brokens',()=>{
    expect(statsValidate(resultStat,linksBad)).toBe('Total: 2, Unique:2 , Brokens: 1')
  })
})