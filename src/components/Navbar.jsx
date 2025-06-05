import { Link } from 'react-router-dom';
import logo from '../assets/logo2.jpg'; 

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
    padding: '0.5rem 1.5rem',
    backgroundColor: '#cccccc',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderRadius: '10px', // rounded corners for navbar
    margin: '0.5rem', // small margin to show the round effect
  },
  logo: {
    height: '60px',
    width: 'auto',
    
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
   
  },
  logoImage: {
    height: '100px',
    width: 'auto',
    objectFit: 'cover',
    display: 'block',
    borderRadius: '12px',
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
    fontWeight: '300',
    fontSize: '20px',
  },
};
