import { useState, useEffect } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

const Gallerypage = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  useEffect(() => {
    const fetchGalleryImages = async () => {
      let galleryList = [];
      try {
        const querySnapshot = await getDocs(collection(db, "gallery"));
        querySnapshot.forEach((doc) => {
          galleryList.push({ id: doc.id, ...doc.data() });
        });
        setGalleryImages(galleryList);
      } catch (err) {
        console.log(err);
      }
    };
    fetchGalleryImages();
  }, []);

  // console.log(galleryImages);

  const handleImageClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImageUrl("");
  };

  const swimmingPoolImages = galleryImages.filter(
    (image) => image.category === "swimmingpool"
  );

  const jaccuzziImages = galleryImages.filter(
    (image) => image.category === "jaccuzzi"
  );

  const saunaImages = galleryImages.filter(
    (image) => image.category === "sauna"
  );

  const fountainImages = galleryImages.filter(
    (image) => image.category === "fountain"
  );

  // console.log(swimmingPoolImages);
  // console.log(jaccuzziImages);
  // console.log(saunaImages);
  // console.log(fountainImages);

  return (
    <>
      <section className="gallery-page section max-container">
        {swimmingPoolImages.length === 0 ? (
          ""
        ) : (
          <div className="swimming-pool-container">
            <h3 className="uppercase text-black">Swimming Pools</h3>
            <div className="swimming-pool-images mt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {swimmingPoolImages.map((image) => (
                <div key={image.id} className="image-container">
                  <LazyLoadImage
                    effect="blur"
                    className="h-auto w-full object-cover bg-center rounded-lg"
                    src={image.image}
                    alt={image.image}
                    onClick={() => handleImageClick(image.image)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {jaccuzziImages.length === 0 ? (
          ""
        ) : (
          <div className="jaccuzzi-container mt-4">
            <h3 className="uppercase text-black">Jaccuzzis</h3>
            <div className="jaccuzzi-images mt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {jaccuzziImages.map((image) => (
                <div key={image.id} className="image-container">
                  <LazyLoadImage
                    effect="blur"
                    className="h-auto w-full object-cover bg-center rounded-lg"
                    src={image.image}
                    alt={image.image}
                    onClick={() => handleImageClick(image.image)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {fountainImages.length === 0 ? (
          ""
        ) : (
          <div className="fountain-container mt-4">
            <h3 className="uppercase text-black">Fountains</h3>
            <div className="statue-images mt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {fountainImages.map((image) => (
                <div key={image.id} className="image-container">
                  <LazyLoadImage
                    effect="blur"
                    className="max-h-[400px] w-full object-cover bg-center rounded-lg"
                    src={image.image}
                    alt={image.image}
                    onClick={() => handleImageClick(image.image)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {saunaImages.length === 0 ? (
          ""
        ) : (
          <div className="sauna-container mt-4">
            <h3 className="uppercase text-black">Steam and Saunas</h3>
            <div className="sauna-images mt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {saunaImages.map((image) => (
                <div key={image.id} className="image-container">
                  <LazyLoadImage
                    effect="blur"
                    className="h-auto w-full object-cover bg-center rounded-lg"
                    src={image.image}
                    alt={image.image}
                    onClick={() => handleImageClick(image.image)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
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
