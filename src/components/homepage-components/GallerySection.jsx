import { FaAngleRight } from "react-icons/fa";
import GalleryImage1 from "../../assets/Images/Gallery-images/gallery-image-1.png";
import GalleryImage2 from "../../assets/Images/Gallery-images/gallery-image-2.png";
import GalleryImage3 from "../../assets/Images/Gallery-images/gallery-image-3.png";
import GalleryImage4 from "../../assets/Images/Gallery-images/fountain.jpg";
import { Link } from "react-router-dom";

const GallerySection = () => {
  const gallerySectionData = {
    smallHeader: "Gallery",
    header: "Some of our project photos",
  };

  const galleryImages = [
    {
      id: 1,
      src: GalleryImage1,
      altText: "gallery-image",
      category: "Swimming pool",
    },
    {
      id: 2,
      src: GalleryImage2,
      altText: "gallery-image",
      category: "Jaccuzzi",
    },

    {
      id: 4,
      src: GalleryImage4,
      altText: "gallery-image",
      category: "Fountain",
    },
    {
      id: 3,
      src: GalleryImage3,
      altText: "gallery-image",
      category: "Steam and Sauna",
    },
  ];

  return (
    <section className="gallery-section section max-container text-center flex-center flex-col">
      <div className="text-container w-full">
        <span className="small-header">{gallerySectionData.smallHeader}</span>
        <h2 className="header-text">{gallerySectionData.header}</h2>
      </div>
      <div className="section-body gallery-image-wrapper grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 mb-10">
        {galleryImages.map((image) => (
          <div key={image.id} className="gallery-image-container flex flex-col">
            <img
              src={image.src}
              alt={image.altText}
              className="rounded-2xl w-full h-full object-cover bg-center"
            />
            <p className="mt-2 cursor-default">{image.category}</p>
          </div>
        ))}
      </div>
      <Link to={"/gallery"} className="outline-btn flex-center group/button">
        See all
        <FaAngleRight className="ms-1 group-hover/button:ms-2 transition-[margin]" />
      </Link>
    </section>
  );
};

export default GallerySection;
