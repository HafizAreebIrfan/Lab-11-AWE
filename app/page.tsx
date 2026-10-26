import Link from 'next/link';
import styles from './styles/Home.module.css';
import { site } from './data/site';

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.hello}>Hi, I’m</p>
        <h1 className={styles.name}>{site.name}</h1>
        <p className={styles.role}>{site.role}</p>
        <p className={styles.intro}>{site.intro}</p>
        <div className={styles.actions}>
          <Link href="/projects" className={styles.primary}>See my projects</Link>
          <Link href="/contact" className={styles.secondary}>Get in touch</Link>
        </div>
      </div>
    </section>
  );
}
