import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const GalleryForm = ({ openGalleryForm }) => {
  const [gallery, setGallery] = useState("");
  const [galleryError, setGalleryError] = useState(false);

  // Submits the product to firebase
  const submitNewGallery = (e) => {
    e.preventDefault();
    console.log(gallery);
    if (gallery == "") {
      setGalleryError(true);
      return;
    } else {
      setGalleryError(false);
    }
    // Add new product in the firebase firestore
    console.log(gallery);
  };
  return (
    <div className="absolute inset-0 dark-overlay z-50">
      <div className="border bg-white rounded-md p-4 absolute inset-0 m-auto w-full max-w-[360px] h-max">
        <div className="modal-header flex-between border-b pb-2">
          <h5>Add Image</h5>
          <div
            onClick={openGalleryForm}
            className="close-icon cursor-pointer w-12 h-12 flex-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
          >
            <FaTimes />
          </div>
        </div>
        <div className="modal-body mt-4">
          <form onSubmit={submitNewGallery}>
            <div className="input-fields flex flex-col ">
              <label htmlFor="imageInput">
                <span>Image: </span>
                <input
                  id="image"
                  type="file"
                  name="productImage"
                  value={gallery}
                  onChange={(e) => setGallery(e.target.value)}
                  className="w-full bg-neutral-200 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-primary-color transition ease-in-out duration-150"
                />
              </label>
              {galleryError && (
                <span className="text-sm w-max mb-2 bg-red-100 rounded-md px-2 text-red-600">
                  Please provide an image.
                </span>
              )}
            </div>
            <div className="button-container border-t pt-2">
              <button className="primary-btn ms-auto" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GalleryForm;
