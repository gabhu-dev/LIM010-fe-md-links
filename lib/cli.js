#!/usr/bin/env node
"use strict";

var _mdLinks = _interopRequireDefault(require("./md-links"));

var _links = require("./links");

var _pathDirectory = require("./path-directory");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const [,, ...args] = process.argv;
const first = args[0];
const second = args[1];
const third = args[2]; // ---------- VERDADERO----------------------
// const cli = (route, optionOne, optionTwo) => {
//   if (route !== undefined && optionOne === '--validate' && optionTwo !== '--stats') {
//     mdLinks(route, { validate: true })
//       .then(res => res.forEach((element) => {
//         const vals = Object.values(element);
//         const out = `${vals[2]} ${vals[0]} ${vals[3]} ${vals[4]} ${vals[1].slice(0, 49)} `;
//         console.log(out);
//       })); // se ejecuta opcion validate
//   } else if (route !== undefined && optionOne !== '--validate' && optionOne !== '--stats') {
//     mdLinks(route, { validate: false }) // extrae solo los links
//       .then(res => res.forEach((element) => {
//         const vals = Object.values(element);
//         console.log(`${vals[2]} ${vals[0]}  ${vals[1].slice(0, 49)}`);
//       }))
//       .catch(() => console.log('Route not found'));
//   } else if (route !== undefined && optionOne === '--stats' && optionTwo === undefined) {
//     console.log(statsLink(extLinks(verify(route)))); // hace la funcion de stats -> total / uniques
//   } else if (route !== undefined && optionOne === '--stats' && optionTwo === '--validate') {
//     mdLinks(route, { validate: true })
//       .then((res) => {
//         const resultStats = statsLink(extLinks(verify(route)));
//         const result = statsValidate(res, resultStats);
//         console.log(result);
//       });
//   } else if (route !== undefined && optionOne === '--validate' && optionTwo === '--stats') {
//     console.log('Command invalidate');
//   } else { // si todas son undefined
//     console.log('Enter a route and option validate');
//   }
// };
// cli(first, second, third);

const cli = (path, optionOne, optionTwo) => new Promise(resolve => {
  let out = '';

  if (path !== undefined && optionOne === '--validate' && optionTwo === undefined) {
    (0, _mdLinks.default)(path, {
      validate: true
    }).then(res => {
      res.forEach(element => {
        const vals = Object.values(element);
        out += `${vals[2]} ${vals[0]} ${vals[3]} ${vals[4]} ${vals[1].slice(0, 50)}\n`;
      });
      resolve(out);
    });
  } else if (path !== undefined && optionOne === undefined && optionTwo === undefined) {
    (0, _mdLinks.default)(path, {
      validate: false
    }) // extrae solo los links
    .then(res => {
      res.forEach(element => {
        const vals = Object.values(element);
        out += `${vals[2]} ${vals[0]}  ${vals[1].slice(0, 50)}\n`;
      });
      resolve(out);
    }).catch(() => resolve('Route not found'));
  } else if (path !== undefined && optionOne === '--stats' && optionTwo === undefined) {
    resolve((0, _links.statsLink)((0, _links.extLinks)((0, _pathDirectory.verify)(path)))); //
  } else if (path !== undefined && optionOne === '--stats' && optionTwo === '--validate') {
    (0, _mdLinks.default)(path, {
      validate: true
    }).then(res => {
      const resultStats = (0, _links.statsLink)((0, _links.extLinks)((0, _pathDirectory.verify)(path)));
      resolve((0, _links.statsValidate)(res, resultStats));
    });
  } else if (path !== undefined && optionOne === '--validate' && optionTwo === '--stats') {
    resolve('Invalid command');
  } else {
    resolve('Enter a route and valid option');
  }
});

cli(first, second, third).then(res => console.log(res));