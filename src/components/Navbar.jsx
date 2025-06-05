import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; 

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Doctors Beyond Medicine Logo" style={styles.logoImage} />
        </Link>
      </div>
      <ul style={styles.links}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/stories" style={styles.link}>Stories</Link></li>
        <li><Link to="/join" style={styles.link}>Join</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    padding: '1rem 2rem',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    height: '40px',
    objectFit: 'contain',
  },
  links: {
    display: 'flex',
    listStyle: 'none',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#4A5568',
    fontWeight: '500',
  },
};
