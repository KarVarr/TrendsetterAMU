import styles from './page.module.css';
import Image from "next/image";

export default function TheHome() {
  return (
    <section className={styles.hero}>

      <div className={styles.container}>

        <div className={styles.titleBlock}>

          <div className={styles.smileWrapper}>
              <Image src="/smile.png" alt="Logo" width={100} height={100}></Image>
            </div>

          <h1 className={styles.title}>
            <span>TRENDSETTER</span>
            <span className={styles.amuLetters}>А́</span>
            <div className={styles.miltibrand}>
              <span className={styles.amuLetters}>MU</span>
              <span>LTIBRAND</span>
            </div>
            
          </h1>

          <p className={styles.description}>
                  WE ARE A FULL-SERVICE CREATIVE STUDIO CREATING BEAUTIFUL DIGITAL EXPERIENCES AND PRODUCTS. OUR MISSION IS TO MAKE WORK PROCESS MEANINGFUL.
                </p>
        </div>

        <p className={styles.subtext}>
            WE WON'T REST UNTIL WE DRESS EVERYONE
        </p>

      </div>

    </section>
  );
}
