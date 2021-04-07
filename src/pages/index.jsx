import About from "../container/About";
import Features from "../container/Features";
import GetCipi from "../container/GetCipi";
import Process from "../container/Process";
import Project from "../container/Project";

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
    <section className="bg-purple">
      <GetCipi />
    </section>
    <section>
      <Project />
    </section>
  </main>
);

export default Home;
