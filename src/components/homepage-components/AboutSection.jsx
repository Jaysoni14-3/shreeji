import { FaAngleRight } from "react-icons/fa";
import aboutImage1 from "../../assets/Images/about-us-image-1.jpg";
import aboutImage2 from "../../assets/Images/about-us-image-2.jpg";
import aboutImage3 from "../../assets/Images/about-us-image-3.jpg";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const aboutImages = [
    { id: 1, imgSrc: aboutImage1, altTag: "about image 1" },
    { id: 2, imgSrc: aboutImage2, altTag: "about image 2" },
    { id: 3, imgSrc: aboutImage3, altTag: "about image 3" },
  ];

  const aboutSectionData = {
    smallHeader: "about us",
    header:
      "Your one-stop destination for pool design, consultancy, and maintenance",
    bodyText:
      "Welcome to Shreeji Mumbai, your premier destination for all for all the swimming pool related consultation & requirements. Shreeji is one of the best company for the swimming pool filtration system, jacuzzi, fountains, steam & sauna. Our company also provides, all the equipment and chemicals to maintain swimming pool, lights for pool, replacements parts for filtration system.",
  };

  return (
    <div className="bg-neutral-50">
      <section className="about-section section max-container text-center flex-center flex-col">
        <div className="text-container max-w-[645px] ">
          <span className="small-header">{aboutSectionData.smallHeader}</span>
          <h2 className="header-text">{aboutSectionData.header}</h2>
          <p className="text-neutral-600 ">{aboutSectionData.bodyText}</p>
        </div>
        <div className="about-images w-full my-6 grid place-content-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aboutImages.map((image) => (
            <div
              key={image.id}
              className="about-image-container h-[300px] overflow-hidden rounded-lg"
            >
              <img
                src={image.imgSrc}
                alt={image.altTag}
                className="object-cover bg-top w-full h-full "
              />
            </div>
          ))}
        </div>
        <Link to={"/about"} className="outline-btn flex-center group/button">
          Learn more
          <FaAngleRight className="ms-1 group-hover/button:ms-2 transition-[margin]" />
        </Link>
      </section>
    </div>
  );
};

export default AboutSection;
