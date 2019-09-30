// ------------COMENZANDO-----------------
// import mdLinks from './md-links.js';
// import { statsLink, statsValidate, extLinks } from './links';

const path = require('path');
const fs = require('fs');


// existe la ruta?
export const existRoute = (route) => {
    if (fs.existsSync(route))
        return true;
    return false;
};

// Es absoluta ???
export const isAbsoluteOrRelative = (myRoute) => {
    if (path.isAbsolute(myRoute))
        return myRoute;
    return path.resolve(myRoute);
};

// hay archivos?
export const isFileOrDirectory = (myRoute) => {
    if (fs.statSync(myRoute).isFile())
        return myRoute; // es archivo
    return false; // es directorio
};
// en esta funcion seria mejor si retornara booleano
export const extensions = (myRoute) => {
    if (path.extname(myRoute) === '.md')
        return true;
    return false;
};


// export const readFiles = (files) => {
//   const read = fs.readFileSync(files, 'utf8');
//   return read;
// };

// recursion
export const verify = (route) => {
  const routeAbsolute = isAbsoluteOrRelative(route); // ruta absoluta
  let arrayFiles = [];
  if (isFileOrDirectory(routeAbsolute)) { // es archivo
    if (extensions(isFileOrDirectory(routeAbsolute))) { // es .md
      arrayFiles.push(routeAbsolute);
    }
  } else { // es directorio
    const readDirectory = fs.readdirSync(routeAbsolute); // lee el archivo
    readDirectory.forEach((file) => {
      arrayFiles = arrayFiles.concat(verify(path.join(routeAbsolute, file)));
    });
  }
  return arrayFiles;
};

// copy

// Grab provided args.

// import { verify } from './path-directory';

// const [, , ...args] = process.argv;


// const first = args[0];
// const second = args[1];
// const third = args[2];

// el resultado de poner solo la ruta:
// $ md-links ./some/example.md
// ./some/example.md http://algo.com/2/3/ Link a algo
// ./some/example.md https://otra-cosa.net/algun-doc.html algún doc
// ./some/example.md http://google.com/ Google
// ---------- VALIDATE-------------
// $ md-13d99df067c1
// ./some/example.md http://algo.com/2/3/ ok 200 Link a algo
// ./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
// ./some/example.md http://google.com/ ok 301 Google

const mdLinks= (route, options) => new Promise((resolve) => {
  if (existRoute(route) && options.validate === false) {
      resolve(extLinks(verify(route)));
  } else {
      resolve(validateLink(extLinks(verify(route))))
  }
});
// export const cli = (route, optionOne, optionTwo) => {
//   let result = '';
// 	if (route !== undefined && optionOne === '--validate' && optionTwo !== '--stats') {
// 			mdLinks(route, { validate: true })
// 				.then(res => res.forEach(element => {
// 						const vals = Object.values(element);
// 						result += `${vals[2]} ${vals[0]} ${vals[3]} ${vals[4]} ${vals[1].slice(0,49)} `
// 				})); // se ejecuta opcion validate
// 	} else if (route !== undefined && optionOne !== '--validate' && optionOne !== '--stats') {
// 			mdLinks(route, { validate: false }) // extrae solo los links
// 				.then(res => res.forEach(element => {
// 						const vals = Object.values(element);
// 						console.log(`${vals[2]} ${vals[0]}  ${vals[1].slice(0,49)}`);
// 				}))
// 				.catch(() => console.log('Route not found'))
// 	} else if (route !== undefined && optionOne === '--stats' && optionTwo === undefined) {
// 			console.log(statsLink(extLinks(verify(route)))); // hace la funcion de stats -> total / uniques
// 	} else if (route !== undefined && optionOne === '--stats' && optionTwo === '--validate') {
// 			mdLinks(route, { validate: true })
// 				.then((res) => {
// 						const resultStats = statsLink(extLinks(verify(route)));
// 						const result = statsValidate(res, resultStats);
// 						console.log(result);
// 				});
// 	} else if (route !== undefined && optionOne === '--validate' && optionTwo === '--stats') {
// 		console.log('Command invalidate');
// 	} else { // si todas son undefined
// 		console.log('Enter a route and option validate');
//   }
//   return result;
// };
// cli('README.md','--validate',undefined)
// .then(res => console.log(res))