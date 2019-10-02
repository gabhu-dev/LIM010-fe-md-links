import { existRoute, verify } from './path-directory';
import { extLinks, validateLink } from './links';


export default (route, options) => new Promise((resolve) => {
  if (existRoute(route) && options.validate === false) {
    resolve(extLinks(verify(route)));
  } else {
    resolve(validateLink(extLinks(verify(route))));
  }
});
