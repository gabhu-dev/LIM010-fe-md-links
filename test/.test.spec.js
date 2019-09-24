// testear mis funciones

import { isAbsoluteOrRelative, existRoute, extensions, isFileOrDirectory, saveFiles, extLinks } from '../src/path-directory.js';
describe('Esta función debería saber distinguir la absoluta de la relativa', () => {
    it('deberia poder distinguir una absoluta', () => {
        expect(isAbsoluteOrRelative(process.cwd())).toBe(process.cwd());
    })
    it('deberia poder distinguir una relativa', () => {
        expect(isAbsoluteOrRelative('src\\path-directory.js')).toBe('C:\\Users\\gabhu\\Desktop\\markdown\\LIM010-fe-md-links\\src\\path-directory.js');
    })
})

describe('Esta función debería poder determinar si existe la ruta', () => {
    it('debería tener como resultado <si existe> cuando la ruta es verdadera', () => {
        expect(existRoute(process.cwd())).toBe(true);
    })
    it('deberia tener como resultado no existe', () => {
        expect(existRoute('C:\\Users\\gabhu\\Desktop\\markdown\\LIM010-fe-md-links\\srcj\\path-directory.js')).toBe(false);
    })
})

describe('Esta función debería poder determinar si es un archivo', () => {
    it('existe archivo', () => {
        expect(isFileOrDirectory('C:\\Users\\gabhu\\Desktop\\markdown\\LIM010-fe-md-links\\src\\path-directory.js')).toBe(true);
    })
    it('existe directorio', () => {
        expect(isFileOrDirectory('C:\\Users\\gabhu\\Desktop\\markdown\\LIM010-fe-md-links\\src')).toBe(false);
    })
})

describe(' function extensions', () => {
    it('deberia poder obtener la extension de la  ruta', () => {
        expect(extensions('C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\README.md')).toBe('.md');
    })
    it('deberia salir error porque no se encontró extension', () => {

        expect(extensions('C:\\Users\\gabhu\\Desktop\\markdown\\LIM010-fe-md-links\\src')).toBe('no hay extensiones');
    })
})
describe('funcion saveExtensions', () => {
    it('deberia poder guardar en el array', () => {

        expect(saveFiles('README.md')).toBe('README.md');
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