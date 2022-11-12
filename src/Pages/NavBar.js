import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="NavBar">
    <h2 className="NavTitle">BOOKLIST CMS</h2>
    <Link to="/" className="Books">BOOKS</Link>
    <Link to="/categories" className="Categories">CATEGORIES</Link>
  </nav>
);

export default NavBar;
