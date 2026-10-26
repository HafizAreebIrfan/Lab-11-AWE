import { readFile } from 'fs/promises';
import path from 'path';
import styles from '../styles/Page.module.css';
import type { Project } from '../data/types';

// Server component: runs at build time and the page is statically generated
// (the App Router equivalent of getStaticProps).
// To use an external API instead: const res = await fetch('https://...'); return res.json()
async function getProjects(): Promise<Project[]> {
  'use cache';
  const file = path.join(process.cwd(), 'app', 'data', 'projects.json');
  return JSON.parse(await readFile(file, 'utf8')) as Project[];
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Projects</h1>
      <p className={styles.lead}>A few things I’ve built. Each one links to its source code.</p>
      <div className={styles.grid}>
        {projects.map((p) => (
          <article className={styles.card} key={p.id}>
            <h2>{p.title}</h2>
            <ul className={styles.tags}>
              {p.tags.map((t) => <li className={styles.tag} key={t}>{t}</li>)}
            </ul>
            <p>{p.description}</p>
            <div className={styles.links}>
              {p.github && <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>}
              {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live demo</a>}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
