#!/usr/bin/env node
// Grab provided args.
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cli = void 0;

var _mdLinks = _interopRequireDefault(require("./md-links"));

var _links = require("./links");

var _pathDirectory = require("./path-directory");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const [,, ...args] = process.argv;
const first = args[0];
const second = args[1];
const third = args[2]; // el resultado de poner solo la ruta:
// $ md-links ./some/example.md
// ./some/example.md http://algo.com/2/3/ Link a algo
// ./some/example.md https://otra-cosa.net/algun-doc.html algún doc
// ./some/example.md http://google.com/ Google
// ---------- VALIDATE-------------
// $ md-13d99df067c1
// ./some/example.md http://algo.com/2/3/ ok 200 Link a algo
// ./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
// ./some/example.md http://google.com/ ok 301 Google
// export const cli = (route, optionOne, optionTwo) => {
// 	if (route !== undefined && optionOne === '--validate' && optionTwo !== '--stats') {
// 			mdLinks(route, { validate: true })
// 				.then(res => res.forEach(element => {
// 						const vals = Object.values(element);
// 						return `${vals[2]} ${vals[0]} ${vals[3]} ${vals[4]} ${vals[1].slice(0,49)} `
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
// 	}
// };
// cli(first, second, third)
// .then(res => console.log(res))

const cli = (route, optionOne, optionTwo) => {
  let result = '';

  if (route !== undefined && optionOne === '--validate' && optionTwo !== '--stats') {
    (0, _mdLinks.default)(route, {
      validate: true
    }).then(() => console.log('ya salio')); // .then(res => res.forEach(element => {
    // 		// const vals = Object.values(element);
    // 		// result += `${vals[2]} ${vals[0]} ${vals[3]} ${vals[4]} ${vals[1].slice(0,49)} `
    // 		console.log(element);
    // })); // se ejecuta opcion validate
  } else if (route !== undefined && optionOne !== '--validate' && optionOne !== '--stats') {
    (0, _mdLinks.default)(route, {
      validate: false
    }) // extrae solo los links
    .then(res => res.forEach(element => {
      const vals = Object.values(element);
      console.log(`${vals[2]} ${vals[0]}  ${vals[1].slice(0, 49)}`);
    })).catch(() => console.log('Route not found'));
  } else if (route !== undefined && optionOne === '--stats' && optionTwo === undefined) {
    console.log((0, _links.statsLink)((0, _links.extLinks)((0, _pathDirectory.verify)(route)))); // hace la funcion de stats -> total / uniques
  } else if (route !== undefined && optionOne === '--stats' && optionTwo === '--validate') {
    (0, _mdLinks.default)(route, {
      validate: true
    }).then(res => {
      const resultStats = (0, _links.statsLink)((0, _links.extLinks)((0, _pathDirectory.verify)(route)));
      const result = (0, _links.statsValidate)(res, resultStats);
      console.log(result);
    });
  } else if (route !== undefined && optionOne === '--validate' && optionTwo === '--stats') {
    console.log('Command invalidate');
  } else {
    // si todas son undefined
    console.log('Enter a route and option validate');
  }

  return result;
};

exports.cli = cli;
cli(first, second, third).then(res => console.log(res));