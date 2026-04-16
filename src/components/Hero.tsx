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
            Where search meets <span className={styles.accentText}>strategy</span> — from SEO to the AI-powered future of discovery.
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

        {/* Right: Floating tags */}
        <div className={`${styles.visualComposition} animate-fade-in animate-delay-2`}>
          <div className={styles.compositionGlow}></div>

          {/* Tag 1: SEO */}
          <div className={`${styles.floatingTag} ${styles.tagSeo}`}>
            <div className={styles.tagIcon}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>SEO & Content Optimization</span>
          </div>

          {/* Tag 2: Google Ads */}
          <div className={`${styles.floatingTag} ${styles.tagAds}`}>
            <div className={styles.tagIcon}>
               <svg viewBox="0 0 24 24" fill="none">
                 <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                 <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                 <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
               </svg>
            </div>
            <span>Google Ads (Search & Display)</span>
          </div>

          {/* Tag 3: Analytics */}
          <div className={`${styles.floatingTag} ${styles.tagAnalytics}`}>
            <div className={styles.tagIcon}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>Analytics & Reporting</span>
          </div>

          {/* Tag 4: GEO */}
          <div className={`${styles.floatingTag} ${styles.tagGeo}`}>
            <div className={styles.tagIcon}>
               <svg viewBox="0 0 24 24" fill="none">
                 <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
            <span>GEO (Generative Engine Optimization)</span>
          </div>

        </div>
      </div>
    </section>
  );
}
