import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './Pages/NavBar';
import Books from './Pages/Booklist';
import Categories from './Pages/Categories';
import getBooks from './Components/API/get';

const App = () => {
  const dispatch = useDispatch();
  dispatch(getBooks());
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
};

export default App;
