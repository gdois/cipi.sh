import {
  FaCloud, FaCode, FaCoffee, FaLock, FaMagic, FaPhp,
} from "react-icons/fa";
import Card from "../components/Card";

const Features = () => (
  <div className="lg:container lg:mx-auto px-4 py-10 items-center">
    <h3 className="text-3xl text-black text-center font-bold mb-2">Features</h3>
    <p className="text-center mb-5 text-gray text-lg">
      Cipi is a modern control panel for your cloud service
    </p>
    <div className="lg:grid lg:grid-cols-3">
      <Card
        icon={<FaMagic />}
        title="It's magic"
        text="Install and configure one or more servers with a click in few minutes."
      />
      <Card
        icon={<FaCloud />}
        title="Born for cloud"
        text="Cipi works on AWS, Digital Ocean, Google Cloud and other providers."
      />
      <Card
        icon={<FaCoffee />}
        title="Easy to use"
        text="Manage one or more servers as easily as having a coffee."
      />
      <Card
        icon={<FaPhp />}
        title="Friend of PHP"
        text="Cipi creates an amazing LEMP stack for your PHP projects."
      />
      <Card
        icon={<FaLock />}
        title="Secure & up to date"
        text="Cipi takes care of your server's security and updates."
      />
      <Card
        icon={<FaCode />}
        title="Ready to integration"
        text="Cipi comes with awesome APIs useful to integrate everywhere."
      />
    </div>
  </div>
);

export default Features;
