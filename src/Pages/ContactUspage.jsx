import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLongArrowAltLeft,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import ContactUsMapImage from "../assets/Images/Map-image.png";
import { Link } from "react-router-dom";

const ContactUspage = () => {
  // todo: add contact us paragraph instead of lorem ipsum
  const contactUsData = {
    pageHeader: "We are open to discuss",
    paragraph:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendecat cupidatat non proidem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  };

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

  const socialLinks = [
    {
      id: 1,
      href: "#",
      icon: <FaFacebookF className="text-primary-color" size={18} />,
    },
    {
      id: 2,
      href: "#",
      icon: <FaInstagram className="text-primary-color" size={18} />,
    },
    {
      id: 3,
      href: "#",
      icon: <FaYoutube className="text-primary-color" size={18} />,
    },
  ];

  return (
    <section className="contact-us-page section max-container flex flex-col">
      <div className="section-header">
        <div className="breadcrumb uppercase text-sm flex items-center justify-start gap-2">
          <Link
            to={"/"}
            className="previous-page cursor-pointer flex items-center text-neutral-500"
          >
            <FaLongArrowAltLeft className="me-1" /> Home
          </Link>
          <div className="breadcrumb-seperator">/</div>
          <div className="current-page text-neutral-950">Contact us</div>
        </div>
      </div>
      <div className="section-body mt-4 flex flex-col gap-6 md:flex-row-reverse md:gap-12">
        {/* Map image */}
        <div className="image-container h-auto md:w-6/12">
          <Link
            target="_blank"
            to={
              "https://www.google.com/maps/place/19%C2%B015'31.6%22N+72%C2%B051'47.5%22E/@19.258786,72.863188,17z/data=!3m1!4b1!4m4!3m3!8m2!3d19.258786!4d72.863188"
            }
          >
            <img
              className="rounded-lg w-full h-auto object-cover"
              src={ContactUsMapImage}
              alt="About Shreeji"
            />
          </Link>
        </div>
        <div className="md:w-6/12 mb-8">
          {/* Company description */}
          <div className="company-description mb-8">
            <h1 className="page-header mb-6">{contactUsData.pageHeader}</h1>
            <p className=" text-base">{contactUsData.paragraph}</p>
          </div>
          {/* Contact information */}
          <div className="contact-information flex flex-col gap-4 mb-8">
            {contactDetails.map((contact) => (
              <Link key={contact.id} to={contact.href} target="_blank">
                <div className="flex items-center gap-4">
                  <div className="icon">{contact.icon}</div>
                  <div className="text">
                    <p>{contact.text}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* Social Icons */}
          <div className="social-icons">
            <h4 className="font-semibold text-neutral-900">Find us on</h4>
            <div className="icon-wrapper flex items-center gap-4 mt-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.href}
                  target="_blank"
                  className="icon-container bg-blue-100 p-4 rounded-lg hover:bg-blue-200"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUspage;
