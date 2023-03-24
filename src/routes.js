const { addBookHandler, getBooksHandler } = require('./handler');

const routes = [
  {
    path: '/books',
    method: 'POST',
    handler: addBookHandler,
  },
  {
    path: '/books',
    method: 'GET',
    handler: getBooksHandler,
  },
];

module.exports = routes;
