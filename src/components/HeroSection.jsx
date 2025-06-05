import { Link } from 'react-router-dom';
// import heroImage from '../assets/dyb-image-one.jpeg'; 


export default function HeroSection() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Doctors Beyond Medicine</h1>
        <p style={styles.tagline}>Where medical minds explore limitless possibilities</p>
        <Link to="/join" style={styles.button}>Join the Community</Link>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: '80vh',
    // backgroundImage: `url(${heroImage})`,
    backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80")',

    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    color: '#fff',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  tagline: {
    fontSize: '1.5rem',
    maxWidth: '600px',
    marginBottom: '2rem',
  },
  button: {
    backgroundColor: '#fff',
    color: '#000',
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
  },
};
