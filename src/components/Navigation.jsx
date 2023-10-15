import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Logo from "../assets/Images/Shreeji_logo.png";

const Navigation = () => {
  const location = useLocation();

  const [showMobileNav, setShowMobileNav] = useState(false);

  const navLinks = [
    { id: 1, linkName: "Home", linkHref: "/" },
    { id: 2, linkName: "About", linkHref: "/about" },
    { id: 3, linkName: "Gallery", linkHref: "/gallery" },
    { id: 4, linkName: "Our services", linkHref: "/services" },
    { id: 5, linkName: "Contact us", linkHref: "/contact" },
    { id: 6, linkName: "Our products", linkHref: "/products" },
  ];

  return (
    <header className="navigation-bar relative flex-between items-center w-full py-2 px-6 lg:px-16">
      <div className="logo w-[145px]">
        <Link to="/">
          <img src={Logo} className="w-full" alt="Shreeji" />
        </Link>
      </div>
      {/*  */}
      <div
        className={`${
          showMobileNav
            ? "max-lg:absolute flex flex-col items-end text-end pe-6 pb-16 lg:pe-16 lg:pb-0 top-[38px] left-0 right-0 z-[9999] my-2 pt-2 lg:pt-0 lg:my-0"
            : "hidden"
        } nav-links bg-white lg:flex-row w-full lg:flex-between`}
      >
        <nav className="flex flex-col lg:flex-row lg:ms-auto lg:gap-6 ">
          {navLinks.map((navLink) => (
            <Link
              to={navLink.linkHref}
              key={navLink.id}
              className={`${
                location.pathname === navLink.linkHref
                  ? "text-primary-color bg-blue-50 rounded-lg text-center"
                  : "text-neutral-500"
              } p-2 mb-2 lg:mb-0 hover:bg-blue-50`}
            >
              {navLink.linkName}
            </Link>
          ))}
        </nav>
        <div className="nav-button mt-2 lg:mt-0 lg:ms-auto">
          <a href="tel:+91 90043 74468" className="primary-btn w-max">
            Call us
          </a>
        </div>
      </div>

      <div className="icons-container lg:hidden">
        {showMobileNav ? (
          <FaTimes
            onClick={() => setShowMobileNav((prev) => !prev)}
            className="cursor-pointer font-light"
            size={24}
          />
        ) : (
          <FaBars
            onClick={() => setShowMobileNav((prev) => !prev)}
            className="cursor-pointer font-light"
            size={24}
          />
        )}
      </div>
    </header>
  );
};

export default Navigation;
