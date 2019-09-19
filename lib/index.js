/* eslint-disable no-console */

Object.defineProperty(exports, '__esModule', {
  value: true,
});
// eslint-disable-next-line max-len
// eslint-disable-next-line no-multi-assign
exports.saveFiles = exports.extensions = exports.isFileOrDirectory = exports.isAbsoluteOrRelative = exports.existRoute = void 0;

// ------------COMENZANDO-----------------
const path = require('path');

const fs = require('fs'); // existe la ruta?


const existRoute = (route) => {
  if (fs.existsSync(route)) {
    return true;
  }

  return false;
}; // Es absoluta ???


exports.existRoute = existRoute;

const isAbsoluteOrRelative = (myRoute) => {
  if (path.isAbsolute(myRoute)) {
    return myRoute;
  }

  return path.resolve(myRoute);
}; // hay archivos?


exports.isAbsoluteOrRelative = isAbsoluteOrRelative;

const isFileOrDirectory = (myRoute) => {
  if (fs.statSync(myRoute).isFile()) {
    return true;
  }

  return false;
};

exports.isFileOrDirectory = isFileOrDirectory;

const extensions = (myRoute) => {
  if (path.extname(myRoute) === '.md') {
    return path.extname(myRoute);
  }

  return 'no hay extensiones';
}; // guardar archivos en un array


exports.extensions = extensions;

const saveFiles = (files) => {
  const arrayExtensions = [];
  arrayExtensions.push(files);
  return arrayExtensions;
}; // eslint-disable-next-line no-console
// export const readFiles = (file) => {
//   fs.readFile(file, (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });
// };


// exports.saveFiles = saveFiles;
const read = fs.readFileSync('pruebaREADME.md', 'utf8');
// console.log(read);

const md = require('markdown-it')();

const result = md.renderInline(read);
console.log(result);
// do{

// }while()
// console.log(result.indexOf('<a href', 0));
const first = result.indexOf('https', 0);
console.log(first);
const second = result.indexOf('>', 0);
console.log(second);

const slice = result.slice(first, second);
console.log(slice);


// var md = require('markdown-it')('commonmark');
// console.log(md);
// var md = require('markdown-it')();
// console.log(md);
// var md = require('markdown-it')({
//   html: true,
//   linkify: true,
//   typographer: true
// });
// console.log(md.options.linkify);
// const linkify = require('linkify-it')();

// console.log(linkify.match(result));
// console.log(linkify.test(read));
// console.log(linkify.pretest(read));
