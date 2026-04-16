import styles from './Experience.module.css';

const experiences = [
  {
    title: 'Export & Business Operations Intern',
    company: 'Beta Optik — Istanbul',
    date: 'Jul 2024 – Aug 2024',
    description: 'Conducted market research to identify and qualify potential international B2B partners, building structured prospect lists by analyzing target markets and industry players. Supported lead generation efforts by delivering actionable contact lists to the export team. Gained exposure to sales data reporting processes, including dashboards tracking weekly, monthly, and annual revenue metrics.',
    tags: ['Market Research', 'Lead Generation', 'B2B', 'Data Reporting']
  },
  {
    title: 'Marketing Intern',
    company: 'Besa Home Collection — Istanbul',
    date: 'Jul 2023 – Sep 2023',
    description: 'Supported the planning and execution of weekly promotional campaigns (e.g. multi-buy discounts), which contributed to measurable increases in monthly revenue. Engaged directly with customers on the sales floor, developing an understanding of consumer purchasing behavior in a B2C retail environment. Observed e-commerce operations including product listing and order fulfillment workflows.',
    tags: ['Campaigns', 'B2C Retail', 'E-commerce', 'Consumer Behavior']
  },
  {
    title: 'Business Operations Intern',
    company: 'Famipa Foreign Trade — Istanbul',
    date: 'Jul 2022 – Sep 2022',
    description: 'Managed English-language communication with international B2B clients, supporting the export team in daily operations. Assisted in order tracking and data entry processes using ERP systems.',
    tags: ['B2B Communication', 'Export Operations', 'ERP Systems']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section container">
      <div className={styles.header}>
        <span className={styles.label}>02.</span>
        <div className={styles.headerTitles}>
          <h2 className="section-title">Experience</h2>
          <span className={styles.subtitle}>Professional Background</span>
        </div>
      </div>
      
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div className={styles.titleGroup}>
                    <h3 className={styles.title}>{exp.title}</h3>
                    <span className={styles.company}>{exp.company}</span>
                  </div>
                  <span className={styles.date}>{exp.date}</span>
                </div>
                <p className={styles.description}>{exp.description}</p>
                <ul className={styles.tags}>
                  {exp.tags.map((tag, tagIndex) => (
                    <li key={tagIndex} className={styles.tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
