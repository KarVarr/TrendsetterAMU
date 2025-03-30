import styles from './page.module.css';

export default function TheHome() {
  return (
    <div className={styles.container}>
      <h1>Trendsetter A multibrand</h1>
      
      <section className={styles.section}>
        <h2>Наша история</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat orci eu sem feugiat, ut egestas orci sollicitudin. Duis condimentum purus nec tellus bibendum, vitae porta magna faucibus. Suspendisse potenti.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Как все начиналось</h2>
        <p>
          Donec commodo, nunc sit amet fermentum bibendum, tortor augue vehicula arcu, vitae dictum nibh libero sed dolor. Sed sit amet sapien ut est vehicula tristique vitae quis arcu.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Наши достижения</h2>
        <p>
          Maecenas ultrices, sapien nec tincidunt placerat, ex dui facilisis elit, ac pretium justo urna id augue. Vivamus at neque arcu. Integer ut volutpat lacus, vel efficitur neque.
        </p>
      </section>
      
      <section className={styles.section}>
        <h2>Наши ценности</h2>
        <p>
          Quisque consectetur ullamcorper suscipit. Phasellus at dui eget magna ullamcorper volutpat at id metus. Nullam aliquam lectus nec risus interdum, a vulputate magna vestibulum.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Планы на будущее</h2>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut id libero sit amet risus tincidunt molestie. Sed vulputate vitae erat ac interdum.
        </p>
      </section>
    </div>
  );
}
