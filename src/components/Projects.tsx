import Image from 'next/image';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'The True Reach — Digital Marketing Agency Project',
    category: 'SEO, Paid Search & Analytics',
    description: 'Developed a digital marketing agency concept targeting language schools in the US market as part of my MSc program at TBS Education. Conducted keyword research and competitive analysis using SEO tools, developed SEO-optimized blog content for organic visibility. Built the agency website on HubSpot, configured a Google Ads search campaign, and integrated Google Analytics 4 for performance tracking and organic traffic reporting.',
    tags: ['SEO', 'Keyword Research', 'Google Ads', 'GA4', 'HubSpot', 'Content Optimization'],
    featured: true
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <div className={styles.header}>
        <span className={styles.label}>03.</span>
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
