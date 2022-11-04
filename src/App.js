import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
import NavBar from './Pages/NavBar';
import Books from './Pages/Booklist';
import Categories from './Pages/Categories';

const App = () => (
  <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
