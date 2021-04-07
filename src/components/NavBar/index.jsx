import { useState } from "react";
import { FaBook, FaArrowDown } from "react-icons/fa";
import Button from "../Button";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownsOpen, setDropdownsOpen] = useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-3 py-2 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-2xl leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap text-black"
              href="#pablo"
            >
              <span className="font-bold">Cipi</span>
              {" "}
              Control Panel
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
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:items-center">
              <li className="nav-item">
                <a
                  className="lg:px-3 py-2 flex items-center text-1xl font-medium leading-snug text-gray hover:opacity-75"
                  href="/"
                >
                  <span className="ml-2">Features</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="lg:px-3 py-2 flex items-center text-1xl font-medium leading-snug text-gray hover:opacity-75"
                  href="#card"
                >
                  <span className="ml-2">How does it Work</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="lg:px-3 py-2 flex items-center text-1xl font-medium leading-snug text-gray hover:opacity-75"
                  href="#sign"
                >
                  <span className="ml-2">The project</span>
                </a>
              </li>
              <li className="nav-item relative inline-block text-left">
                <a
                  className="lg:px-3 py-2 flex items-center text-1xl font-medium leading-snug text-gray hover:opacity-75"
                  href="#form"
                >
                  <Button icon={<FaBook />} text="Documentation" />
                </a>
              </li>
              <li className="nav-item">
                <div>
                  <Button click={() => setDropdownsOpen(!dropdownsOpen)} text="Language" icon={<FaArrowDown />} />
                </div>

                <div className={`${dropdownsOpen ? "flex" : "hidden"} origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <div className="py-1" role="none">
                    <a href="#asd" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Account settings</a>
                    <a href="#asd" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Support</a>
                    <a href="#asd" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">License</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
