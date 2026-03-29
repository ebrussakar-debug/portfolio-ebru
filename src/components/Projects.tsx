import Image from 'next/image';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'The True Reach — Digital Marketing Agency Project',
    category: 'SEO & Performance Marketing',
    description: 'Developed a digital marketing agency concept targeting language schools in the US market as part of my MSc program at TBS Education. Built a website using HubSpot, conducted keyword research using SEO tools, created SEO-optimized blog content, configured a Google Ads search campaign, and integrated Google Analytics 4 for performance tracking.',
    tags: ['HubSpot', 'Google Ads', 'GA4', 'SEO', 'Keyword Research'],
    featured: true
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
