import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    id, title, author, category,
  } = props;
  const percentage = 66;
  return (
    <div key={id} className="Book">
      <div>
        <h3 className="category">{category}</h3>
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <div className="buttons">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div>
        <div className="progreso">
          <CircularProgressbar value={percentage} text={`${percentage}%`} className="percent" />
          <div>
            <p className="percentage">64%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
      </div>
      <div className="progress">
        <p className="progressText">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 17</p>
        <button className="updateBtn" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Book;
