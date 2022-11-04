import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="NavBar">
    <h2 className="NavTitle">Booklist</h2>
    <Link to="/">Books</Link>
    <Link to="/categories">Categories</Link>
  </nav>
);

export default NavBar;
