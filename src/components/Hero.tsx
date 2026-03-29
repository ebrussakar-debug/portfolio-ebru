import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroBackground}>
        {/* Floating particles */}
        <div className={`${styles.particle} ${styles.p1}`} />
        <div className={`${styles.particle} ${styles.p2}`} />
        <div className={`${styles.particle} ${styles.p3}`} />
        <div className={`${styles.particle} ${styles.p4}`} />
        <div className={`${styles.particle} ${styles.p5}`} />
        <div className={`${styles.particle} ${styles.p6}`} />
      </div>

      <div className={`container ${styles.hero}`}>
        {/* Left: Content */}
        <div className={`${styles.content} animate-fade-in`}>
          <div className={`${styles.badge} animate-delay-1`}>
            <span className={styles.pulse}></span>
            Available for internships &amp; junior roles
          </div>
          <h1 className={`${styles.title} animate-delay-2`}>
            Ebru Sakar
          </h1>
          <h2 className={`${styles.subtitle} animate-delay-2`}>
            Connecting the dots between <span className={styles.accentText}>data</span> and human behavior.
          </h2>
          <p className={`${styles.description} animate-delay-3`}>
            I'm currently completing my Master's in Digital Marketing and Analytics in Barcelona.
            I'm passionate about understanding how people interact online and translating those
            insights into practical marketing strategies.
          </p>
          <div className={`${styles.actions} animate-delay-3`}>
            <a href="#projects" className="btn btn-primary">Discover Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>

        {/* Right: Floating metric cards */}
        <div className={`${styles.visualComposition} animate-fade-in animate-delay-2`}>
          <div className={styles.compositionGlow}></div>

          {/* Card 1 – Data Analysis */}
          <div className={`${styles.floatingCard} ${styles.cardData}`}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 16L9 11L14 16L20 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 10V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.cardText}>
              <span className={styles.cardTitle}>Data Analysis</span>
              <div className={styles.miniChart}>
                <div className={styles.bar} style={{ height: '40%' }}></div>
                <div className={styles.bar} style={{ height: '70%' }}></div>
                <div className={styles.bar} style={{ height: '50%' }}></div>
                <div className={styles.bar} style={{ height: '90%' }}></div>
                <div className={styles.bar} style={{ height: '60%' }}></div>
              </div>
            </div>
          </div>

          {/* Card 2 – Google Ads */}
          <div className={`${styles.floatingCard} ${styles.cardGoogleAds}`}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.cardText}>
              <span className={styles.cardTitle}>Google Ads</span>
              <span className={styles.adsBadge}>Search · Display</span>
            </div>
          </div>

          {/* Card 3 – SEO */}
          <div className={`${styles.floatingCard} ${styles.cardSeo}`}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2"/>
                <path d="M20 20L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className={styles.cardText}>
              <span className={styles.cardTitle}>SEO Strategy</span>
              <div className={styles.seoScore}>
                <div className={styles.scoreCircle}>98</div>
                <span className={styles.scoreLabel}>Health Score</span>
              </div>
            </div>
          </div>

          {/* Card 4 – Campaign ROI */}
          <div className={`${styles.floatingCard} ${styles.cardRoi}`}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.cardText}>
              <span className={styles.cardTitle}>Campaign ROI</span>
              <div className={styles.metricRow}>
                <span className={styles.metricLabel}>ROAS</span>
                <span className={styles.metricValue}>3.8x</span>
                <span className={styles.trendUp}>↑ 12%</span>
              </div>
            </div>
          </div>

          {/* Card 5 – Analytics */}
          <div className={`${styles.floatingCard} ${styles.cardAnalytics}`}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className={styles.cardText}>
              <span className={styles.cardTitle}>Analytics (GA4)</span>
              <div className={styles.analyticsBar}>
                <div className={styles.analyticsBarFill}></div>
              </div>
              <span className={styles.metricLabel}>72% goal completion</span>
            </div>
          </div>

          {/* Card 6 – Performance */}
          <div className={`${styles.floatingCard} ${styles.cardPerformance}`}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.cardText}>
              <span className={styles.cardTitle}>Performance</span>
              <div className={styles.metricRow}>
                <span className={styles.metricLabel}>CTR</span>
                <span className={styles.metricValue}>4.2%</span>
                <span className={styles.trendUp}>↑</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
