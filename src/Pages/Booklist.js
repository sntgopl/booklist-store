import React from 'react';
import Book from '../Components/Books';
import AddBook from '../Components/Form';

const Books = () => {
  const booklist = [
    {
      id: 1, title: 'Movie 1', author: 'Author 1', category: 'Action',
    },
    {
      id: 2, title: 'Movie 2', author: 'Author 2', category: 'Terror',
    },
  ];
  return (
    <div className="HomePage">
      <ul className="Booklist">
        {booklist.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} category={book.category} />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
