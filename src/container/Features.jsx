import useTranslation from "next-translate/useTranslation";
import {
  FaCloud, FaCode, FaCoffee, FaLock, FaMagic, FaPhp,
} from "react-icons/fa";
import Card from "../components/Card";

const Features = () => {
  const { t } = useTranslation();

  const icons = [
    {
      icon: <FaMagic />,
    },
    {
      icon: <FaCloud />,
    },
    {
      icon: <FaCoffee />,
    },
    {
      icon: <FaPhp />,
    },
    {
      icon: <FaLock />,
    },
    {
      icon: <FaCode />,
    },
  ];

  return (
    <div className="lg:container lg:mx-auto px-4 py-10 items-center">
      <h3 className="text-3xl text-black text-center font-bold mb-2">{t("common:features.title")}</h3>
      <p className="text-center mb-5 text-gray text-lg">
        {t("common:features.text")}
      </p>
      <div className="lg:grid lg:grid-cols-3">
        {/* change this */}
        <Card
          icon={icons[0].icon}
          title={t("common:features.cards.one.title")}
          text={t("common:features.cards.one.text")}
        />
        <Card
          icon={icons[1].icon}
          title={t("common:features.cards.two.title")}
          text={t("common:features.cards.two.text")}
        />
        <Card
          icon={icons[2].icon}
          title={t("common:features.cards.three.title")}
          text={t("common:features.cards.three.text")}
        />
        <Card
          icon={icons[3].icon}
          title={t("common:features.cards.four.title")}
          text={t("common:features.cards.four.text")}
        />
        <Card
          icon={icons[4].icon}
          title={t("common:features.cards.five.title")}
          text={t("common:features.cards.five.text")}
        />
        <Card
          icon={icons[5].icon}
          title={t("common:features.cards.six.title")}
          text={t("common:features.cards.six.text")}
        />
      </div>
    </div>
  );
};

export default Features;
