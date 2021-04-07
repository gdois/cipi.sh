import { FaTerminal, FaBook } from "react-icons/fa";
import Typical from "react-typical";
import useTranslation from "next-translate/useTranslation";
import Button from "../components/Button";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="lg:flex lg:justify-beetwen lg:container lg:mx-auto px-4 py-10 items-center">
      <div className="mb-5 lg:mb-0">
        <h1 className="text-5xl whitespace-pre-line text-black text-left font-bold mb-3">
          {t("common:about.title")}
        </h1>
        <p className="text-lg whitespace-pre-line text-grayBlack mb-3">
          {t("common:about.text")}
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
          <Button text={t("common:about.buttonInstall")} icon={<FaTerminal />} margin="mr-2" />
          <Button text={t("common:about.buttonDocs")} icon={<FaBook />} background="bg-grayBlack" />
        </div>
      </div>
      <img src="promo-figure-alt.svg" width="550px" alt="PC" />
    </div>
  );
};

export default About;
