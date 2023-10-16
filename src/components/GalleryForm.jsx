import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { storage } from "../firebase";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";

const GalleryForm = ({ openGalleryForm }) => {
  const [data, setData] = useState({});
  const [galleryImage, setGalleryImage] = useState("");
  const [galleryError, setGalleryError] = useState(false);

  const [percentage, setPercentage] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, `galleryImages/${uuidv4()}`);
      const uploadTask = uploadBytesResumable(storageRef, galleryImage);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPercentage(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, image: downloadURL }));
          });
        }
      );
    };
    galleryImage && uploadFile();
  }, [galleryImage]);

  // Provides the name inside the data object
  const handleCategoryChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  console.log(data);

  // Submits the product to firebase
  const submitNewGallery = async (e) => {
    e.preventDefault();
    if (galleryImage == "") {
      setGalleryError(true);
      return;
    } else {
      setGalleryError(false);
    }

    // Add new product in the firebase firestore
    await addDoc(collection(db, "gallery"), {
      ...data,
      timeStamp: serverTimestamp(),
    });
    alert("Added to your gallery");
    console.log(galleryImage);
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
            <div className="input-fields flex flex-col mb-4">
              <label htmlFor="imageInput">
                <span>Image: </span>
                <input
                  id="image"
                  type="file"
                  name="productImage"
                  onChange={(e) => setGalleryImage(e.target.files[0])}
                  className="w-full bg-neutral-200 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-primary-color transition ease-in-out duration-150"
                />
              </label>
              <label htmlFor="category">
                <span>Category :</span>
              </label>
              <select
                className="mt-2 p-2 bg-neutral-200 cursor-pointer rounded-md"
                name="category"
                id="category"
                value={data.category}
                onChange={handleCategoryChange}
              >
                <option value="0">Select</option>
                <option value="swimmingpool">Swimming pool</option>
                <option value="jaccuzzi">Jaccuzzi</option>
                <option value="sauna">Steam and sauna</option>
                <option value="fountain">Fountain</option>
              </select>
              {galleryError && (
                <span className="text-sm w-max mb-2 bg-red-100 rounded-md px-2 text-red-600">
                  Please provide an image.
                </span>
              )}
            </div>
            <div className="button-container border-t pt-2">
              <button className="primary-btn ms-auto" type="submit">
                Submit {percentage}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GalleryForm;
