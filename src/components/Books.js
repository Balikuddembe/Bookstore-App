import React from 'react';
import Book from './Book';
import Inputs from './Inputs';

const listBooks = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Science Fiction',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
  },
];

const Books = () => (
  <div className="books-container">
    <ul className="books">
      {listBooks.map((book) => (
        <Book
          title={book.title}
          author={book.author}
          category={book.category}
          key={book.id}
        />
      ))}
    </ul>
    <div className="horizontal-divider" />
    <Inputs />
  </div>
);

export default Books;
