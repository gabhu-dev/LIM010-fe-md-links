const nodeFetch = jest.requireActual('node-fetch');
// eslint-disable-next-line import/no-extraneous-dependencies
const fetchMock = require('fetch-mock').sandbox();

Object.assign(fetchMock.config, nodeFetch, {
  fetch: nodeFetch,
});
module.exports = fetchMock;
