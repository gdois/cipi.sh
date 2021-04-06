import { useState } from "react";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-3 py-3 navbar-expand-lg bg-white shadow-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-primary"
              href="#pablo"
            >
              <img src="/" alt="Site" width="150px" />
            </a>
            <button
              className="text-primary cursor-pointer text-xl leading-none px-3 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
              aria-label="Abrir"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center${
              navbarOpen ? " flex" : " hidden"
            }`}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-1xl uppercase font-bold leading-snug text-primary hover:opacity-75"
                  href="/"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-primary opacity-75" />
                  <span className="ml-2">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-1xl uppercase font-bold leading-snug text-primary hover:opacity-75"
                  href="#card"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-primary opacity-75" />
                  <span className="ml-2">Nossos Serviços</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-1xl uppercase font-bold leading-snug text-primary hover:opacity-75"
                  href="#sign"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-primary opacity-75" />
                  <span className="ml-2">PLacas Mercosul</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-1xl uppercase font-bold leading-snug text-primary hover:opacity-75"
                  href="#form"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-primary opacity-75" />
                  <span className="ml-2">Contatos</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
