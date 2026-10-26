import Image from 'next/image';
import styles from '../styles/Page.module.css';
import { site } from '../data/site';
import AboutImage from '../assets/user.png';
export default function AboutPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>About me</h1>
      <div className={styles.aboutGrid}>
        {/* Replace /public/profile.svg with your own photo, e.g. /profile.jpg */}
        <Image className={styles.photo} src={AboutImage} alt={`Portrait of ${site.name}`} width={400} height={400} priority />
        <div>
          <div className={styles.prose}>
            {site.about.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          {site.skills.map(({ group, items }) => (
            <div className={styles.skillGroup} key={group}>
              <h3>{group}</h3>
              <ul className={styles.chips}>
                {items.map((s) => <li className={styles.chip} key={s}>{s}</li>)}
              </ul>
            </div>
          ))}

          <div className={styles.skillGroup}>
            <h3>Interests</h3>
            <ul className={styles.chips}>
              {site.interests.map((s) => (
                <li className={`${styles.chip} ${styles.chipAlt}`} key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
