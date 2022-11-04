import React from 'react';

const Book = () => (
  <div className="Book">
    <div>
      <h3>Action</h3>
      <h2>The Hunger Games</h2>
      <p>Suzanne Fsar</p>
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

export default Book;
