import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import MapImage from "../../assets/Images/Map-image.png";
import ContactForm from "../ContactForm";

const ContactSection = () => {
  const contactSectionData = {
    smallHeader: "Contact us",
    header: "We are ready to SERVE YOU",
  };

  const contactDetails = [
    {
      id: 1,
      href:
        "https://www.google.com/maps/place/19%C2%B015'31.6%22N+72%C2%B051'47.5%22E/@19.258786,72.863188,17z/data=!3m1!4b1!4m4!3m3!8m2!3d19.258786!4d72.863188",
      icon: <FaMapMarkerAlt size={18} />,
      text:
        // "Shop No 2, Shree Giriraj CHS, Anand Nagar, Near Rajendra Complex, Dahisar (East), Mumbai - 400068.",
        "Address",
    },
    {
      id: 2,
      href: "mailto:shreejigroupmumbai@gmail.com",
      icon: <FaEnvelope size={18} />,
      // text: "shreejigroupmumbai@gmail.com",
      text: "Email",
    },
    {
      id: 3,
      href: "tel:+91 90043 74468",
      icon: <FaPhoneAlt size={18} />,
      // text: "+91 90043 74468",
      text: "Phone number",
    },
  ];

  return (
    <section className="contact-us-section section max-container text-center flex-center flex-col">
      <div className="text-container w-full">
        <span className="small-header">{contactSectionData.smallHeader}</span>
        <h2 className="header-text">{contactSectionData.header}</h2>
      </div>
      <div className="section-body w-full flex flex-col sm:flex-row gap-4 sm:gap-0">
        <div className="map-container w-full">
          <Link
            target="_blank"
            to={
              "https://www.google.com/maps/place/19%C2%B015'31.6%22N+72%C2%B051'47.5%22E/@19.258786,72.863188,17z/data=!3m1!4b1!4m4!3m3!8m2!3d19.258786!4d72.863188"
            }
          >
            <img className="rounded-2xl" src={MapImage} alt="Maps screenshot" />
          </Link>
        </div>
        <div className="contact-detail-container flex flex-col sm:mx-2 sm:px-2 lg:mx-8 lg:px-4 text-start w-full">
          <ContactForm />
          <hr className="my-4" />
          <div className="contact-container flex flex-row flex-wrap justify-between w-full">
            {contactDetails.map((contact) => (
              <Link key={contact.id} to={contact.href} target="_blank">
                <div className="flex items-center mt-2 sm:mt-0 py-2 px-4 rounded-lg border hover:bg-neutral-100 transition-colors">
                  <div className="icon mr-2">{contact.icon}</div>
                  <div className="text">
                    <p>{contact.text}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
