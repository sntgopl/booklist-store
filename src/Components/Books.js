import React from 'react';

const Book = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    id, title, author, category,
  } = props;
  return (
    <div key={id} className="Book">
      <div>
        <h3>{category}</h3>
        <h2>{title}</h2>
        <p>{author}</p>
        <div>
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div>
        <div>
          <p>64% Completed</p>
        </div>
      </div>
      <div>
        <p>Current Chapter</p>
        <p>Chapter 17</p>
        <button type="button">Update progress</button>
      </div>
    </div>
  );
};

export default Book;
