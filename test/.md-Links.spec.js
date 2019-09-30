import mdLinks from '../src/md-Links.js';
const path = require('path');

describe('funcion principal', () => {
  it('cuando tiene ruta y option.validate es false', (done) => {
    mdLinks(path.join(process.cwd(), 'pruebas', 'pruebaREADME.md'), { validate: false })
        .then(res => {
            expect(res[0].text).toBe('Node.js');
            done()
        })
  })
  it('cuando tiene ruta y option.validate es true', (done) => {
    mdLinks(path.join(process.cwd(), 'pruebas', 'pruebaREADME.md'), { validate: true })
        .then(res => {
            expect(res[0].status).toBe(200);
            done()
        })
  })
})