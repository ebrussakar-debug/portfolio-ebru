import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.contentBox}>
          <div className={styles.badge}>06. Next Steps</div>
          <h2 className={styles.title}>Let's Connect</h2>
          <p className={styles.description}>
            I'm currently looking for an internship in SEO, paid search, or digital marketing analytics. 
            Whether you want to chat about a potential opportunity or discuss the future of search, 
            I'd love to hear from you.
          </p>
          
          <div className={styles.buttonGroup}>
            <a href="mailto:ebrussakar@gmail.com" className="btn btn-primary">
              Send an Email
            </a>
            <a href="https://www.linkedin.com/in/ebrussakar" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>Ebru Sakar</div>
            <p className={styles.footerCopyright}>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
