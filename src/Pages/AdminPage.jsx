import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import ProductForm from "../components/ProductForm";
import GalleryForm from "../components/GalleryForm";

import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../firebase";

const AdminPage = () => {
  const [productsData, setProductsData] = useState([]);

  const [showProductModal, setShowProductModal] = useState(false);
  const [showGalleryModal, setShowGalleryModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
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
    fetchData();
  }, []);

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
            <table className="table w-full table-auto">
              <thead>
                <tr className="border">
                  <th className="border py-1">Id</th>
                  <th className="border py-1">Image</th>
                  <th className="border py-1">Edit</th>
                  <th className="border py-1">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border">1</td>
                  <td className="border">Cy Ganderton</td>
                  <td className="border">
                    <FaEdit className="text-primary-color mx-auto cursor-pointer" />
                  </td>
                  <td className="border">
                    <FaTrashAlt className="text-red-600 mx-auto cursor-pointer" />
                  </td>
                </tr>
                <tr>
                  <td className="border">2</td>
                  <td className="border">Hart Hagerty</td>
                  <td className="border">
                    <FaEdit className="text-primary-color mx-auto cursor-pointer" />
                  </td>
                  <td className="border">
                    <FaTrashAlt className="text-red-600 mx-auto cursor-pointer" />
                  </td>
                </tr>
                <tr>
                  <td className="border">3</td>
                  <td className="border">Brice Swyre</td>
                  <td className="border">
                    <FaEdit className="text-primary-color mx-auto cursor-pointer" />
                  </td>
                  <td className="border">
                    <FaTrashAlt className="text-red-600 mx-auto cursor-pointer" />
                  </td>
                </tr>
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
