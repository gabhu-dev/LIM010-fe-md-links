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

export const validateLink = (arrayOfLinks) => {
  const promiseLink = arrayOfLinks.map(elem => fetch(elem.href)
    .then((response) => {
      if (response.status >= 200 && response.status < 400) {
        return {
          ...elem,
          statusText: response.statusText,
          status: response.status,
        };
      }
      return {
        ...elem,
        statusText: 'fail',
        status: response.status,
      };
    })
    .catch(() => console.log('error de red')));
  return Promise.all(promiseLink);
};


export const statsLink = (arrayOfLinks) => {
  const total = arrayOfLinks.length;
  const arrMap = arrayOfLinks.map(elem => elem.href);
  const set = new Set(arrMap);
  const unique = Array.from(set).length;
  return `Total : ${total}\nUnique : ${unique}`;
};

export const statsValidate = (resultValidate, resultStats) => {
  const broken = resultValidate.filter(elem => elem.statusText === 'fail').length;
  return `${resultStats}\nBroken : ${broken}`;
};
