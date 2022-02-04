import Home from "../components/home";
import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Home />
        <br></br>
        <Component {...pageProps} />
      </Layout>
      <style jsx>
        {`
          div {
            text-align: center;
            font-size: xx-large;
          }
        `}
      </style>
    </div>
  );
}

export default MyApp;
