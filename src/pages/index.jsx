import About from "../container/About";
import Features from "../container/Features";
import Process from "../container/Process";

const Home = () => (
  <main>
    <section>
      <About />
    </section>
    <section className="bg-grayWhite">
      <Features />
    </section>
    <section>
      <Process />
    </section>
  </main>
);

export default Home;
