import AdditionalServicesSection from "../components/Service-components/AdditionalServicesSection";
import ExploreServicesSection from "../components/Service-components/ExploreServicesSection";
import ServiceSection from "../components/Service-components/ServiceSection";

const OurServicespage = () => {
  return (
    <div className="our-services-page">
      <ServiceSection />
      <ExploreServicesSection />
      <AdditionalServicesSection />
    </div>
  );
};

export default OurServicespage;
