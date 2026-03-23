import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroBackground}></div>
      <div className={`container ${styles.hero}`}>
        <div className={`${styles.content} animate-fade-in`}>
          <div className={`${styles.badge} animate-delay-1`}>
            <span className={styles.pulse}></span>
            Available for internships & junior roles
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
        
        <div className={`${styles.visualComposition} animate-fade-in animate-delay-2`}>
          {/* Central soft glow */}
          <div className={styles.compositionGlow}></div>
          
          {/* Card 1: Data Analysis */}
          <div className={`${styles.floatingCard} ${styles.cardData}`}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          
          {/* Card 2: SEO */}
          <div className={`${styles.floatingCard} ${styles.cardSeo}`}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

          {/* Card 3: E-commerce */}
          <div className={`${styles.floatingCard} ${styles.cardEcommerce}`}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20Z" fill="currentColor"/>
                <path d="M20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" fill="currentColor"/>
                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.cardText}>
              <span className={styles.cardTitle}>E-commerce</span>
              <div className={styles.conversionRate}>
                <span className={styles.convArrow}>↑</span> 4.2%
              </div>
            </div>
          </div>

          {/* Card 4: PPC */}
          <div className={`${styles.floatingCard} ${styles.cardPpc}`}>
            <div className={styles.cardIcon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.cardText}>
              <span className={styles.cardTitle}>Performance</span>
              <div className={styles.roasMetric}>
                <span>ROAS</span>
                <strong>3.8x</strong>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
