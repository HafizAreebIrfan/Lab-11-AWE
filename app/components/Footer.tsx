'use client';

import styles from '../styles/Footer.module.css';
import { site } from '../data/site';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState<string>('');
  useEffect(() => setYear(String(new Date().getFullYear())), []);

  return (
    <footer className={styles.footer}>
      <p>
        © {year} {site.name}
        <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={`mailto:${site.email}`}>Email</a>
      </p>
    </footer>
  );
}
