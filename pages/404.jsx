import Head from "next/head";

export default function Custom404() {
  return (
    <>
        <Head>
            <title>404</title>
            <link rel="icon" href="https://i.ibb.co/1fZjRZC/Fleyd-arrotondato.png" />
        </Head>
        
    <style jsx>{`
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #f2f2f2;
          }
          
          h1 {
            font-size: 4rem;
            margin-bottom: 1rem;
          }
          
          p {
            font-size: 1.5rem;
            margin-bottom: 2rem;
          }          
    `}</style>

    <div className="container">
      <h1>Oops! Page not found</h1>
      <p>The page you were looking for does not exist.</p>
    </div>

    </>
  );
}
