const marked = require('marked');
const fetch = require('node-fetch');
export const extLinks = (arrayFiles) => {
    const arrayOfLinks = [];
    arrayFiles.forEach((file) => {
        const readFile = fs.readFileSync(file, 'utf8');
        const render = new marked.Renderer();
        render.link = (href, file, text) => {
            arrayOfLinks.push({
                href,
                file,
                text,
            });
        };
        marked(readFile, { renderer: render });

    });
    return arrayOfLinks;
};

export const validateLink = (arrayOfLinks) => {
    const promiseLink = arrayOfLinks.map((elem) => fetch(elem.href)
        // response es devuelto cuando fetch ha sido satisfactoria
        .then((response) => {
            // respuesta satisfactoria
            if (response.status >= 200 && response.status <= 226) {
                return {
                    ...elem,
                    statusText: response.statusText, // ok
                    status: response.status,
                };
            }
            // respuesta no satisfactoria
            return {
                ...elem,
                statusText: 'fail',
                status: response.status,
            };
        })
        // problemas en la peticion de fetch
        .catch((err) => {
            return err;
        }));
    return Promise.all(promiseLink);
};