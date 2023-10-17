import { FaLongArrowAltLeft } from "react-icons/fa";
import ContactUsMapImage from "../assets/Images/Map-image.png";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

const ContactUspage = () => {
  const contactUsData = {
    pageHeader: "We are open to discuss",
    paragraph:
      "Send us your message and our team will get back to you in the next 24hrs",
  };

  return (
    <section className="contact-us-page snpection max-container flex flex-col">
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
          <div className="company-description mb-4">
            <h1 className="page-header mb-4">{contactUsData.pageHeader}</h1>
            <p className=" text-base">{contactUsData.paragraph}</p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUspage;
