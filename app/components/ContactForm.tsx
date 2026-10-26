'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import styles from '../styles/Page.module.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type Status =
  | { type: 'idle' | 'sending' }
  | { type: 'ok' | 'error'; text: string };

const empty: FormData = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(empty);
  const [status, setStatus] = useState<Status>({ type: 'idle' });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: 'sending' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data: { ok?: boolean; error?: string } = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setForm(empty);
      setStatus({ type: 'ok', text: 'Message sent. I’ll reply by email soon.' });
    } catch (err) {
      const text = err instanceof Error ? err.message : 'Something went wrong.';
      setStatus({ type: 'error', text });
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={form.name} onChange={onChange} required maxLength={100} autoComplete="name" />
      </div>
      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={onChange} required maxLength={150} autoComplete="email" />
      </div>
      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={form.message} onChange={onChange} required minLength={10} maxLength={2000} />
      </div>
      <button className={styles.button} type="submit" disabled={status.type === 'sending'}>
        {status.type === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      {status.type === 'ok' && <p className={`${styles.status} ${styles.ok}`} role="status">{status.text}</p>}
      {status.type === 'error' && <p className={`${styles.status} ${styles.err}`} role="alert">{status.text}</p>}
    </form>
  );
}
