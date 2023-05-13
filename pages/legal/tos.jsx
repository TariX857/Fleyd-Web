import Head from 'next/head';
import NavBar from '../../components/legal/navbar';
import style from '../../components/layout';
import styles from '../../styles/tos.module.css';

export default function TermsOfService() {
  return (
    <>
      <Head>
          <title>Terms Of Service</title>
          <link rel="icon" href="https://i.ibb.co/1fZjRZC/Fleyd-arrotondato.png" />
      </Head>

        <NavBar />

        <div className={style.container}>
            <h1 className={styles.title}>Terms Of Service</h1>
            <h5 className={styles.subTitle}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alert-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 8v4"></path>
                <path d="M12 16h.01"></path>
            </svg>
                Read these terms of services carefully and using Fleyd tries not to break them
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

            
                <h1 className={styles.tos}>1. Acceptance of terms</h1>
                    <h1 className={styles.tos}>
                        By using the Fleyd Discord bot, you fully agree to abide by these terms and conditions.
                    </h1>
                
                <br />

                <h1 className={styles.stronger}>2. Description of the services offered</h1>
                <h1 className={styles.tos}>Fleyd is an all-in-one Discord bot that offers a variety of services, including gaming, server control, role management, and more.</h1>
                
                <br />

                <h1 className={styles.stronger}>3. Limitations of Liability</h1>
                <h1 className={styles.tos}>
                    Fleyd is not liable for any damages caused by the use of the service, including direct, indirect, incidental, special or consequential damages.
                </h1>
                
                <br />

                <h1 className={styles.stronger}>4. Proper Use of the Service</h1>
                <h1 className={styles.tos}>
                    You agree not to use Discord Fleyd bot for illegal or unethical activities, along with any activity that violates the rights of others.
                </h1>
                
                <br />

                <h1 className={styles.stronger}>5. Confidentiality of User Information</h1>
                <h1 className={styles.tos}>
                    Fleyd is committed to protecting the privacy of its users and not to disclose any personal or sensitive information.
                </h1>
                
                <br />

                <h1 className={styles.stronger}>6. Changes to these terms</h1>
                <h1 className={styles.tos}>
                    Fleyd reserves the right to change these terms and conditions at any time without notice.
                </h1>
                    <h1 className={styles.tos}>
                            It is your responsibility to periodically review the terms and conditions for any updates.
                    </h1>

                <br />

                <h1 className={styles.stronger}>7. General conditions</h1>
                <h1 className={styles.tos}>
                    Any dispute arising out of the use of the Discord Fleyd bot will be governed by applicable law.
                </h1>
                    <h1 className={styles.tos}>
                        You agree to abide by the exclusive jurisdiction of the competent courts for any dispute that may arise from your use of the Service.
                    </h1>
                <br />

            <br />
            <br />
            <br />
            <br />
            <div className={styles.buttonsContainer}>
            <button className={styles.legal}>
              <a href={'/legal'}>Legal Home</a>
            </button>
            <button className={styles.pp}>
              <a href={'/legal/pp'}>Privacy Policy</a>
            </button>
        </div>
    </div>
    
    </>
  )
}