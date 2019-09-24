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
            file:file,
          });
        };
      marked(readFile, { renderer: render });

    });
    return arrayOfLinks;
};
// const arrayFiles = [
//   'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme.md','C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme-2.md'
// ]
// console.log(extLinks(arrayFiles));

export const validateLink = (arrayOfLinks) => {
    const promiseLink = arrayOfLinks.map((elem) => fetch(elem.href)
        // response es devuelto cuando fetch ha sido satisfactoria
        .then((response) => {
            // respuesta satisfactoria
            if (response.status >= 200 && response.status <= 226) {
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
        .catch((err) => {
            return err;
        }));
    return Promise.all(promiseLink);
};
const arrayOfLinks = [ 
{ href: 'https://nodejs.org/es/',
text: 'Node.js',
file:'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme.md' },
{href: 'https://nodejs.org/es/',
text: 'Node.js',
file:'C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\readme.md' }
]

// validateLink(arrayOfLinks)
// .then((res)=>{
//   console.log(res);
// }) 
// funcion stats -- verificar
export const statsLink = (arrayOfLinks) => {
  const total = arrayOfLinks.length;
  const unique = arrayOfLinks.filter((item, index, array) => {
    return array.indexOf(item) === index;
   })
    return { Total: total, Unique: unique.length }
}
console.log(statsLink(arrayOfLinks));
// funcion stats-validate
export const statsValidate = (statsLink,brokens) => {
return {statsLink,}
}