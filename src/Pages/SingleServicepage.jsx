import { Link, useParams } from "react-router-dom";
import { serviceData } from "../ServiceData";
import { FaLongArrowAltLeft } from "react-icons/fa";
import AdditionalServicesSection from "../components/Service-components/AdditionalServicesSection";
import { useEffect } from "react";

const SingleServicepage = () => {
  const currentId = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentId]);

  const filterService = serviceData.filter(
    (service) => service.serviceId === parseInt(currentId.id)
  );

  const currentServiceProduct = filterService[0];

  return (
    <>
      <section className="flex-center flex-col max-container">
        <div className="service-page section  max-w-[700px]">
          <div className="section-header">
            <div className="breadcrumb uppercase text-sm mb-4">
              <Link
                to={"/services"}
                className="previous-page cursor-pointer flex items-center text-neutral-500"
              >
                <FaLongArrowAltLeft className="me-1" /> Service
              </Link>
            </div>
          </div>
          <div className="section-body" id={currentServiceProduct.serviceId}>
            <h1 className="text-neutral-900 mb-2">
              {currentServiceProduct.serviceName}
            </h1>
            <p className="text-neutral-700">
              {currentServiceProduct.serviceDesc}
            </p>
          </div>
        </div>
      </section>
      <AdditionalServicesSection />
    </>
  );
};

export default SingleServicepage;
