import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1>WHO WE ARE?</h1>
        <p className={styles.subtitle}>SIMPLICITY FOR PEOPLE WHO HAVE A LIFE</p>
      </section>

      <section className={styles.infoBlock}>
        <h2>OUR LOCATIONS</h2>
        <div className={styles.location}>
          <div className={styles.colorBlock1}>Offline Store<br/>TASHIR STREET MALL (coming soon)</div>
          <div className={styles.colorBlock2}>
            Online Store<br/>
            <a href="https://www.wildberries.ru/brands/h-and-m" target="_blank" rel="noopener noreferrer">Wildberries Store</a>
          </div>
        </div>
      </section>

      <section className={styles.aboutCompany}>
        <h2>ABOUT THE COMPANY</h2>
        <p>
          We are part of the <strong>Tashir Group of Companies</strong>, generating over <strong>$1 billion in revenue</strong>, 
          with extensive expertise in commercial real estate. We own the 4 largest shopping malls in Armenia.
        </p>

        <div className={styles.brandPortfolio}>
          <h3>Our Brand Portfolio</h3>
          <ul>
            <li><strong>H&M</strong> – A key brand in our portfolio</li>
            <li><strong>Marks & Spencer</strong> – Coming soon to our offerings</li>
          </ul>
        </div>
      </section>

      <section className={styles.retailChain}>
        <h2>Retail Chain Opening</h2>
        <p>
          Scheduled for 2025, our first store will open in <strong>April-May 2025</strong>, operating as a discounter offering high-quality clothing and footwear at affordable prices for the entire family.
        </p>
      </section>

      <section className={styles.ourBrand}>
        <h2>Launching Our Own Clothing Brand</h2>
        <p className={styles.brandTitle}>AMU</p>
        <p>
          AMU focuses on basic bestsellers inspired by brands like H&M, Uniqlo, Zara, and Lululemon.
          We deliver essential, stylish clothing combining uncompromising quality with streetwear trends.
        </p>
        <ul className={styles.products}>
          <li>T-shirts</li>
          <li>Sweatshirts</li>
          <li>Hoodies</li>
          <li>Joggers</li>
          <li>Jeans</li>
          <li>Underwear</li>
        </ul>
        <p>
          All items are offered in plain colors without additional prints and include comprehensive size charts covering plus sizes.
        </p>
      </section>

      <section className={styles.contact}>
        <h2>LETS WORK Together</h2>
        <p>Contact us to collaborate and grow together!</p>
      </section>
    </div>
  );
}
