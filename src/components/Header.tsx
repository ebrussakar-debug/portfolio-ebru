import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={`${styles.header} glass`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">Ebru Sakar</Link>
        </div>
        <nav className={styles.nav}>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#certifications">Certifications</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
