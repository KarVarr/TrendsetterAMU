import styles from './stores.module.css';

export default function StoresPage() {
  return (
    <div className={styles.container}>
      <h1>Наши магазин</h1>

      <section className={styles.storeInfo}>
        <h2>Адрес магазина</h2>
        <p><strong>г. Ереван, ТЦ Ташир Стрит, Северный проспект 6/2</strong></p>
        <p><strong>Дата открытия:</strong> Май 2025 года</p>

        <div className={styles.mapPlaceholder}>
          Здесь будет встроена карта Google Maps.
        </div>
      </section>

      <section className={styles.photoPlaceholder}>
        <h2>Фото магазина</h2>
        <div className={styles.photoBlock}>
          Здесь будет размещена фотография магазина после открытия.
        </div>
      </section>
    </div>
  );
}
