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
              Hi, I'm Ebru. My academic journey began in International Trade and Business, 
              which gave me a strong foundation in global markets and strategy. Over time, I realized 
              I wanted to understand not just what makes a business competitive, but how to actually connect 
              with consumers online—which led me to digital marketing.
            </p>
            <p>
              I'm currently pursuing my Master's in Digital Marketing and Analytics in Barcelona. 
              My coursework and hands-on projects are deeply focused on data-driven marketing, e-commerce, 
              and performance marketing. I love learning how to analyze user behavior, structure campaigns, 
              and turn complex analytics into clear, actionable insights.
            </p>
            <p>
              When I'm not running GA4 simulations or building out Google Ads plans, you can find me 
              exploring the Gothic Quarter, keeping up with the latest marketing trends, or 
              hunting down the best matcha latte in the city!
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
