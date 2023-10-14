import { FaPhoneAlt } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductCard = ({ productId, productImageSrc, productName, callUs }) => {
  return (
    <div
      id={productId}
      className="flex flex-col rounded-lg border border-neutral-200 bg-white hover:shadow-md hover:border-neutral-300 transition-opacity"
    >
      <LazyLoadImage
        effect="blur"
        className="rounded-lg p-6 max-h-[200px] w-full object-contain"
        src={productImageSrc}
        alt={productImageSrc}
      />
      <div className="px-4 mb-2 text-center">
        <p className=" text-lg">{productName}</p>
      </div>
      <div className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center">
        <button
          onClick={callUs}
          className="outline-btn mt-auto mx-auto flex items-center gap-2 hover:bg-blue-100 hover:text-blue-900 transition-colors"
        >
          <FaPhoneAlt />
          Call Us
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
