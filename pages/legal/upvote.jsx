import Head from "next/head";
import styles from '../../styles/upvote.module.css';

export default function UpVote() {
    return (
        <>
            <Head>
                <title>Upvote</title>
                <link rel="icon" href="https://i.ibb.co/1fZjRZC/Fleyd-arrotondato.png"/>
            </Head>

            <div className={styles.container}>
            <h1>Vote now!</h1>
            <p>
                Voted us now in the four available sites now!
                <br />
                Read the list and go to the corresponding site<br />to vote for us!
            </p>
      <ul className={styles.ul}>
        <li className={styles.li}>
            Discord Bot List
            <br />
        <button className={styles.vote}>
              <a href={'https://discord.ly/fleyd'}>Vote</a>
        </button>
            </li>
        <li className={styles.li}>
            Discord List
            <br />
        <button className={styles.vote}>
              <a href={'https://discordlist.gg/bot/1070342371415433327'}>Vote</a>
        </button>
            </li>
        <li className={styles.li}>
            Discord Bots
            <br />
        <button className={styles.vote}>
              <a href={'https://discord.bots.gg/bots/1070342371415433327'}>Vote</a>
        </button>
            </li>
      </ul>
    </div>
        </>
    )
}