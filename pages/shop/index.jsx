import Head from "next/head";
import styles from "../../styles/Shop.module.css";

export default function Shop() {
    return (
        <>
            <Head>
                <title>Shop</title>
                <link rel="icon" href="/fleyd-shop.png"/>
            </Head>

            <div className={styles.header}>
        <h1>Choose your subscription plan</h1>
        <p>Choose a plan to buy to codegere of Fleyd's features at best!.</p>
      </div>
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img src="/fleyd-premium1.jpg" alt="Product 1" />
        <div className={styles.content}>
        <h3>Premium 1</h3>
        <h5>2.99$</h5>
        <p>
            ✅  Autotraslate
            <br />
            ✅ Automoderation
            <br />
            ❌ Fleyd AI
            <br />
            ❌ Fleyd img AI
            <br />
        </p>
        </div>
        <button className={styles.buy}>Subscribe Now</button>
      </div>
      <div className={styles.card}>
        <img src="/fleyd-premium2.jpg" alt="Product 2" />
        <div className={styles.content}>
        <h3>Premium 2</h3>
        <h5>5.99$</h5>
        <p>
            ✅  Autotraslate
            <br />
            ✅ Automoderation
            <br />
            ✅ Fleyd AI
            <br />
            ❌ Fleyd img AI
            <br />
        </p>
        </div>
        <button className={styles.buy}>Subscribe Now</button>
      </div>
      <div className={styles.card}>
        <img src="/fleyd-premium3.jpg" alt="Product 3" />
        <div className={styles.content}>
        <h3>Premium 3</h3>
        <h5>9.99$</h5>
        <p>
            ✅  Autotraslate
            <br />
            ✅ Automoderation
            <br />
            ✅ Fleyd AI
            <br />
            ✅ Fleyd img AI
            <br />
        </p>
        </div>
        <button className={styles.buy}>Subscribe Now</button>
      </div>
    </div>
        </>
    )
}