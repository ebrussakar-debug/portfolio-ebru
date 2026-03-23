import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'Marketing & Performance',
    icon: '🎯',
    skills: [
      { name: 'SEO', desc: 'Basic understanding, keyword research, on-page concepts' },
      { name: 'Google Ads', desc: 'Search & Display fundamentals' },
      { name: 'Content Strategy', desc: 'Campaign thinking & content flow' },
      { name: 'E-commerce', desc: 'Platform fundamentals & conversion tracking' }
    ]
  },
  {
    title: 'Analytics & Data',
    icon: '📊',
    skills: [
      { name: 'Google Analytics 4', desc: 'Event tracking & basic analysis' },
      { name: 'Google Tag Manager', desc: 'Basic setup understanding' },
      { name: 'Looker Studio', desc: 'Dashboard creation & reporting' },
      { name: 'Data Visualization', desc: 'Clear reporting concepts' },
      { name: 'A/B Testing', desc: 'Fundamentals and basic experiment design' }
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: [
      { name: 'Google Ads', desc: '' },
      { name: 'Google Analytics', desc: '' },
      { name: 'Google Tag Manager', desc: '' },
      { name: 'Looker Studio', desc: '' },
      { name: 'Tableau / Power BI', desc: 'Basic' },
      { name: 'Microsoft Excel', desc: 'Data manipulation' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <div className={styles.header}>
        <span className={styles.label}>03.</span>
        <h2 className="section-title">Capabilities</h2>
      </div>
      
      <div className={styles.bentoGrid}>
        {skillCategories.map((category, index) => (
          <div key={index} className={styles.categoryCard}>
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
    </section>
  );
}
