import { Fade } from 'react-awesome-reveal';
import foundersTogetherImage from '../assets/maurineandjoy.jpeg';
import testimonial1 from '../assets/logo.jpg';
import testimonial2 from '../assets/logo.jpg';

export default function About() {
  return (
    <div style={styles.container}>
      <Fade cascade damping={0.1}>
        {/* Header */}
        <section style={styles.header}>
          <h1 style={styles.title}>About the Community</h1>
          <p style={styles.subtitle}>
            Doctors Beyond Medicine is a safe space for medical professionals and students reimagining what their careers can look like beyond the ward, the theatre, or the clinic.
          </p>
        </section>

        {/* Story Section */}
        <section style={styles.storySection}>
          <p style={styles.paragraph}>
            Most of us begin medical school with a clear vision specialize in Paediatrics, OBGYN, Surgery, or Internal Medicine. But somewhere along the way, that vision might evolve.
          </p>
          <p style={styles.paragraph}>
            You might find yourself curious about tech, passionate about entrepreneurship, or drawn to something completely different. And that’s okay.
          </p>
          <p style={styles.paragraph}>
            Shifting careers after years of study isn't easy, there's guilt, fear, and uncertainty. But what if you didn’t have to figure it all out alone?
          </p>
          <p style={styles.paragraph}>
            <strong>Doctors Beyond Medicine</strong> is a community for doctors and med students who are exploring life outside traditional practice. Here, you’ll find support, stories, and kindred spirits who’ve taken the leap or are just beginning to.
          </p>
        </section>

        {/* Founders Joint Section */}
        <section style={styles.foundersSection}>
          <h2 style={styles.sectionTitle}>Meet the Founders</h2>
          <div style={styles.founderCardTogether}>
            <img
              src={foundersTogetherImage}
              alt="Joy and Maurine"
              style={styles.founderImgTogether}
            />
            <p style={styles.founderTextTogether}>
              We’re <strong>Joy</strong> & <strong>Maurine</strong>, two medics who decided to color outside the lines. Together, we built this
              space to support doctors like us. Join us as we take charge of our lives and careers in bold new directions.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section style={styles.testimonials}>
          <h2 style={styles.sectionTitle}>What Our Members Say</h2>
          <div style={styles.testimonialGrid}>
            <div style={styles.testimonialCard}>
              <img src={testimonial1} alt="Member 1" style={styles.testimonialImg} />
              <p>
                “This platform reminded me I’m not alone. I’m now pursuing health tech with confidence.”
              </p>
              <strong>- Dr. Alex M.</strong>
            </div>
            <div style={styles.testimonialCard}>
              <img src={testimonial2} alt="Member 2" style={styles.testimonialImg} />
              <p>
                “Finally a space where I can connect with doctors who get it. Such a breath of fresh air.”
              </p>
              <strong>- Dr. Naliaka K.</strong>
            </div>
          </div>
        </section>
        {/* Call to Action */}
<section style={styles.ctaSection}>
  <h2 style={styles.ctaTitle}>Ready to explore life beyond medicine?</h2>
  <p style={styles.ctaText}>Join our growing community of bold, curious, and inspired medics charting new paths.</p>
  <a href="/join" style={styles.ctaButton}>Join Us</a>
</section>

      </Fade>
    </div>
  );
}

const styles = {
  container: {
    padding: '3rem 1rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    color: '#2D3748',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#4A5568',
    maxWidth: '700px',
    margin: '0 auto',
  },
  storySection: {
    marginTop: '2rem',
    marginBottom: '3rem',
  },
  paragraph: {
    fontSize: '1.05rem',
    lineHeight: '1.8',
    color: '#2D3748',
    marginBottom: '1.2rem',
  },
  foundersSection: {
    marginBottom: '4rem',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2rem',
    color: '#2D3748',
    marginBottom: '2rem',
  },
  founderCardTogether: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  founderImgTogether: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '16px',
    objectFit: 'cover',
  },
  founderTextTogether: {
    fontSize: '1.1rem',
    color: '#4A5568',
    marginTop: '1rem',
  },
  testimonials: {
    textAlign: 'center',
  },
  testimonialGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '2rem',
  },
  testimonialCard: {
    width: '280px',
    backgroundColor: '#f7fafc',
    padding: '1.5rem',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  testimonialImg: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1rem',
  },
  ctaSection: {
    marginTop: '4rem',
    padding: '3rem 1rem',
    backgroundColor: '#EDF2F7',
    textAlign: 'center',
    borderRadius: '12px',
  },
  ctaTitle: {
    fontSize: '2rem',
    color: '#2D3748',
    marginBottom: '1rem',
  },
  ctaText: {
    fontSize: '1.1rem',
    color: '#4A5568',
    marginBottom: '2rem',
  },
  ctaButton: {
    backgroundColor: '#2D3748',
    color: '#fff',
    padding: '0.9rem 1.8rem',
    fontSize: '1rem',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  
};
