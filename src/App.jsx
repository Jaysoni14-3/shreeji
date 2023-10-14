import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

import {
  Homepage,
  Aboutpage,
  Gallerypage,
  OurServicespage,
  ContactUspage,
  OurProductspage,
} from "./Pages";
import SingleServicepage from "./Pages/SingleServicepage";
import { useEffect } from "react";
import AuthenticateAdmin from "./components/AuthenticateAdmin";
import AdminPage from "./Pages/AdminPage";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<Aboutpage />}></Route>
        <Route path="/gallery" element={<Gallerypage />}></Route>
        <Route path="/services" element={<OurServicespage />}></Route>
        <Route path="/service/:id" element={<SingleServicepage />}></Route>
        <Route path="/contact" element={<ContactUspage />}></Route>
        <Route path="/products" element={<OurProductspage />}></Route>
        <Route path="/login" element={<AuthenticateAdmin />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
