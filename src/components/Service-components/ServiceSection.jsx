import ServiceImage1 from "../../assets/Images/services-image-1.png";
import ServiceImage2 from "../../assets/Images/services-image-2.png";
import ServiceImage3 from "../../assets/Images/services-image-3.png";

const ServiceSection = () => {
  const serviceSectionData = [
    {
      id: 1,
      imgSrc: ServiceImage1,
      serviceHeader: "Construction",
      servicetext:
        "We help in design and build coustom swimming pool/other water features as per yoou requirements.",
    },
    {
      id: 2,
      imgSrc: ServiceImage2,
      serviceHeader: "Maintenace ",
      servicetext:
        "We aslo deal in filterations system, chemicals and cleaning equipments.",
    },
    {
      id: 3,
      imgSrc: ServiceImage3,
      serviceHeader: "Other water features",
      servicetext:
        "Not only swimming pool we also deal in jaccuzzi, fountains, steam, sauna and other play equipemnets.",
    },
  ];
  return (
    <section className="service-section section max-container grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {serviceSectionData.map((service) => (
        <div
          key={service.id}
          className="service-card flex flex-col justify-start items-center text-center"
        >
          <div className="image-container mb-4 rounded-full overflow-hidden">
            <img
              className="w-full h-auto bg-cover"
              src={service.imgSrc}
              alt="service image"
            />
          </div>
          <div className="text-container px-2 pb-4">
            <h3 className="service-header text-neutral-900 mb-6">
              {service.serviceHeader}
            </h3>
            <p className="text-neutral-600">{service.servicetext}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceSection;
