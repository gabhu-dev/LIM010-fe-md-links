const path = require('path');
const fs = require('fs');


export const existRoute = (route) => {
  if (fs.existsSync(route)) { return true; }
  return false;
};

export const isAbsoluteOrRelative = (myRoute) => {
  if (path.isAbsolute(myRoute)) { return myRoute; }
  return path.resolve(myRoute);
};


export const isFileOrDirectory = (myRoute) => {
  if (fs.statSync(myRoute).isFile()) { return myRoute; }
  return false;
};

export const extensions = (myRoute) => {
  if (path.extname(myRoute) === '.md') { return true; }
  return false;
};

export const verify = (route) => {
  const routeAbsolute = isAbsoluteOrRelative(route);
  let arrayFiles = [];
  if (isFileOrDirectory(routeAbsolute)) {
    if (extensions(isFileOrDirectory(routeAbsolute))) {
      arrayFiles.push(routeAbsolute);
    }
  } else {
    const readDirectory = fs.readdirSync(routeAbsolute);
    readDirectory.forEach((file) => {
      arrayFiles = arrayFiles.concat(verify(path.join(routeAbsolute, file)));
    });
  }
  return arrayFiles;
};
