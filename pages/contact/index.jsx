import Head from "next/head";
import styles from '../../styles/contact.module.css';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contacts</title>
                <link rel="icon" href="/Fleyd-arrotondato.png" />
            </Head>

            <div className={styles.container}>
            <h1>Contacts</h1>
      <ul className={styles.ul}>
        <li className={styles.li}>Email: fleydr@gmail.com</li>
        <li className={styles.li}>Instagram: @tarik_js_216</li>
      </ul>

        <button className={styles.back}>
              <a href={'/'}>Back</a>
        </button>
    </div>
                
        </>
    )
    
}