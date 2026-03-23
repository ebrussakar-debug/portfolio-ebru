import Image from 'next/image';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'SEO & Performance Setup for a Digital Marketing Agency (Case Study)',
    category: 'SEO & Performance',
    description: 'Conducted a basic SEO audit, structured a simple Google Ads campaign plan, and set up a GA4 tracking simulation to analyze CTR, conversion rates, and ROAS as part of a hands-on learning project.',
    tags: ['SEO Audit', 'Google Ads', 'GA4 Simulation'],
    featured: true
  },
  {
    title: 'E-commerce Analytics Basics',
    category: 'Coursework',
    description: 'Configured a foundational GA4 setup for a mock e-commerce store during my Master\'s program. Built simple funnels to track add-to-cart clicks and checkout drop-offs.',
    tags: ['Analytics', 'Data Tracking'],
    featured: false
  },
  {
    title: 'B2B Social Media Content Plan',
    category: 'Marketing Strategy',
    description: 'Developed a mock B2B content calendar and analyzed competitor social strategies to propose a structured LinkedIn-focused approach.',
    tags: ['Content Strategy', 'Competitor Analysis'],
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <div className={styles.header}>
        <span className={styles.label}>02.</span>
        <h2 className="section-title">Selected Works</h2>
      </div>
      
      <div className={styles.bentoGrid}>
        {projects.map((project, index) => (
          <div key={index} className={`${styles.card} ${project.featured ? styles.featuredCard : ''}`}>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.title}>{project.title}</h3>
              </div>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.tags}>
                {project.tags.map((tag, tagIndex) => (
                  <li key={tagIndex} className={styles.tag}>{tag}</li>
                ))}
              </ul>
            </div>
            {project.featured && (
              <div className={styles.cardVisual}>
                <div className={styles.visualPlaceholder}>
                  <Image 
                    src="/images/project-abstract.png"
                    alt="Abstract Concept of Data Flow"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
