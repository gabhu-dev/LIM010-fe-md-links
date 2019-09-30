// se unen todas las funciones
import { existRoute, verify } from './path-directory';
import { extLinks, validateLink } from './links';

// const path = require('path');

export default (route, options) => new Promise((resolve) => {
    if (existRoute(route) && options.validate === false) {
        resolve(extLinks(verify(route)));
    } else {
        resolve(validateLink(extLinks(verify(route))))
    }
});
// export default (route, options) => new Promise((resolve) => {
//   if (existRoute(route)) {
//     if (options.validate === false) {
//       resolve(extLinks(verify(route)));
//     } else {
//       validateLink(extLinks(verify(route)))
//         .then(res => resolve(res)); // deberia retornar un string
//     }
//   } else {
//     resolve('Route not found');
//   }
// });

// mdLinks(path.join((process.cwd())), '.readme.md', { validate: false })
//   .then(res => console.log(res));
// mdLinks('C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\pruebas\\pruebaREADME.md', { validate: true })
//   .then(res => console.log(res));