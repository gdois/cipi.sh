import { FaFacebook, FaGithub, FaHeart } from "react-icons/fa";

const Project = () => (
  <div className="lg:container lg:mx-auto px-4 py-10 items-center">
    <h3 className="text-3xl text-black text-center font-bold mb-2">
      The Project
    </h3>
    <p className="flex justify-center items-center text-center mb-5 text-gray text-lg mb-5">
      Made with
      {" "}
      <FaHeart className="mx-2" />
      {" "}
      for developers
    </p>
    <div className="lg:grid lg:grid-cols-3 gap-4">
      <div className="col-span-2">
        <h4 className="text-base font-bold text-grayBlack mb-2">
          About Cipi
        </h4>
        <p className="text-grayBlack">
          Cipi is a Laravel based cloud server control panel that supports Digital Ocean,
          AWS, Linode, Azure, Vultr, Google Cloud and other VPS. It comes with nginx, Mysql,
          multi PHP-FPM versions, multi-users, Supervisor, Composer, npm,
          free Let&apos;s Encrypt certificates, Git deployment, fail2ban, Redis,
          API and with a simple graphical interface useful to manage Laravel, Codeigniter,
          Symfony, WordPress or other PHP sites.
        </p>
      </div>
      <div>
        <h4 className="text-base font-bold text-grayBlack mb-2">
          Why use Cipi?
        </h4>
        <p className="text-grayBlack">
          Cipi is easy, stable, powerful and free
          for any personal and commercial use and it&apos;s a perfect
          alternative to Runcloud,
          Ploi.io, Serverpilot, Forge, Moss.sh and similar software...
        </p>
      </div>
    </div>
    <hr className="mt-12 mb-5 text-gray opacity-40" />
    <div className="text-center">
      <span className="text-grayBlack">
        Do you need support? Please open an
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

export default Project;
