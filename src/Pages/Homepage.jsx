import AboutSection from "../components/homepage-components/AboutSection";
import ClientSection from "../components/homepage-components/ClientSection";
import ContactSection from "../components/homepage-components/ContactSection";
import GallerySection from "../components/homepage-components/GallerySection";
import HeroSection from "../components/homepage-components/HeroSection";
import ServicesSection from "../components/homepage-components/ServicesSection";
import TestimonialSection from "../components/homepage-components/TestimonialSection";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClientSection />
      <GallerySection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
};

export default Homepage;
