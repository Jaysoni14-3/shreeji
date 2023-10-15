import { useState } from "react";
import GalleryImage1 from "../assets/Images/Gallery-images/gallery-image-1.png";
import GalleryImage2 from "../assets/Images/Gallery-images/gallery-image-2.png";
import GalleryImage3 from "../assets/Images/Gallery-images/gallery-image-3.png";
import GalleryImage4 from "../assets/Images/Gallery-images/gallery-image-4.png";
import GalleryImage5 from "../assets/Images/Gallery-images/gallery-image-5.png";
import GalleryImage6 from "../assets/Images/Gallery-images/gallery-image-6.png";
import GalleryImage7 from "../assets/Images/Gallery-images/gallery-image-7.png";
import GalleryImage8 from "../assets/Images/Gallery-images/gallery-image-8.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

const Gallerypage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const handleImageClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImageUrl("");
  };

  const imagesData = [
    {
      id: 1,
      imgSrc: GalleryImage1,
      category: "swimmingPool",
    },
    {
      id: 2,
      imgSrc: GalleryImage2,
      category: "fountain",
    },
    {
      id: 3,
      imgSrc: GalleryImage3,
      category: "fountain",
    },
    {
      id: 4,
      imgSrc: GalleryImage4,
      category: "jaccuzzi",
    },
    {
      id: 5,
      imgSrc: GalleryImage5,
      category: "swimmingPool",
    },
    {
      id: 6,
      imgSrc: GalleryImage6,
      category: "sauna",
    },
    {
      id: 7,
      imgSrc: GalleryImage7,
      category: "jaccuzzi",
    },
    {
      id: 8,
      imgSrc: GalleryImage8,
      category: "sauna",
    },
    {
      id: 9,
      imgSrc: GalleryImage6,
      category: "sauna",
    },
    {
      id: 10,
      imgSrc: GalleryImage7,
      category: "jaccuzzi",
    },
    {
      id: 11,
      imgSrc: GalleryImage8,
      category: "sauna",
    },
  ];

  const swimmingPoolImages = imagesData.filter(
    (image) => image.category === "swimmingPool"
  );

  const jaccuzziImages = imagesData.filter(
    (image) => image.category === "jaccuzzi"
  );

  const saunaImages = imagesData.filter((image) => image.category === "sauna");

  const fountainImages = imagesData.filter(
    (image) => image.category === "fountain"
  );

  return (
    <>
      <section className="gallery-page section max-container">
        <div className="swimming-pool-container">
          <h3 className="uppercase text-black">Swimming Pools</h3>
          <div className="swimming-pool-images mt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {swimmingPoolImages.map((image) => (
              <div key={image.id} className="image-container">
                <LazyLoadImage
                  effect="blur"
                  className="h-auto w-full object-cover bg-center rounded-lg"
                  src={image.imgSrc}
                  alt={image.imgSrc}
                  onClick={() => handleImageClick(image.imgSrc)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="jaccuzzi-container mt-4">
          <h3 className="uppercase text-black">Jaccuzzis</h3>
          <div className="jaccuzzi-images mt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {jaccuzziImages.map((image) => (
              <div key={image.id} className="image-container">
                <LazyLoadImage
                  effect="blur"
                  className="h-auto w-full object-cover bg-center rounded-lg"
                  src={image.imgSrc}
                  alt={image.imgSrc}
                  onClick={() => handleImageClick(image.imgSrc)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="sauna-container mt-4">
          <h3 className="uppercase text-black">Saunas</h3>
          <div className="sauna-images mt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {saunaImages.map((image) => (
              <div key={image.id} className="image-container">
                <LazyLoadImage
                  effect="blur"
                  className="h-auto w-full object-cover bg-center rounded-lg"
                  src={image.imgSrc}
                  alt={image.imgSrc}
                  onClick={() => handleImageClick(image.imgSrc)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="fountain-container mt-4">
          <h3 className="uppercase text-black">Fountains</h3>
          <div className="statue-images mt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {fountainImages.map((image) => (
              <div key={image.id} className="image-container">
                <LazyLoadImage
                  effect="blur"
                  className="h-auto w-full object-cover bg-center rounded-lg"
                  src={image.imgSrc}
                  alt={image.imgSrc}
                  onClick={() => handleImageClick(image.imgSrc)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <ImageModal
        isOpen={isModalOpen}
        imageUrl={selectedImageUrl}
        onRequestClose={handleCloseModal}
      />
    </>
  );
};

export default Gallerypage;

function ImageModal({ imageUrl, isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={modalStyles}
      contentLabel="Image Modal"
      ariaHideApp={false}
    >
      <button
        className=" absolute top-2 right-2 z-10 bg-primary-color text-white p-2 rounded-full "
        onClick={onRequestClose}
      >
        <FaTimes />
      </button>
      <LazyLoadImage
        src={imageUrl}
        alt={imageUrl}
        className="w-auto h-auto object-cover overflow-hidden bg-center"
        effect="blur"
      />
    </Modal>
  );
}

// Style for the modal (customize as needed)
const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    maxWidth: "90%",
    maxHeight: "90vh",
    height: "auto",
    width: "auto",
    minWidth: "280px",
    display: "flex",
    flexDirection: "column",
    padding: "0px",
    overflow: "hidden",
    objectFit: "cover",
  },
};
