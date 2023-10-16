import { FaAngleRight } from "react-icons/fa";
import ServiceCardIcon1 from "../../assets/Images/our-service-icon-1.png";
import ServiceCardIcon2 from "../../assets/Images/our-service-icon-2.png";
import ServiceCardIcon3 from "../../assets/Images/our-service-icon-3.png";
import ServiceCardIcon4 from "../../assets/Images/our-service-icon-4.png";
import ServiceCardIcon5 from "../../assets/Images/our-service-icon-5.png";
import ServiceCardIcon6 from "../../assets/Images/our-service-icon-6.png";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const serviceSectionData = {
    smallHeader: "Our Services",
    header: "Explore our services",
  };

  const serviceCardData = [
    {
      id: 1,
      cardIcon: ServiceCardIcon1,
      cardHeader: "Pool Design and Construction",
      cardBody:
        "We help design and build custom swimming pools as per your requirements.",
    },
    {
      id: 2,
      cardIcon: ServiceCardIcon2,
      cardHeader: "Pool Filtrations",
      cardBody:
        "We provide best filters for your pool to filter the water on its own.",
    },
    {
      id: 3,
      cardIcon: ServiceCardIcon3,
      cardHeader: "Pool Maintenance",
      cardBody: "We provide pool cleaning, chemical balancing",
    },
    {
      id: 4,
      cardIcon: ServiceCardIcon4,
      cardHeader: "Pool Remodeling",
      cardBody:
        "We help you add features or upgrade the equipment if you already have a pool.",
    },
    {
      id: 5,
      cardIcon: ServiceCardIcon5,
      cardHeader: "Other Water Features",
      cardBody:
        "We also have expertise in jacuzzi, fountains, steam and sauna.",
    },
    {
      id: 6,
      cardIcon: ServiceCardIcon6,
      cardHeader: "Technical Support",
      cardBody:
        "We provide the best solution to maintain your swimming pool on day to day basis.",
    },
  ];

  return (
    <section className="our-services-section section max-container text-center flex-center flex-col">
      <div className="text-container w-full ">
        <span className="small-header">{serviceSectionData.smallHeader}</span>
        <h2 className="header-text">{serviceSectionData.header}</h2>
      </div>
      <div className="service-card-container my-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {serviceCardData.map((card) => (
          <div
            key={card.id}
            className="card flex flex-col items-center justify-start p-6 bg-neutral-100 rounded-2xl border border-transparent cursor-default hover:border-neutral-200"
          >
            <div className="icon-container w-[76px] h-[76px] mb-6 rounded-full border border-blue-100 flex-center">
              <img className="w-12" src={card.cardIcon} alt={card.cardIcon} />
            </div>
            <div className="service-text-container">
              <h4 className="service-header mb-4 text-blue-950">
                {card.cardHeader}
              </h4>
              <p className="text-neutral-600">{card.cardBody}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to={"/services"} className="outline-btn flex-center group/button">
        Explore more
        <FaAngleRight className="ms-1 group-hover/button:ms-2 transition-[margin]" />
      </Link>
    </section>
  );
};

export default ServicesSection;
