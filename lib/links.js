"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statsValidate = exports.statsLink = exports.validateLink = exports.extLinks = void 0;

const fs = require('fs');

const marked = require('marked');

const fetch = require('node-fetch');

const extLinks = arrayFiles => {
  const arrayOfLinks = [];
  arrayFiles.forEach(file => {
    const readFile = fs.readFileSync(file, 'utf8');
    const render = new marked.Renderer();

    render.link = (href, title, text) => {
      arrayOfLinks.push({
        href,
        text,
        file
      });
    };

    marked(readFile, {
      renderer: render
    });
  });
  return arrayOfLinks;
};

exports.extLinks = extLinks;

const validateLink = arrayOfLinks => {
  const promiseLink = arrayOfLinks.map(elem => fetch(elem.href).then(response => {
    if (response.status >= 200 && response.status < 400) {
      return { ...elem,
        statusText: response.statusText,
        status: response.status
      };
    }

    return { ...elem,
      statusText: 'fail',
      status: response.status
    };
  }).catch(err => ({ ...elem,
    statusText: 'ENOTFOUND',
    status: err.message
  })));
  return Promise.all(promiseLink);
};

exports.validateLink = validateLink;

const statsLink = arrayOfLinks => {
  const total = arrayOfLinks.length;
  const arrMap = arrayOfLinks.map(elem => elem.href);
  const set = new Set(arrMap);
  const unique = Array.from(set).length;
  return `Total : ${total}\nUnique : ${unique}`;
};

exports.statsLink = statsLink;

const statsValidate = (resultValidate, resultStats) => {
  const broken = resultValidate.filter(elem => elem.statusText === 'fail').length;
  return `${resultStats}\nBroken : ${broken}`;
};

exports.statsValidate = statsValidate;