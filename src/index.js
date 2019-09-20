// ------------COMENZANDO-----------------

const path = require('path');
const fs = require('fs');
const marked = require('marked');
// const md = require('markdown-it')();
// const linkify = require('linkify-it')();
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

// export const extLinks = (read) => {
//   const convertHtml = md.renderInline(read);
//   const extLinks = linkify.match(read);
//   return result;
// };
// acuerdate de que pasandole o no pasandole read esta saliendo igual en linky revisalo bien.

// return a custom renderer for marked.
render_unlink = () => {

        const render = new marked.Renderer();

        render.link = function(href, title, text) {
            return text + ' ( link to: ' + href + ' )';

        };

        return render;

    },

    md = 'this is some example markdown with [a link](github.com).';

console.log(marked(md));
// <p>this is some example markdown with <a href="github.com">a link</a>.</p>

console.log(marked(md, {
    renderer: render_unlink()
}));