import { FaLongArrowAltLeft } from "react-icons/fa";
import AboutUsImage from "../../assets/Images/about-us-page.png";

const AboutShreejiSection = () => {
  const aboutShreejiSectionData = {
    pageHeader: "About SHREEJI",
    paragraphOne:
      "Welcome to Shreeji Mumbai, your premier destination for all for all the swimming pool related consultation & requirements. Shreeji is one of the best company for the swimming pool filtration system, jacuzzi, fountains, steam & sauna. Our company also provides, all the equipment and chemicals to maintain swimming pool, lights for pool, replacements parts for filtration system.",
    paragraphTwo:
      "Shreeji's commitment to excellence and high-quality standards has earned us the privilege of serving a diverse range of clients, including builders, developers, hotels, resorts, water parks, farmhouses, etc. Our team has extensive experience working with clients from various industries and backgrounds, and we are dedicated to delivering customized solutions that meet their unique needs and specifications. We take great pride in the trust and confidence our clients have placed in us, and we are committed to maintaining our reputation for exceptional service and results.",
  };

  return (
    <section className="about-us section max-container flex flex-col">
      <div className="section-header">
        <div className="breadcrumb uppercase text-sm flex items-center justify-start gap-2">
          <div className="previous-page cursor-pointer flex items-center text-neutral-500">
            <FaLongArrowAltLeft className="me-1" /> Home
          </div>
          <div className="breadcrumb-seperator">/</div>
          <div className="current-page text-neutral-950">About us</div>
        </div>
        <h1 className="page-header mt-2">
          {aboutShreejiSectionData.pageHeader}
        </h1>
      </div>
      <div className="section-body mt-6 flex flex-col gap-6 md:flex-row-reverse md:gap-12">
        <div className="image-container h-auto md:w-6/12">
          <img
            className="rounded-lg w-full h-auto object-cover"
            src={AboutUsImage}
            alt="About Shreeji"
          />
        </div>
        <div className="text-container md:w-6/12 mb-8">
          <p className="mb-2 text-base">
            {aboutShreejiSectionData.paragraphOne}
          </p>
          <p className="text-base">{aboutShreejiSectionData.paragraphTwo}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutShreejiSection;
