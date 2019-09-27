const fs = require('fs');
const marked = require('marked');
const fetch = require('node-fetch');

export const extLinks = (arrayFiles) => {
  const arrayOfLinks = [];
  arrayFiles.forEach((file) => {
    const readFile = fs.readFileSync(file, 'utf8');
    const render = new marked.Renderer();
    render.link = (href, title, text) => {
      arrayOfLinks.push({
        href,
        text,
        file,
      });
    };
    marked(readFile, { renderer: render });
  });
  return arrayOfLinks;
};
// const arrayFiles = [
// eslint-disable-next-line max-len
// 'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme.md', 'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme-2.md'
// ]
// console.log(extLinks(arrayFiles));

export const validateLink = (arrayOfLinks) => {
  const promiseLink = arrayOfLinks.map(elem => fetch(elem.href)
  // response es devuelto cuando fetch ha sido satisfactoria
    .then((response) => {
      // respuesta satisfactoria
      if (response.status >= 200 && response.status < 400) {
        return {
          ...elem,
          statusText: response.statusText, // ok
          status: response.status,
        };
      }
      // respuesta no satisfactoria
      return {
        ...elem,
        statusText: 'fail',
        status: response.status,
      };
    })
  // problemas en la peticion de fetch
    .catch(err => err));
  return Promise.all(promiseLink);
};
// const arrayLinks = [{
//   href: 'https://nodejs.org/es/',
//   text: 'Node.js',
//   file: 'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme.md',
// },
// {
//   href: 'https://nodejs.org/s/',
//   text: 'Node.js',
//   file: 'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme.md',
// },
// ];

// validateLink(arrayLinks)
//     .then((res) => {
//         console.log(res);
//     })

// funcion stats -- verificar
export const statsLink = (arrayOfLinks) => {
  const total = arrayOfLinks.length;
  const arrMap = arrayOfLinks.map(elem => elem.href);
  const set = new Set(arrMap);
  const unique = Array.from(set).length;
  return `${'Total'}${':'} ${total}, ${'Unique'}${':'}${unique}`;
};
  // console.log(statsLink(arrayLinks));

// funcion stats-validate
// export const statsValidate = (statsLink, brokens) => ({ statsLink });
export const statsValidate = (resultStats, resultValidate) => {
  const brokens = resultValidate.filter(elem => elem.statusText === 'fail').length;
  return `${resultStats} ${','} ${'Brokens'}${':'} ${brokens}`;
};
// const ar = [{
//  href: 'https://nodejs.org/s/',
//   text: 'Node.js',
//   file:
//  'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme.md',
//   statusText: 'fail',
//   status: 404 
// }];
// const resultStat = 'Total: 2, Unique:2';
// console.log(statsValidate(resultStat, ar));
