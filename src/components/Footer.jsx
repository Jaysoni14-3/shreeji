import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Images/Shreeji_logo.png";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

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

  return (
    <div className="footer bg-[#073a5f] text-white py-6 px-12">
      <footer className="footer">
        <div className="footer-details flex justify-between flex-col sm:flex-row sm:gap-4">
          <div className="company-details-links md:flex w-full">
            <div className="company-details max-w-[350px]">
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
            <hr className="mt-4 md:hidden" />
            <div className="company-links min-w-[250px] ms-auto md:me-auto h-fit grid gap-2 text-start grid-cols-2 mt-6 md:mt-0">
              {footerLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.linkHref}
                  className={`${
                    location.pathname === link.linkHref
                      ? "text-primary-color bg-blue-50 text-start"
                      : "text-neutral-100"
                  } p-2 mb-2 rounded-lg lg:mb-0 hover:bg-blue-50 hover:text-text-color footer-link-item`}
                >
                  <span>{link.linkName}</span>
                </Link>
              ))}
            </div>
          </div>
          <hr className="md:hidden" />
          <div className="social-links min-w-[120px] mt-6 md:mt-0">
            <h4>Find us on</h4>
            <div className="social-links-container mt-4 flex flex-col gap-4 text-neutral-400">
              <Link to={""} className="hover:text-neutral-100" target="_blank">
                Facebook
              </Link>
              <Link to={""} className="hover:text-neutral-100" target="_blank">
                Instagram
              </Link>
              <Link to={""} className="hover:text-neutral-100" target="_blank">
                Youtube
              </Link>
            </div>
          </div>
        </div>

        <div className="copyright-text text-center mt-6">
          <p>Shreeji Copyrights. 2023 All rights reserved.</p>
          {/* is github working? */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
