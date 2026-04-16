import styles from './Certifications.module.css';

const certifications = [
  {
    name: 'Google Analytics GA4 Certification',
    issuer: 'Google',
    icon: '📊',
    color: 'google',
  },
  {
    name: 'Google Ads Search Certification',
    issuer: 'Google',
    icon: '🔍',
    color: 'google',
  },
  {
    name: 'Google Ads Display Certification',
    issuer: 'Google',
    icon: '🖼️',
    color: 'google',
  },
  {
    name: 'Content Marketing Certification',
    issuer: 'HubSpot',
    icon: '✍️',
    color: 'hubspot',
  },
  {
    name: 'Inbound Marketing Certification',
    issuer: 'HubSpot',
    icon: '🎯',
    color: 'hubspot',
  },
  {
    name: 'HubSpot Marketing Hub Software Certification',
    issuer: 'HubSpot',
    icon: '⚙️',
    color: 'hubspot',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className={`section container ${styles.section}`}>
      <div className={styles.header}>
        <span className={styles.label}>05.</span>
        <h2 className="section-title">Licences & Certifications</h2>
      </div>

      <div className={styles.grid}>
        {certifications.map((cert, index) => (
          <div key={index} className={`${styles.card} ${styles[cert.color]}`}>
            <div className={styles.iconWrap}>
              <span className={styles.icon}>{cert.icon}</span>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.certName}>{cert.name}</p>
              <span className={`${styles.issuerBadge} ${styles[`badge_${cert.color}`]}`}>
                {cert.issuer}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
