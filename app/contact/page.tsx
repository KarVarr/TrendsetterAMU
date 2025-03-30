import styles from './contact.module.css';
import { FaTelegramPlane, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function ContactsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Свяжитесь с нами</h1>

      <section className={styles.contacts}>
        <p>
          📞 <a href="tel:+37455123456">+374 (55) 123-456</a>
        </p>

        <div className={styles.social}>
          <a href="https://t.me/trendsetteramultibrand" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane />
          </a>
          <a href="https://www.instagram.com/trendsetter.a.multibrand/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </div>
      </section>

      <section className={styles.contactForm}>
        <h2>Форма обратной связи</h2>
        <form>
          <input type="text" placeholder="Ваше имя" required />
          <input type="email" placeholder="Ваш email" required />
          <textarea placeholder="Ваш вопрос или запрос" required></textarea>

          <div className={styles.privacy}>
            <input type="checkbox" id="privacy" required />
            <label htmlFor="privacy">
              Я согласен(а) с <a href="/privacy">политикой конфиденциальности</a>.
            </label>
          </div>

          <button type="submit">Отправить</button>
        </form>
      </section>
    </div>
  );
}

