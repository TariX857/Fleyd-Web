import Head from 'next/head';
import styles from '../components/layout.module.css';
import Footer from '../components/footer';
import NavBar from '../components/home/navbar';
import syles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
          <title>Fleyd Bot</title>
          <link rel="icon" href="https://i.ibb.co/1fZjRZC/Fleyd-arrotondato.png" />
      </Head>

        <NavBar />

    <div className={styles.container}>
      <h1 className={syles.title}>Fleyd Bot</h1>
      <h3 className={syles.subTitle}>
        Security, AI, Moderation, Funning these are some of the many functions in a single application, Fleyd!
      </h3>

      <div className={syles.buttonsContainer}>
            <button className={syles.invite}>
              <a href={'https://discord.com/api/oauth2/authorize?client_id=1070342371415433327&permissions=1249772039527&scope=bot%20applications.commands'}>Invite</a>
            </button>
            <button className={syles.support}>
              <a href={'mailto:fleydr@gmail.com'}>Support</a>
            </button>
        </div>
      </div>

      <Footer />
    </>
  )
}