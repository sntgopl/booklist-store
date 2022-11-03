import React from 'react';
import {
  Routes, Route, Link,
} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <h2>Booklist</h2>
      <Link to="/">Home</Link>
    </nav>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Welcome to our brand-new Booklist Store!</h1>
      <p>
        Here you can select, save, rate and categorize your favorite selection of books. The ones you've read, the ones you wish to read, and those you create too!
      </p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;