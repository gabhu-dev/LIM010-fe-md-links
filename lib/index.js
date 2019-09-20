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

// const md = require('markdown-it')();

// const render = md.render(read);
// console.log(render);
// console.log(render.link);
// var render = new marked.Renderer();
// render.link = (href, text) => {
//     console.log(text + ' ( link to: ' + href + ' )');
// }

// do{

// }while()
// console.log(result.indexOf('<a href', 0));
// const first = result.indexOf('https', 0);
// console.log(first);
// const second = result.indexOf('>', 0);
// console.log(second);

// const slice = result.slice(first, second);
// console.log(slice);

// const md = require(' markdown-it ')();
// const resultado = md.render(read);
// console.log(resultado);
// let md = require('markdown-it')('commonmark');

// console.log(md);

// enable everything
// md.validateLink = MarkdownIt# validateLink(read) { return true; };
// console.log(md.validateLink);
// var md = require('markdown-it')();
// console.log(md);
// var md = require('markdown-it')({
//   html: true,
//   linkify: true,
//   typographer: true
// });
// console.log(md.options.linkify);
// por cada link trae sus propiedades
// const linkify = require('linkify-it')();
// console.log(linkify.match('[Node.js](https://nodejs.org/es/)'));
// console.log(linkify.test(read));
// console.log(linkify.pretest(read));
// console.log(md.linkify.tlds(' .py ', false));







const marked = require('marked');
render_unlink = () => {
        const arr = [];
        const render = new marked.Renderer();

        render.link = (href, title, text) => {
            // return text + ' ( link to: ' + href + ' )';
            arr.push({
                hrefi: href,
                texto: text,
                titulo: title
            });

        };

        return render;

    },
    return arr;
md = 'this is some example markdown with [a link](github.com).';

console.log(marked(md));

console.log(marked(md, {
    renderer: render_unlink()
}));