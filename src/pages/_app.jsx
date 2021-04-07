/* eslint-disable react/prop-types */
import "../styles/globals.css";
import Head from "next/head";
import NavBar from "../components/NavBar";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Cipi - Control Panel</title>
    </Head>
    <NavBar />
    <Component {...pageProps} />
  </>
);

export default App;
