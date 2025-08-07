import { Fade } from 'react-awesome-reveal';
import './Stories.css'; // We'll style it here
import doctor1 from '../assets/joy.jpg'; // Replace with real images
import doctor2 from '../assets/maurine.jpg'; // Replace with real images
import doctor3 from '../assets/logo.jpg'; // Optional

const stories = [
  {
    name: 'Dr. Joy Kweyu',
    image: doctor1,
    transition: 'From Medicine to Software Engineering',
    story: 'Joy shares her experience of balancing medical school while exploring the tech world. She now contributes to both healthcare and software development.',
  },
  {
    name: 'Dr. Maurine Achieng',
    image: doctor2,
    transition: 'Merging Medicine and Entrepreneurship',
    story: 'Maurine speaks about starting her own health-centered business while finishing med school, showing others that dual paths are possible.',
  },
  {
    name: 'Dr. Alex Mwangi',
    image: doctor3,
    transition: 'From Surgery to Data Science',
    story: 'After years in surgery, Alex transitioned into data science to work on public health AI models and now builds tools to improve diagnosis at scale.',
  }
];

export default function Stories() {
  return (
    <div className="stories-page">
      <header className="stories-hero">
        <h1>Real Journeys, Real Doctors</h1>
        <p>Read inspiring stories from doctors who chose to explore life beyond the white coat.</p>
      </header>

      <section className="story-cards">
        {stories.map((story, index) => (
          <Fade direction="up" triggerOnce key={index}>
            <div className="story-card">
              <img src={story.image} alt={story.name} />
              <h3>{story.name}</h3>
              <p className="transition">{story.transition}</p>
              <p className="story-text">{story.story}</p>
            </div>
          </Fade>
        ))}
      </section>
    </div>
  );
}
