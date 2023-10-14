import { FaLongArrowAltRight } from "react-icons/fa"
import { Link } from "react-router-dom"

const FilterServicesColumn = () => {
    const filterServiceProducts = [
        { serviceId: 12, serviceName: "Consultation" },
        { serviceId: 13, serviceName: "Pump and Filters" },
        { serviceId: 14, serviceName: "Jacuzzi" },
        { serviceId: 15, serviceName: "Fountains" },
        { serviceId: 16, serviceName: "Steam and Sauna" },
        { serviceId: 17, serviceName: "Play Equpiments" },
    ]
  return (
    <div className="accessories-and-services flex flex-col justify-between">
      <h4 className="column-header text-neutral-950 font-semibold mb-4">
        Filter and other services
      </h4>
      <div className="column-body">
        {filterServiceProducts.map((product) => (
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
  )
}

export default FilterServicesColumn
