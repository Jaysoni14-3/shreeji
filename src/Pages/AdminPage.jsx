import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import ProductForm from "../components/ProductForm";
import GalleryForm from "../components/GalleryForm";

import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../firebase";

const AdminPage = () => {
  const [productsData, setProductsData] = useState([]);
  const [galleryData, setGalleryData] = useState([]);
  const [messages, setMessages] = useState([]);

  const [showProductModal, setShowProductModal] = useState(false);
  const [showGalleryModal, setShowGalleryModal] = useState(false);

  useEffect(() => {
    const fetchAllMessages = async () => {
      let messageList = [];
      try {
        const querySnapshot = await getDocs(collection(db, "messages"));
        querySnapshot.forEach((doc) => {
          messageList.push({ id: doc.id, ...doc.data() });
        });
        setMessages(messageList);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllMessages();

    const fetchProductData = async () => {
      let productsList = [];
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
          productsList.push({ id: doc.id, ...doc.data() });
        });
        setProductsData(productsList);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProductData();

    const fetchGalleryData = async () => {
      let galleryList = [];
      try {
        const querySnapshot = await getDocs(collection(db, "gallery"));
        querySnapshot.forEach((doc) => {
          galleryList.push({ id: doc.id, ...doc.data() });
        });
        setGalleryData(galleryList);
      } catch (err) {
        console.log(err);
      }
    };
    fetchGalleryData();
  }, []);

  // console.log(galleryData);

  const deleteProduct = async (e) => {
    const currentId = e.currentTarget.id;
    if (window.confirm("Delete the item?")) {
      await deleteDoc(doc(db, "products", currentId));
      alert("Deleted " + currentId + " from your products");
      window.location.reload();
    } else {
      return;
    }
  };

  const deleteGalleryImage = async (e) => {
    const currentId = e.currentTarget.id;
    if (window.confirm("Delete the item?")) {
      await deleteDoc(doc(db, "gallery", currentId));
      alert("Deleted " + currentId + " from your products");
      window.location.reload();
    } else {
      return;
    }
  };

  const deleteMessage = async (e) => {
    const currentId = e.currentTarget.id;
    if (window.confirm("Delete this message?")) {
      await deleteDoc(doc(db, "messages", currentId));
      alert("Deleted " + currentId + " from your messages");
      window.location.reload();
    } else {
      return;
    }
  };

  // One the modal
  const openProductForm = () => {
    setShowProductModal((prev) => !prev);
  };

  const openGalleryForm = () => {
    setShowGalleryModal((prev) => !prev);
  };


  return (
    <>
      <div className="admin-page relative section max-container">
        <section className="messages-section mb-4">
          <div className="section-header flex-between mb-4">
            <h2 className="text-neutral-900">Messages</h2>
          </div>
          <div className="section-body grid lg:grid-cols-2 gap-2">
            {messages.map((message) => (
              <div
                className="relative border p-4 border-neutral-300 rounded-lg"
                key={message.id}
              >
                <div
                  onClick={deleteMessage}
                  id={message.id}
                  className="delete-icon p-2 bg-white rounded-full absolute right-2 top-2 cursor-pointer"
                >
                  <FaTrashAlt className="text-red-500" />
                </div>
                <div className="sender flex items-baseline">
                  <label className="text-neutral-600 text-sm me-1">
                    sender:
                  </label>
                  <p>{message.sender}</p>
                </div>
                <div className="subject flex items-baseline">
                  <label className="text-neutral-600 text-sm me-1">
                    subject:
                  </label>
                  <p>{message.subject}</p>
                </div>
                <div className="subject flex items-baseline">
                  <label className="text-neutral-600 text-sm me-1">body:</label>
                  <p>{message.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="seperator w-full my-8 bg-neutral-700 h-[1px]"></div>

        <section className="products-section">
          <div className="section-header flex-between mb-4">
            <h2 className="text-neutral-900">Products</h2>
            <button onClick={() => openProductForm()} className="outline-btn">
              Add new product
            </button>
          </div>
          <div className="section-body">
            <table className="table w-full table-auto border-2">
              <thead>
                <tr className="border">
                  <th className="border py-1 w-1/12">Id</th>
                  <th className="border py-1 w-3/12">Image</th>
                  <th className="border py-1 w-1/3">Name</th>
                  <th className="border py-1 w-12">Edit</th>
                  <th className="border py-1 w-12">Delete</th>
                </tr>
              </thead>
              <tbody>
                {productsData.map((product) => (
                  <tr key={product.id} className="border">
                    <td className="px-2 border">{product.id}</td>
                    <td className="px-2 border line-clamp-1">
                      {product.image}
                    </td>
                    <td className="px-2 border">{product.productName}</td>
                    <td className="px-2 border" id={product.id}>
                      <FaEdit className="text-primary-color mx-auto cursor-pointer" />
                    </td>
                    <td
                      className="px-2 border"
                      id={product.id}
                      onClick={deleteProduct}
                    >
                      <FaTrashAlt className="text-red-600 mx-auto cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="seperator w-full my-8 bg-neutral-700 h-[1px]"></div>

        <section className="gallery-section">
          <div className="section-header flex-between mb-4">
            <h2 className="text-neutral-900">Gallery</h2>
            <button onClick={() => openGalleryForm()} className="outline-btn">
              Add new image
            </button>
          </div>
          <div className="section-body">
            <table className="table w-full table-auto border-2">
              <thead>
                <tr className="border">
                  <th className="border py-1 w-1/12">Id</th>
                  <th className="border py-1 w-3/12">Image</th>
                  <th className="border py-1 w-1/3">Category</th>
                  <th className="border py-1 w-12">Edit</th>
                  <th className="border py-1 w-12">Delete</th>
                </tr>
              </thead>
              <tbody>
                {galleryData.map((gallery) => (
                  <tr key={gallery.id}>
                    <td className="px-2 border">{gallery.id}</td>
                    <td className="px-2 border line-clamp-1">
                      {gallery.image}
                    </td>
                    <td className="px-2 border">{gallery.category}</td>
                    <td className="px-2 border" id={gallery.id}>
                      <FaEdit className="text-primary-color mx-auto cursor-pointer" />
                    </td>
                    <td
                      className="px-2 border"
                      id={gallery.id}
                      onClick={deleteGalleryImage}
                    >
                      <FaTrashAlt className="text-red-600 mx-auto cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {showProductModal && <ProductForm openProductForm={openProductForm} />}
      {showGalleryModal && <GalleryForm openGalleryForm={openGalleryForm} />}
    </>
  );
};

export default AdminPage;
