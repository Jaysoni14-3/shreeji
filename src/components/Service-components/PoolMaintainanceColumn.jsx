import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const PoolMaintainanceColumn = () => {
  const poolMaintainanceProducts = [
    { serviceId: 1, serviceName: "Pool Products" },
    { serviceId: 2, serviceName: "Media changing" },
    { serviceId: 3, serviceName: "Complete line of pool chemicals" },
    { serviceId: 4, serviceName: "Consultancy for cleaning" },
    { serviceId: 5, serviceName: "Problem and solutions" },
  ];

  return (
    <div className="Pool-maintainance-column flex flex-col justify-between">
      <h4 className="column-header text-neutral-950 font-semibold mb-4">
        Pool maintenance products and services
      </h4>
      <div className="column-body">
        {poolMaintainanceProducts.map((product) => (
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

export default PoolMaintainanceColumn;
