import { FaTerminal, FaBook } from "react-icons/fa";
import Typical from "react-typical";
import Button from "../components/Button";

const About = () => (
  <div className="lg:flex lg:justify-beetwen lg:container lg:mx-auto px-4 py-10 items-center">
    <div className="mb-5 lg:mb-0">
      <h1 className="text-5xl whitespace-pre-line text-black text-left font-bold mb-3">
        Install and manage
        {" "}
        your server like a pro
      </h1>
      <p className="text-lg whitespace-pre-line text-grayBlack mb-3">
        With Cipi you don’t need to be a Sys Admin to deploy and
        manage websites and PHP applications powered by cloud VPS.
        Cipi is an Open Source project and you can use it within
        {" "}
        <Typical
          className="text-blue font-bold"
          steps={["Amazon Web Service", 2000, "Digital Ocean", 1500, "Google Cloud Platform", 1000, "Vultr", 500]}
          loop={Infinity}
          wrapper="span"
        />
        .
      </p>
      <div className="flex">
        <Button text="Install" icon={<FaTerminal />} marginSize="2" />
        <Button text="Docs" icon={<FaBook />} backgroundColor="grayBlack" />
      </div>
    </div>
    <img src="promo-figure-alt.svg" width="550px" alt="PC" />
  </div>
);

export default About;
