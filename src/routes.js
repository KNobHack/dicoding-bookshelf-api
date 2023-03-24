const {
  addBookHandler,
  getBooksHandler,
  getBookByIdHandler,
} = require('./handler');

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
  {
    path: '/books/{bookId}',
    method: 'GET',
    handler: getBookByIdHandler,
  },
];

module.exports = routes;
