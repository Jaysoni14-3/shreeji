import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Images/Shreeji_logo.png";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  const location = useLocation();
  const contactDetails = [
    {
      id: 1,
      href:
        "https://www.google.com/maps/place/19%C2%B015'31.6%22N+72%C2%B051'47.5%22E/@19.258786,72.863188,17z/data=!3m1!4b1!4m4!3m3!8m2!3d19.258786!4d72.863188",
      icon: <FaMapMarkerAlt size={18} />,
      text:
        "Shop No 2, Shree Giriraj CHS, Anand Nagar, Near Rajendra Complex, Dahisar (East), Mumbai - 400068.",
    },
    {
      id: 2,
      href: "mailto:shreejigroupmumbai@gmail.com",
      icon: <FaEnvelope size={18} />,
      text: "shreejigroupmumbai@gmail.com",
    },
    {
      id: 3,
      href: "tel:+91 90043 74468",
      icon: <FaPhoneAlt size={18} />,
      text: "+91 90043 74468",
    },
  ];

  const footerLinks = [
    { id: 1, linkName: "Home", linkHref: "/" },
    { id: 2, linkName: "About", linkHref: "/about" },
    { id: 3, linkName: "Gallery", linkHref: "/gallery" },
    { id: 4, linkName: "Our services", linkHref: "/services" },
    { id: 5, linkName: "Contact us", linkHref: "/contact" },
    { id: 6, linkName: "Our products", linkHref: "/products" },
  ];

  const socialLinks = [
    {
      id: 1,
      href:
        "https://www.facebook.com/profile.php?id=61551824529666&mibextid=ZbWKwL",
      icon: <FaFacebookF className="text-primary-color" size={18} />,
    },
    {
      id: 2,
      href: "https://instagram.com/shreejimumbai?igshid=NjIwNzIyMDk2Mg==",
      icon: <FaInstagram className="text-primary-color" size={18} />,
    },
  ];

  return (
    <div className="footer bg-[#073a5f] text-white py-6 px-12">
      <footer className="footer ">
        <div className="footer-details grid md:grid-cols-2 lg:grid-cols-3 sm:gap-4">
          <div className="company-details-links">
            <div className="company-details">
              <div className="footer-logo w-[145px] mb-4">
                <Link to={"/"}>
                  <img src={Logo} alt="shreeji" />
                </Link>
              </div>
              <div className="company-details flex flex-col gap-4">
                {contactDetails.map((contact) => (
                  <Link key={contact.id} to={contact.href} target="_blank">
                    <div className="flex items-center gap-4">
                      <div className="icon">{contact.icon}</div>
                      <div className="address-text">
                        <p>{contact.text}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <hr className="mt-4 sm:hidden" />

          <div className="company-links h-fit w-full mt-6 md:mt-0">
            <h4 className="text-start">Company links</h4>
            <div className="w-full grid gap-3 text-center grid-cols-2 mt-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.linkHref}
                  className={`${
                    location.pathname === link.linkHref
                      ? "text-primary-color bg-blue-50 text-center"
                      : "text-neutral-100 bg-[#033e69]"
                  } p-2 mb-2 rounded-lg lg:mb-0 hover:bg-blue-50 hover:text-text-color footer-link-item transition-colors`}
                >
                  <span>{link.linkName}</span>
                </Link>
              ))}
            </div>
          </div>

          <hr className="sm:hidden" />

          <div className="social-links mt-6 md:mt-0">
            <h4 className="text-center">Find us on</h4>
            <div className="social-links-container mt-6 flex flex-row justify-center gap-4 text-neutral-400">
              {socialLinks.map((link) => (
                <Link
                  to={link.href}
                  key={link.id}
                  className="bg-blue-100 p-4 rounded-lg hover:bg-blue-200 w-max"
                  target="_blank"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="copyright-text text-center mt-6">
          <p>Shreeji Copyrights. 2023 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
