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
};

exports.isFileOrDirectory = isFileOrDirectory;

const extensions = myRoute => {
  if (path.extname(myRoute) === '.md') {
    return path.extname(myRoute);
  }

  return 'no hay extensiones';
}; // guardar archivos en un array


exports.extensions = extensions;

const saveFiles = files => {
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
const read = fs.readFileSync('C:\\Users\\LABORATORIA D0082\\Desktop\\project markdown\\LIM010-fe-md-links\\pruebas\\pruebaREADME.md', 'utf8');
console.log(read);
// console.log('hello world');
// console.log(process.cwd());
// const markdownIt= require('markdown-it');
// md = nuevo markdownIt();
// console.log(markdownIt);
// 

// var md = require('markdown-it')({
//   html: true,
//   linkify: true,
//   typographer: true
// });
var md = require('markdown-it')();
var result = md.renderInline(read);
console.log(result);
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
var linkify =  require ('linkify-it' ) ();

// var links =linkify.tlds (require('tlds')) ;
// console.log(links);
console.log(linkify.match(read));
console.log(linkify.test(read));
console.log(linkify.pretest(read));


