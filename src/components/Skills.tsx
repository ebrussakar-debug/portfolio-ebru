import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'SEO & Search',
    icon: '🔍',
    featured: true,
    skills: [
      { name: 'SEO', desc: 'Keyword research, on-page optimization, content strategy' },
      { name: 'Google Search Console', desc: 'Performance monitoring, indexing' },
      { name: 'Screaming Frog', desc: 'Technical SEO audits' },
      { name: 'GEO (Generative Engine Optimization)', desc: 'Emerging field, AI-driven search visibility' },
      { name: 'Content Optimization', desc: 'SEO-focused content creation' }
    ]
  },
  {
    title: 'Paid Media & Performance',
    icon: '🎯',
    featured: false,
    skills: [
      { name: 'Google Ads', desc: 'Search & Display campaign setup' },
      { name: 'Meta Ads', desc: 'Basic campaign understanding' },
      { name: 'Performance Tracking', desc: 'CPA, CTR, ROAS fundamentals' },
      { name: 'A/B Testing', desc: 'Fundamentals and basic experiment design' }
    ]
  },
  {
    title: 'Analytics & Tools',
    icon: '📊',
    featured: false,
    skills: [
      { name: 'Google Analytics 4', desc: 'Event tracking, reporting, traffic analysis' },
      { name: 'Google Tag Manager', desc: 'Basic setup and configuration' },
      { name: 'Looker Studio', desc: 'Dashboard creation & reporting' },
      { name: 'HubSpot', desc: 'Website building, CRM basics' },
      { name: 'Tableau / Power BI', desc: 'Basic data visualization' },
      { name: 'Microsoft Excel', desc: 'Data manipulation' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <div className={styles.header}>
        <span className={styles.label}>04.</span>
        <h2 className="section-title">Capabilities</h2>
      </div>
      
      <div className={styles.bentoGrid}>
        {skillCategories.map((category, index) => (
          <div key={index} className={`${styles.categoryCard} ${category.featured ? styles.featuredCard : ''}`}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}>{category.icon}</span>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
            </div>
            
            <div className={styles.skillList}>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className={styles.skillItem}>
                  <div className={styles.skillBullet}></div>
                  <div className={styles.skillTextGroup}>
                    <span className={styles.skillName}>{skill.name}</span>
                    {skill.desc && <span className={styles.skillDesc}>{skill.desc}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* GEO Callout */}
      <div className={styles.geoCallout}>
        <div className={styles.geoIcon}>
          <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className={styles.geoContent}>
          <h4 className={styles.geoTitle}>What is GEO?</h4>
          <p className={styles.geoText}>
            Generative Engine Optimization (GEO) is an emerging discipline focused on optimizing content for AI-powered search experiences like Google AI Overviews, ChatGPT, and Perplexity. As search evolves beyond traditional links, GEO ensures brands remain visible in AI-generated answers. I'm actively learning and exploring this space as part of my focus on the future of search.
          </p>
        </div>
      </div>
    </section>
  );
}
