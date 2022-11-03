import React from 'react';

const AddBook = () => {
  return (
    <div>
      <form>
        <label>Add new book</label>
        <input type='text' placeholder='write the name of the book you want to add'></input>
        <select name='Category'>
          <option value='--'>--Please choose an option--</option>
          <option value='terror'>Terror</option>
          <option value='drama'>Drama</option>
        </select>
        <button type='button'>Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;