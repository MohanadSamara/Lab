import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: 'white' }}>
      <Link to="/" style={{ marginRight: '1rem', color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/movies" style={{ color: 'white', textDecoration: 'none' }}>Movies</Link>
    </nav>
  );
}

export default Navbar;
