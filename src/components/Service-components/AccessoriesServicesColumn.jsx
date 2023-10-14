import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AccessoriesServicesColumn = () => {
  const accessoriesServiceProducts = [
    { serviceId: 6, serviceName: "Pool Lights" },
    { serviceId: 7, serviceName: "Ladders" },
    { serviceId: 8, serviceName: "Mosaic Tiles" },
    { serviceId: 9, serviceName: "Pool Liners" },
    { serviceId: 10, serviceName: "Replacement Parts" },
    { serviceId: 11, serviceName: "Gratings" },
  ];

  return (
    <div className="accessories-and-services flex flex-col justify-between">
      <h4 className="column-header text-neutral-950 font-semibold mb-4">
        Accessories and services for your pool
      </h4>
      <div className="column-body">
        {accessoriesServiceProducts.map((product) => (
          <Link
            to={`/service/${product.serviceId}`}
            key={product.serviceId}
            id={product.serviceId}
            className="service-item flex items-center cursor-pointer text-blue-600 mb-2"
          >
            <FaLongArrowAltRight className="me-4" size={16} />
            <p>{product.serviceName}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AccessoriesServicesColumn;
