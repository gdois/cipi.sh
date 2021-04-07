import useTranslation from "next-translate/useTranslation";

const Process = () => {
  const { t } = useTranslation();

  return (
    <div className="lg:container lg:mx-auto px-4 py-10 items-center">
      <h3 className="text-3xl text-black text-center font-bold mb-2">
        {t("common:process.title")}
      </h3>
      <p className="text-center mb-5 text-gray text-lg">
        {t("common:process.text")}
      </p>
      <div className="lg:grid lg:grid-cols-3">
        <div className="m-5">
          <img className="mx-auto" src="monitor-loading-progress.svg" width="200px" alt="Computer" />
          <div className="hidden lg:block lg:relative -top-1/4 -right-3/6">
            <img src="line-with-arrow.svg" alt="Arrow" />
          </div>
          <h5 className="flex text-xl items-center font-bold mb-2">
            <span className="flex justify-center px-5 py-2 mr-2 py-0 bg-grayWhite font-bold text-purple text-center rounded-full">1</span>
            {t("common:process.one.title")}
          </h5>
          <p className="text-grayBlack font-medium">
            {t("common:process.one.primary")}
            <a href="https://cipi.sh/#" className="text-blue hover:underline">{t("common:process.one.code")}</a>
            {t("common:process.one.secondary")}
          </p>
        </div>
        <div className="m-5">
          <img className="mx-auto" src="monitor-loading-progress.svg" width="200px" alt="Computer" />
          <div className="hidden lg:block relative -top-1/4 -right-3/6">
            <img src="line-with-arrow.svg" alt="Arrow" />
          </div>
          <h5 className="flex text-xl items-center font-bold mb-2">
            <span className="flex justify-center px-5 py-2 mr-2 py-0 bg-grayWhite font-bold text-purple text-center rounded-full">2</span>
            {t("common:process.two.title")}
          </h5>
          <p className="text-grayBlack font-medium">
            {t("common:process.two.text")}
          </p>
        </div>
        <div className="m-5">
          <img className="mx-auto" src="monitor-loading-progress.svg" width="200px" alt="Computer" />
          <div className="mt-3" />
          <h5 className="flex text-xl items-center font-bold mb-2">
            <span className="flex justify-center px-5 py-2 mr-2 py-0 bg-grayWhite font-bold text-purple text-center rounded-full">3</span>
            {t("common:process.three.title")}
          </h5>
          <p className="text-grayBlack font-medium">
            {t("common:process.three.text")}
          </p>
        </div>
      </div>
    </div>

  );
};

export default Process;
