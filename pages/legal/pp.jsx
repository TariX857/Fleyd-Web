import Head from 'next/head';
import NavBar from '../../components/legal/navbar';
import style from '../../components/layout';
import styles from '../../styles/pp.module.css';

export default function TermsOfService() {
  return (
    <>
      <Head>
          <title>Privacy Policy</title>
          <link rel="icon" href="https://i.ibb.co/1fZjRZC/Fleyd-arrotondato.png" />
      </Head>

        <NavBar />

        <div className={style.container}>
            <h1 className={styles.title}>Privacy Policy</h1>
            <h5 className={styles.subTitle}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alert-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 8v4"></path>
                <path d="M12 16h.01"></path>
            </svg>
                Read these pricacy policy carefully and using Fleyd tries not to break them
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alert-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 8v4"></path>
                <path d="M12 16h.01"></path>
            </svg>
            <br />
            Scroll and read!
            </h5>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            
<h1 className={styles.txt}>At Fleyd Bot, we respect the privacy of our users and any personal information collected is used only for the purposes outlined in this policy.
<br />
By using Fleyd Bot, you agree to this policy.</h1>
<br />
<h1 className={styles.txt} stronger>What Information is Collected?</h1>

<h1 className={styles.txt}>When a user interacts with Fleyd Bot, we may collect the following information:</h1>
<h1 className={styles.txt}>
- Discord User ID and Username
<br />
- Server and Channel IDs
<br />
- Messages sent and received in the server
</h1>

<h1 className={styles.txt}>This information is collected solely for the purpose of providing the services of the bot and improving our services.</h1>
<br />

<h1 className={styles.stronger}>How is Information Used?</h1>
<h1 className={styles.txt}>The information collected is used only for the following purposes:</h1>
<h1 className={styles.txt}>
1. To provide the services offered by the bot.
<br />
2. To improve our services and develop new features for the bot.
<br />
3. To respond to or fulfill any inquiries from users.
<br />
4. To ensure compliance with applicable laws and regulations.
</h1>
<br />

<h1 className={styles.stronger}>Sharing of Information</h1>

<h1 className={styles.txt}>
    We do not share any personal information collected from users of Fleyd Bot with third parties, except as required by law.
</h1>
<br />

<h1 className={styles.stronger}>Security of Information</h1>

<h1 className={styles.txt}>
    We take reasonable steps to protect the information we collect from unauthorized access, disclosure, alteration, or destruction.
    <br />
    However, we cannot guarantee the security of any information transmitted to or from the bot.
</h1>
<br />

<h1 className={styles.stronger}>
Changes to This Policy
</h1>
<h1 className={styles.txt}>
    We may update this policy from time to time. Users will be notified of any significant changes to the policy by a notice in the bot's Discord server.
</h1>
<br />

<h1 className={styles.stronger}>
    If you have any questions or concerns about this policy, please contact us.
</h1>

            <br />
            <br />
            <br />
            <br />
            <div className={styles.buttonsContainer}>
            <button className={styles.legal}>
              <a href={'/legal'}>Legal Home</a>
            </button>
            <button className={styles.pp}>
              <a href={'/legal/tos'}>Terms Of Service</a>
            </button>
        </div>
    </div>
    
    </>
  )
}