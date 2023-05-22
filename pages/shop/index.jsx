import Head from "next/head";
import styles from "../../styles/Shop.module.css";
const paypalURL1 = `https://www.paypal.com/donate?amount=2.99&currency=EUR&business=taeddaro@gmail.com`;
const paypalURL2 = `https://www.paypal.com/donate?amount=5.99&currency=EUR&business=taeddaro@gmail.com`;
const paypalURL3 = `https://www.paypal.com/donate?amount=9.99&currency=EUR&business=taeddaro@gmail.com`;


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
        <button className={styles.featurD}><a href="/shop/details">Function details</a></button>
      </div>
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img src="/fleyd-premium1.jpg" alt="Product 1" />
        <div className={styles.content}>
        <h3>Premium 1</h3>
        <h5>2.99€</h5>
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
        <button className={styles.buy}><a href={paypalURL1}>Subscribe Now!</a></button>
      </div>
      <div className={styles.card}>
        <img src="/fleyd-premium2.jpg" alt="Product 2" />
        <div className={styles.content}>
        <h3>Premium 2</h3>
        <h5>5.99€</h5>
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
        <button className={styles.buy}><a href={paypalURL2}>Subscribe Now!</a></button>
      </div>
      <div className={styles.card}>
        <img src="/fleyd-premium3.jpg" alt="Product 3" />
        <div className={styles.content}>
        <h3>Premium 3</h3>
        <h5>9.99€</h5>
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
        <button className={styles.buy}><a href={paypalURL3}>Subscribe Now!</a></button>
      </div>
    </div>
        </>
    )
}