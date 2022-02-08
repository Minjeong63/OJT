import Main from "../components/Main";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Main />
        <br></br>
        <Component {...pageProps} />
        <Footer />
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
