import React from 'react';
import {
  Routes, Route, Link,
} from 'react-router-dom';
import Book from './Components/Books';
import AddBook from './Components/Form';

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <h2 className='NavTitle'>Booklist</h2>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </nav>
  );
}

const Books = () => {
  return (
    <div className='HomePage'>
      <ul className='Booklist'>
        <Book />
        <Book />
      </ul>
      <AddBook />
    </div>
  )
}

const Categories = () => {
  return (
    <div>
      <ul>
        <h3>Categories</h3>
        <li>All</li>
      </ul>
    </div>
  )
}

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  )
}

export default App;