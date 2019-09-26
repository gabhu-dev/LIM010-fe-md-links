// se unen todas las funciones
import { existRoute, verify } from './path-directory.js';
import { extLinks, validateLink } from './links.js';
const mdLinks = (route, options) => new Promise((resolve) => {
    if (existRoute(route)) {
        if (options === undefined || options.validate === false) {
            resolve(extLinks(verify(route)));
        } else {
            resolve(validateLink(extLinks(verify(route))));
        }
    } else {
        resolve(console.log('Route not found'))
    }
});