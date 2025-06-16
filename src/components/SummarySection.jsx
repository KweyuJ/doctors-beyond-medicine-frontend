// src/components/SummarySection.jsx
export default function SummarySection() {
    return (
      <section style={styles.section}>
        <h2 style={styles.heading}>Why Doctors Beyond Medicine?</h2>
        <p style={styles.summary}>
          A growing community of doctors and med students breaking boundaries, exploring paths in tech,
          entrepreneurship, policy, media, and more — all while redefining what it means to wear the white coat.
        </p>
        <div style={styles.cards}>
          <div style={styles.card}>
            <h3>Explore New Paths</h3>
            <p>Tech, business, media, and more — see how your medical background opens doors everywhere.</p>
          </div>
          <div style={styles.card}>
            <h3>Real Stories</h3>
            <p>Be inspired by stories of doctors who have built successful careers beyond clinical practice.</p>
          </div>
          <div style={styles.card}>
            <h3>Community Support</h3>
            <p>Connect with like-minded peers who are also daring to go beyond the stethoscope.</p>
          </div>
        </div>
      </section>
    );
  }
  
  const styles = {
    section: {
      padding: '4rem 2rem',
      textAlign: 'center',
      backgroundColor: '#f9fafb',
      borderRadius: '12px',
      marginTop: '2rem',
    },
    heading: {
      fontSize: '2rem',
      marginBottom: '1rem',
    },
    summary: {
      fontSize: '1.1rem',
      maxWidth: '700px',
      margin: '0 auto 2rem',
      color: '#4A5568',
    },
    cards: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1.5rem',
    },
    card: {
      backgroundColor: '#fff',
      padding: '1.5rem',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.06)',
      width: '280px',
      textAlign: 'left',
    },
  };
  