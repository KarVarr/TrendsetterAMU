import Link from "next/link";
import styles from './TheHeader.module.css'
import Image from "next/image";

export const TheHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image src="/logoRed.png" alt="Logo" width={130} height={50}/>
            </div>
            <div className={styles.nav}>
            
                <div className={styles.menu}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contacts</Link>
                    <Link href="/stores">Stores</Link>
                    <Link href="/amu">AMU</Link>
                </div>
                <div className={styles.language}>
                    <div>|</div>
                    <div>🌐</div>
                    <Link href="/">LET'S TALK</Link>
                </div>
                
            </div>
        </header>
    )
}
