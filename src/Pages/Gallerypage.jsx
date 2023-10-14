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

  const images = [
    { path: GalleryImage1 },
    { path: GalleryImage2 },
    { path: GalleryImage3 },
    { path: GalleryImage4 },
    { path: GalleryImage5 },
    { path: GalleryImage6 },
    { path: GalleryImage7 },
    { path: GalleryImage8 },
  ];

  return (
    <>
      <section className="gallery-page section max-container grid grid-cols-2 sm:grid-cols-3 gap-4 ">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <LazyLoadImage
              effect="blur"
              className="h-auto w-full object-cover bg-center rounded-lg"
              src={image.path}
              alt={image.path}
              onClick={() => handleImageClick(image.path)}
            />
          </div>
        ))}
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
