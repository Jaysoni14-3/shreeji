// import ProductImage1 from "../assets/Images/Product-images/Product-image-1.png";
// import ProductImage2 from "../assets/Images/Product-images/Product-image-2.png";
// import ProductImage3 from "../assets/Images/Product-images/Product-image-3.png";
// import ProductImage4 from "../assets/Images/Product-images/Product-image-4.png";
// import ProductImage5 from "../assets/Images/Product-images/Product-image-5.png";
// import ProductImage6 from "../assets/Images/Product-images/Product-image-6.png";
// import ProductImage7 from "../assets/Images/Product-images/Product-image-7.png";
// import ProductImage8 from "../assets/Images/Product-images/Product-image-8.png";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import "react-lazy-load-image-component/src/effects/blur.css";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

const OurProductspage = () => {
  // const products = [
  //   {
  //     id: 1,
  //     name: "Inventaa victor trio LED garden lights",
  //     imageSrc: ProductImage1,
  //   },
  //   {
  //     id: 2,
  //     name: "Swimming pool SS underwater light 1 AMP",
  //     imageSrc: ProductImage2,
  //   },
  //   {
  //     id: 3,
  //     name: "Sparkle Maxx Clarifier and conditioner for pool",
  //     imageSrc: ProductImage3,
  //   },
  //   { id: 4, name: "TCCA 90 Clorine Powder", imageSrc: ProductImage4 },
  //   {
  //     id: 5,
  //     name: "Emaux sand filter for swimming pool",
  //     imageSrc: ProductImage5,
  //   },
  //   {
  //     id: 6,
  //     name: "Swimming pool clorine feeder plastic 9 lb",
  //     imageSrc: ProductImage6,
  //   },
  //   { id: 7, name: "ABS Round Pool Drain Covers", imageSrc: ProductImage7 },
  //   {
  //     id: 8,
  //     name: "Acrylic pipeline filter 15 lph for Fi Literation",
  //     imageSrc: ProductImage8,
  //   },
  // ];

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
    window.open("tel:+91 8424936900");
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

{
  /* <div
            key={product.id}
            className="flex flex-col rounded-lg border border-neutral-200 bg-white hover:shadow-md hover:border-neutral-300 transition-opacity"
          >
            <LazyLoadImage
              effect="blur"
              className="rounded-lg p-6 max-h-[200px] w-full object-contain"
              src={product.imageSrc}
              alt={product.imageSrc}
            />
            <div className="px-4 mb-2 text-center">
              <p className=" text-lg">{product.name}</p>
            </div>
            <div className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center">
              <button
                onClick={callUs}
                className="outline-btn mt-auto mx-auto flex items-center gap-2 hover:bg-blue-100 hover:text-blue-900 transition-colors"
              >
                <FaPhoneAlt />
                Call Us
              </button>
            </div>
          </div> */
}
