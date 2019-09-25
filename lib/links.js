"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLink = exports.extLinks = void 0;

const fs = require('fs');

const marked = require('marked');

const fetch = require('node-fetch');

const extLinks = arrayFiles => {
  const arrayOfLinks = [];
  arrayFiles.forEach(file => {
    const readFile = fs.readFileSync(file, 'utf8');
    const render = new marked.Renderer();

    render.link = (href, title, text) => {
      arrayOfLinks.push({
        href,
        text,
        file
      });
    };

    marked(readFile, {
      renderer: render
    });
  });
  return arrayOfLinks;
};

exports.extLinks = extLinks;
const arrayFiles = ['C:\\Users\\gabhu\\Desktop\\markdown\\LIM010-fe-md-links\\lib\\readme.md', 'C:\\Users\\gabhu\\Desktop\\markdown\\LIM010-fe-md-links\\lib\\readme-2.md'];
console.log(extLinks(arrayFiles));

const validateLink = arrayOfLinks => {
  const promiseLink = arrayOfLinks.map(elem => fetch(elem.href) // response es devuelto cuando fetch ha sido satisfactoria
  .then(response => {
    // respuesta satisfactoria
    if (response.status >= 200 && response.status < 400) {
      return { ...elem,
        statusText: response.statusText,
        // ok
        status: response.status
      };
    } // respuesta no satisfactoria


    return { ...elem,
      statusText: 'fail',
      status: response.status
    };
  }) // problemas en la peticion de fetch
  .catch(err => err));
  return Promise.all(promiseLink);
};

exports.validateLink = validateLink;
const arrayLinks = [{
  href: 'https://nodejs.org/es/',
  text: 'Node.js',
  file: 'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme.md'
}, {
  href: 'https://nodejs.org/es/',
  text: 'Node.js',
  file: 'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme.md'
}];
validateLink(arrayLinks).then(res => {
  console.log(res);
}); // funcion stats -- verificar
// export const statsLink = (arrayOfLinks) => {
//     const total = arrayOfLinks.length;
//     const unique = arrayOfLinks.filter((item, index, array) => array.indexOf(item) === index);
//     return { Total: total, Unique: unique.length };
// };
// console.log(statsLink(arrayLinks));
// // funcion stats-validate
// export const statsValidate = (statsLink, brokens) => ({ statsLink });