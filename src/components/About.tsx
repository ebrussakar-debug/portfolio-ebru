import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container`}>
        <div className={styles.header}>
          <span className={styles.label}>01.</span>
          <h2 className="section-title">Background</h2>
          <div className={styles.headerLine}></div>
        </div>
        
        <div className={styles.contentCard}>
          <div className={styles.textContainer}>
            <p>
              Hi, I'm Ebru. My background is in International Trade and Business, which gave me a solid understanding of global markets and competitive strategy. Over time, I became more interested in how people actually discover brands and make decisions online — which led me to digital marketing.
            </p>
            <p>
              I'm currently pursuing my Master's in Digital Marketing and Analytics at TBS Education in Barcelona. My focus areas are SEO, paid search (Google Ads), and performance analytics. I'm also exploring GEO — Generative Engine Optimization — which looks at how brands can stay visible as AI-driven search experiences reshape the way people find information.
            </p>
            <p>
              When I'm not researching keywords or analyzing search data, you'll find me exploring Barcelona, keeping up with the latest in search and AI, or hunting down the best matcha latte in the city.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.imagePlaceholder}>
              <Image 
                src="/images/about-abstract.png" 
                alt="Abstract Digital Marketing Representation"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <div className={styles.imageBackdrop}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
