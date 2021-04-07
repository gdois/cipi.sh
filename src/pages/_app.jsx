/* eslint-disable react/prop-types */
import "../styles/globals.css";
import NavBar from "../components/NavBar";

const App = ({ Component, pageProps }) => (
  <main>
    <NavBar />
    <Component {...pageProps} />
  </main>
);

export default App;
