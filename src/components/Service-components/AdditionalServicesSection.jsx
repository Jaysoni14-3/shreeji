import AccessoriesServicesColumn from "./AccessoriesServicesColumn";
import FilterServicesColumn from "./FilterServicesColumn";
import PoolMaintainanceColumn from "./PoolMaintainanceColumn";

const AdditionalServicesSection = () => {
  return (
    <section className="additional-services-section max-container mb-6">
      <div className="text-container w-full text-center">
        <h2 className="header-text">Additional services</h2>
      </div>
      <div className="section-body grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="additional-service-column ">
          {/* Pool Maintenance products and services */}
          <PoolMaintainanceColumn />
        </div>
        <div className="additional-service-column ">
          {/* Accessories and services */}
          <AccessoriesServicesColumn />
        </div>
        <div className="additional-service-column ">
          {/* Filters and other services */}
          <FilterServicesColumn />
        </div>
      </div>
    </section>
  );
};

export default AdditionalServicesSection;
