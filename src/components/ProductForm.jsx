import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

import { storage, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const ProductForm = ({ openProductForm, setShowProductModal }) => {
  const [data, setData] = useState({});
  const [productImage, setProductImage] = useState("");

  const [productError, setProductError] = useState(false);

  const [percentage, setPercentage] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, `productImages/${uuidv4()}`);
      const uploadTask = uploadBytesResumable(storageRef, productImage);
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
    productImage && uploadFile();
  }, [productImage]);

  // Provides the name inside the data object
  const handleNameChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  // Submits the product to firebase
  const submitNewProduct = async (e) => {
    e.preventDefault();

    if (productImage === "" || data.name === "") {
      setProductError(true);
      return;
    } else {
      setProductError(false);
    }

    // Add new product in the firebase firestore
    await addDoc(collection(db, "products"), {
      ...data,
      timeStamp: serverTimestamp(),
    });
    alert("Added to your products");
    setShowProductModal(false);
  };

  return (
    <div className="absolute inset-0 dark-overlay z-50">
      <div className="border bg-white rounded-md p-4 absolute inset-0 m-auto w-full max-w-[360px] h-max">
        <div className="modal-header flex-between border-b pb-2">
          <h5>Add new product</h5>
          <div
            onClick={openProductForm}
            className="close-icon cursor-pointer w-12 h-12 flex-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
          >
            <FaTimes />
          </div>
        </div>
        <div className="modal-body mt-4">
          <form onSubmit={submitNewProduct}>
            <div className="input-fields flex flex-col">
              <label htmlFor="imageInput">
                <span>Image: </span>
                <input
                  id="productImage"
                  type="file"
                  onChange={(e) => setProductImage(e.target.files[0])}
                  className="w-full bg-neutral-200 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-primary-color transition ease-in-out duration-150"
                />
              </label>
              <label htmlFor="productName">
                <span>Product Name: </span>
                <input
                  id="productName"
                  type="text"
                  value={data.name}
                  // onChange={(e) => setProductName(e.target.value)}
                  onChange={handleNameChange}
                  className="w-full bg-neutral-200 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-primary-color transition ease-in-out duration-150"
                />
              </label>
              {productError && (
                <span className="text-sm w-max mb-2 bg-red-100 rounded-md px-2 text-red-600">
                  Please provide the required values.
                </span>
              )}
            </div>
            <div className="button-container border-t pt-2">
              <button className="primary-btn ms-auto" type="submit">
                Add {percentage}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
