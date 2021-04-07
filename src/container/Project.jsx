import useTranslation from "next-translate/useTranslation";
import { FaFacebook, FaGithub, FaHeart } from "react-icons/fa";

const Project = () => {
  const { t } = useTranslation();

  return (
    <div className="lg:container lg:mx-auto px-4 py-10 items-center">
      <h3 className="text-3xl text-black text-center font-bold mb-2">
        {t("common:project.title")}
      </h3>
      <p className="flex justify-center items-center text-center mb-5 text-gray text-lg mb-5">
        {t("common:project.primary")}
        {" "}
        <FaHeart className="mx-2" />
        {" "}
        {t("common:project.secondary")}
      </p>
      <div className="lg:grid lg:grid-cols-3 gap-4">
        <div className="col-span-2">
          <h4 className="text-base font-bold text-grayBlack mb-2">
            {t("common:project.textLeft.title")}
          </h4>
          <p className="text-grayBlack">
            {t("common:project.textLeft.text")}
          </p>
        </div>
        <div>
          <h4 className="text-base font-bold text-grayBlack mb-2">
            {t("common:project.textRight.title")}
          </h4>
          <p className="text-grayBlack">
            {t("common:project.textRight.text")}
          </p>
        </div>
      </div>
      <hr className="mt-12 mb-5 text-gray opacity-40" />
      <div className="text-center">
        <span className="text-grayBlack">
          {t("common:project.footer.text")}
          {" "}
          <a className="text-blue hover:underline" href="https://github.com/andreapollastri/cipi/issues">issue.</a>
        </span>
        <ul className="flex justify-center mt-5">
          <li className="m-2 text-2xl text-purple rounded-full bg-grayWhite p-2"><a href="https://github.com/andreapollastri/cipi" aria-label="Github"><FaGithub /></a></li>
          <li className="m-2 text-2xl text-purple rounded-full bg-grayWhite p-2"><a href="https://www.facebook.com/cipipanel" aria-label="Facebook"><FaFacebook /></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Project;
