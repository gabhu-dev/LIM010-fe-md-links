"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveFiles = exports.extensions = exports.isFileOrDirectory = exports.isAbsoluteOrRelative = exports.existRoute = void 0;

// ------------COMENZANDO-----------------
const path = require('path');

const fs = require('fs'); // existe la ruta?


const existRoute = route => {
  if (fs.existsSync(route)) {
    return true;
  }

  return false;
}; // Es absoluta ???


exports.existRoute = existRoute;

const isAbsoluteOrRelative = myRoute => {
  if (path.isAbsolute(myRoute)) {
    return myRoute;
  }

  return path.resolve(myRoute);
}; // hay archivos?


exports.isAbsoluteOrRelative = isAbsoluteOrRelative;

const isFileOrDirectory = myRoute => {
  if (fs.statSync(myRoute).isFile()) {
    return true;
  }

  return false;
}; // en esta funcion seria mejor si retornara booleano


exports.isFileOrDirectory = isFileOrDirectory;

const extensions = myRoute => {
  if (path.extname(myRoute) === '.md') {
    // seria mejor que retorne la ruta
    return path.extname(myRoute);
  }

  return 'no hay extensiones';
}; // guardar archivos en un array


exports.extensions = extensions;

const saveFiles = routes => {
  const arrayFiles = [];
  arrayFiles.push(routes);
  return arrayFiles;
}; // export const readFiles = (files) => {
//   const read = fs.readFileSync(files, 'utf8');
//   return read;
// };
// preguntar si tiene links
// export const extLinks = (arrayFiles) => {
//     const arrayOfLinks = [];
//     arrayFiles.forEach((file) => {
//         const readFile = fs.readFileSync(file, 'utf8');
//         const render = new marked.Renderer();
//         render.link = (href, file, text) => {
//             arrayOfLinks.push({
//                 href,
//                 file,
//                 text,
//             });
//         };
//         marked(readFile, { renderer: render });
//     });
//     return arrayOfLinks;
// };
// console.log(extLinks('C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\pruebaREADME.md'));
// ver si los links estan correctos
// export const validateLink = (arrayOfLinks) => {
// const urlLink = arrayOfLinks.map(elem => fetch(elem.href))
//     .then((response) => {
//         if (response.status >= 200 && response.status < 408) {
//             return {
//                 ...elem,
//                 status: response.status,
//                 statusText: response.statusText,
//             };
//         }
//         return {
//             ...elem,
//             status: response.status,
//             statusText: 'FAIL',
//         };
//     }),
//     .catch(() => {
//         ...elem,
//         status: 'ERROR',
//             statusText: 'FAIL',
//     })));
// return Promise.all(urlLink);
// };
// export const validateLink = (urlLink) => {
//     fetch(urlLink)
//         .then((response) => {
//             console.log(response.status);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }


exports.saveFiles = saveFiles;
console.log(validateLink('https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch'));