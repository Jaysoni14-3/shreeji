import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import "react-lazy-load-image-component/src/effects/blur.css";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

const OurProductspage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let productsList = [];
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
          productsList.push({ id: doc.id, ...doc.data() });
        });
        setProducts(productsList);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // console.log(products);

  const callUs = () => {
    window.open("tel:+91 90043 74468");
  };

  return (
    <div className="bg-neutral-100">
      <section className="our-products-page section max-container grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productId={product.id}
            productImageSrc={product.image}
            productName={product.productName}
            callUs={callUs}
          />
        ))}
      </section>
    </div>
  );
};

export default OurProductspage;
