import { Link } from 'react-router-dom';
import { MdFace } from 'react-icons/md';

const NavBar = () => (
  <nav className="NavBar">
    <h2 className="NavTitle">BOOKLIST CMS</h2>
    <Link to="/" className="Books">BOOKS</Link>
    <Link to="/categories" className="Categories">CATEGORIES</Link>
    <div className="user">
      <MdFace className="user" />
    </div>
  </nav>
);

export default NavBar;
