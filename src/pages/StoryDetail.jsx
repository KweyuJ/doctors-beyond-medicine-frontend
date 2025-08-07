import { useParams } from 'react-router-dom';
import './Stories.css';
import doctor1 from '../assets/joy.jpg';
import doctor2 from '../assets/maurine.jpg';
import doctor3 from '../assets/logo.jpg';

const storyData = {
  'joy-kweyu': {
    name: 'Dr. Joy Kweyu',
    image: doctor1,
    transition: 'From Medicine to Software Engineering',
    fullStory: `As one half of *Doctors Beyond Medicine*, I’ve always believed that medicine doesn’t have to be a single-track journey. For me, that journey has been a blend of medicine and software development, two fields that might seem worlds apart but, in reality, intersect in powerful ways. 

Back in high school, I took computer studies, and the curiosity never left me. I had an itch I needed to scratch. So immediately after my 4th year in medical school, I took the leap and joined Moringa School. I still remember the thrill of seeing my first lines of code actually work,debugging though? That was a different kind of test in patience! 

One of my most eye-opening projects was building a Flask-based API for doctors, patients, diagnoses, and prescriptions with the help of my mentor Erick Mong'are .This backend-focused project gave me insight into how digital health solutions can streamline patient management and medical records, something that many healthcare facilities still struggle with. It wasn’t just about writing backend logic; it was about understanding how technology could address real-world inefficiencies in healthcare. That experience made me realize that medicine and tech don’t have to exist in silos so when combined, they can revolutionize healthcare.

This realization is part of what led me to co-found *Doctors Beyond Medicine*. Many doctors explore alternative career paths but often lack structured guidance. Through this platform, we aim to bridge the gap, helping medical professionals transition into tech, business, consulting, and beyond. 

Now, as I work toward completing medical school, I’m just as excited to keep building in the health tech space, exploring how technology can enhance medical service delivery. `,
  },
  'maurine-khalwale': {
    name: 'Dr. Maurine Khalwale',
    image: doctor2,
    transition: 'Merging Medicine and Accounting',
    fullStory: `As one half of our platform, Doctors Beyond Medicine, someone may be curious as to why I decided to pursue both Medicine and ACCA. Balancing medicine and finance may seem unconventional to many but for me, it has been a natural intersection. Medicine has trained me to be analytical and resilient under pressure while finance sharpened my quantitative reasoning and business acumen. 

One moment that solidified my desire to fully pursue both fields was when I did my accounting internship in Kenyatta National Hospital in July last year. I was able to observe first hand how financial decisions directly impact patient care from budgeting for essential medical supplies to optimization of hospital resources while still being able to generate enough revenue to keep the hospital running. 

My research topic on Healthcare Financing in Kihara level 4 hospital in my 5th year opened my eyes to the impact of inadequate financing on provision of healthcare services in hospitals and how it affects the community at large. I came to the realization that Medicine alone is not enough; understanding the financial and business aspects of healthcare is just as critical. 

As I move forward, I am eager to complete my Medical school then complete my ACCA qualification and explore the inner workings of the financial systems of healthcare, consulting and financial decision making in emerging markets. I look forward to using this platform to help doctors seeking alternative career pathways and help them transition to non clinical areas. `,
  },
  'alex-mwangi': {
  name: 'Dr. Alex Mwangi',
  image: doctor3,
  transition: 'From Surgery to Data Science',
  fullStory: `After years in surgery, Alex transitioned into data science to work on public health AI models and now builds tools to improve diagnosis at scale.`,
},

};

export default function StoryDetail() {
  const { slug } = useParams();
  const story = storyData[slug];

  if (!story) return <div style={{ padding: '2rem' }}>Story not found.</div>;

  return (
    <div className="story-detail">
      <img src={story.image} alt={story.name} className="story-detail-img" />
      <h1>{story.name}</h1>
      <p className="transition">{story.transition}</p>
      <p className="story-full">{story.fullStory}</p>
    </div>
  );
}
