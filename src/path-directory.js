
// ------------COMENZANDO-----------------

const path = require('path');
const fs = require('fs');
const marked = require('marked');

// existe la ruta?
export const existRoute = (route) => {
  if (fs.existsSync(route)) {
    return true;
  }
  return false;
};

// Es absoluta ???
export const isAbsoluteOrRelative = (myRoute) => {
  if (path.isAbsolute(myRoute)) {
    return myRoute;
  }
  return path.resolve(myRoute);
};

// hay archivos?
export const isFileOrDirectory = (myRoute) => {
  if (fs.statSync(myRoute).isFile()) {
    return true;
  }
  return false;
};
export const extensions = (myRoute) => {
  if (path.extname(myRoute) === '.md') {
    return path.extname(myRoute);
  }
  return 'no hay extensiones';
};

// guardar archivos en un array
export const saveFiles = (files) => {
  const arrayExtensions = [];
  arrayExtensions.push(files);
  return arrayExtensions;
};

// export const readFiles = (files) => {
//   const read = fs.readFileSync(files, 'utf8');
//   return read;
// };

// preguntar si tiene links
export const extLinks = (files) => {
  const readFile = fs.readFileSync(files, 'utf8');
  const arrayLinks = [];
  const render = new marked.Renderer();
  render.link = (href, title, text) => {
    arrayLinks.push({
      href, title, text,
    });
  };
  marked(readFile, { renderer: render });
  return arrayLinks;
};

// eslint-disable-next-line max-len
// console.log(extLinks('C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\lib\\pruebaREADME.md'));
