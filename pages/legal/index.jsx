import Head from 'next/head';
import NavBar from '../../components/legal/navbar';
import style from '../../components/layout';
import styles from '../../styles/legal.module.css';

export default function Legal() {
  return (
    <>
      <Head>
          <title>Legal</title>
          <link rel="icon" href="https://i.ibb.co/1fZjRZC/Fleyd-arrotondato.png" />
      </Head>

        <NavBar />

    <div className={style.container}>
            <h1 className={styles.title}>Legal Fleyd Page</h1>
            <h5 className={styles.subTitle}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alert-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 8v4"></path>
                <path d="M12 16h.01"></path>
            </svg>
                On this page you will find a lot of information that you will need to use our Bot Fleyd correctly! <br />
                Choose one of the situations and read the articles inside carefully.
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alert-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 8v4"></path>
                <path d="M12 16h.01"></path>
            </svg>
            </h5>

        <div className={styles.buttonsContainer}>
            <button className={styles.tos}>
              <a href={'/legal/tos'}>Terms of Service</a>
            </button>
            <button className={styles.pp}>
              <a href={'/legal/pp'}>Privacy Policy</a>
            </button>
        </div>
      </div>
    
    </>
  )
}