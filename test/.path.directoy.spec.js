// testear mis funciones
const path = require('path');
import { isAbsoluteOrRelative, existRoute, extensions, isFileOrDirectory, verify } from '../src/path-directory.js';
describe('Esta función debería saber distinguir la absoluta de la relativa', () => {
    it('deberia poder distinguir una absoluta', () => {
        expect(isAbsoluteOrRelative(process.cwd())).toBe(process.cwd());
    })
    it('deberia poder distinguir una relativa', () => {
        expect(isAbsoluteOrRelative('src\\path-directory.js')).toBe(path.join(process.cwd(), 'src', 'path-directory.js'));
    })
})

describe('Esta función debería poder determinar si existe la ruta', () => {
    it('cuando existe ruta', () => {
        expect(existRoute(process.cwd())).toBe(true);
    })
    it('cuando no existe ruta', () => {
        expect(existRoute('C:\\Users\\gabhu\\Desktop\\markdown\\LIM010-fe-md-links\\juancito')).toBe(false);
    })
})

describe('Esta función debería determinar si es un archivo o un directorio', () => {
    it('existe archivo', () => {
        expect(isFileOrDirectory(path.join(process.cwd(), 'src', 'path-directory.js'))).toBe(path.join(process.cwd(), 'src', 'path-directory.js'));
    })
    it('existe directorio', () => {
        expect(isFileOrDirectory(path.join(process.cwd()))).toBe(false);
    })
})

describe(' function extensions', () => {
    it('deberia poder obtener la extension de la  ruta', () => {
        expect(extensions(path.join(process.cwd(), 'README.md'))).toBe(true);
    })
    it('deberia salir error porque no se encontró extension', () => {
        expect(extensions(path.join(process.cwd(), 'src', 'md-Links.js'))).toBe(false);
    })
})

describe('hace recursion', () => {
        it('cuando la ruta es un archivo', () => {
            expect(verify(path.join(process.cwd(), 'pruebas', 'pruebaREADME.md'))).toStrictEqual([path.join(process.cwd(), 'pruebas', 'pruebaREADME.md')])
        })
        it('cuando la ruta es directorio', () => {
            expect(verify(path.join(process.cwd(), 'pruebas'))).toStrictEqual([path.join(process.cwd(), 'pruebas', 'pruebaREADME.md')])
        })
    })
    // describe('funcion readFiles', () => {
    //   it('debería poder leer un archivo', () => {
    //     expect(readFiles('C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\pruebas\\pruebaREADME.md')).toBe('# hello world');
    //   })
    // })
    // describe('funcion extLinks', () => {
    //     it('deberia poder leer y extraer todos los links', () => {
    //         expect(extLinks('C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\pruebaREADME.md')).toStrictEqual([{ href: 'https://nodejs.org/es/', title: null, text: 'Node.js' }]);
    //     })
    // })

// describe('funcion de status fetch', () => {
//     it('deberia poder saber el status de un link', () => {
//         expect(linkFetch('https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch')).toBe()
//     })
// })