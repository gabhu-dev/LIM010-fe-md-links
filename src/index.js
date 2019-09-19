// ------------COMENZANDO-----------------

const path = require('path');
const fs = require('fs');
const md = require('markdown-it')();
const linkify = require('linkify-it')();
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

export const readFiles = (files) => {
  const read = fs.readFileSync(files, 'utf8');
  return read;
};

// preguntar si tiene links

export const extLinks = (read) => {
  const convertHtml = md.renderInline(read);
  const extLinks = linkify.match(read);
  return result;
};
// acuerdate de que pasandole o no pasandole read esta saliendo igual en linky revisalo bien.
