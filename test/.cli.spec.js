import { cli } from '../src/cli.js'
import mdLinks from '../src/md-links.js';
const path = require('path');

describe('funcion cli ', () => {
  it('deberia de validar', (done) => {
    cli(path.join('pruebas', 'pruebaREADME.md'), '--validate', undefined)
      .then((res) => {
        expect(typeof(res)).toBe('string')
        done()
      })
  })
    it('deberia extraer solo los links', (done) => {
      cli(path.join(process.cwd(), 'pruebas', 'pruebaREADME.md'), undefined, undefined)
        .then((res) => {
          expect(typeof(res)).toBe('string')
          done()
        })
    })
    it('deberia fallar cuando no hay ruta', (done) => {
      cli(path.join(process.cwd(), 'pruebas', 'README.md'), undefined, undefined)
        .then((res) => {
          expect(res).toBe('Route not found')
          done()
        })
    })
    it('deberia cumplir la funcion stats', (done) => {
      cli(path.join(process.cwd(), 'pruebas', 'pruebaREADME.md'), '--stats', undefined)
        .then((res) => {
          expect(res).toBe('Total : 2\nUnique : 1')
          done()
        })
    })
    it('deberia cumplir la funcion statsValidate', (done) => {
      cli(path.join(process.cwd(), 'pruebas', 'pruebaREADME.md'), '--stats', '--validate')
        .then((res) => {
          expect(res).toBe('Total : 2\nUnique : 1\nBroken : 0')
          done()
        })
    })
    it('deberia fallar al poner los comandos al reves', (done) => {
      cli(path.join(process.cwd(), 'pruebas', 'pruebaREADME.md'), '--validate', '--stats')
        .then((res) => {
          expect(res).toBe('Invalid command')
          done()
        })
    })
    it('deberia fallar al no encontar nada', (done) => {
      cli(undefined, undefined, undefined)
        .then((res) => {
          expect(res).toBe('Enter a route and a valid option')
          done()
        })
    })
});