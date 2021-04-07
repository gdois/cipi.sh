import useTranslation from "next-translate/useTranslation";

const GetCipi = () => {
  const { t } = useTranslation();

  return (

    <div className="lg:container lg:mx-auto px-4 py-10">
      <div className="m-auto text-center">
        <img className="mx-auto" src="programmer-male.svg" width="400px" alt="Programmer man" />
        <h3 className="text-3xl text-white text-center font-semibold mb-2">{t("common:get.title")}</h3>
        <span className="text-lg text-white">
          {t("common:get.get")}
          {" "}
          <code className="p-1 rounded bg-grayWhite text-black">{t("common:get.code")}</code>
          {" "}
          {t("common:get.text")}
        </span>
      </div>
    </div>
  );
};

export default GetCipi;
