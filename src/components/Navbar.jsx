import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
  const { getTotalItems } = useCart();

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <Link to="/" style={styles.logoLink}>
            MyStore
          </Link>
        </div>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.navLink}>
              Home
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/products" style={styles.navLink}>
              Products
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/cart" style={styles.navLink}>
              Cart {getTotalItems() > 0 && `(${getTotalItems()})`}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#2c3e50',
    padding: '1rem 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  logoLink: {
    color: '#fff',
    textDecoration: 'none',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '2rem',
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s',
  },
};

export default Navbar;
