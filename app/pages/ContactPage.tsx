import ContactForm from '../components/ContactForm';
import styles from '../styles/Page.module.css';

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Contact</h1>
      <p className={styles.lead}>Have a question or an opportunity? Send a message and I’ll reply by email.</p>
      <ContactForm />
    </div>
  );
}
