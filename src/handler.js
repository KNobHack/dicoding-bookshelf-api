const { nanoid } = require('nanoid');
const books = require('./books');

const addBookHandler = (request, h) => {
  //   POST {
  //     "name": string,
  //     "year": number,
  //     "author": string,
  //     "summary": string,
  //     "publisher": string,
  //     "pageCount": number,
  //     "readPage": number,
  //     "reading": boolean
  // }
  // "finished": false,
  // "insertedAt": "2021-03-04T09:11:44.598Z",
  // "updatedAt": "2021-03-04T09:11:44.598Z"

  const id = nanoid(16);
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = request.payload;
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  if (!name) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    }).code(400);
  }

  if (readPage > pageCount) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    }).code(400);
  }

  const newBook = {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    id,
    finished,
    insertedAt,
    updatedAt,
  };

  books.push(newBook);

  // const isFailed = books.filter((book) => book.id === id) < 1;

  return h.response({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: {
      bookId: id,
    },
  }).code(201);
};

module.exports = {
  addBookHandler,
};
