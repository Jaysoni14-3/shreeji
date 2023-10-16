import HeroImage from "../../assets/Images/Hero-image.jpg";

const HeroSection = () => {
  const heroSectionData = {
    smallHeader: "IMMERSE YOURSELF INTO AQUATIC LUXURY",
    header:
      "Dive into luxury and relaxation with Shreeji: Your premier swimming pool destination.",
    bodyText:
      "With our expertise in swimming pool consultancy and exceptional filtration systems, we offer a seamless experience from concept to completion. Let us bring your vision to life",
  };

  return (
    // Hero Section
    <div className="homepage">
      <section className="hero-section relative flex h-[550px]">
        <div className="text-container max-container w-full z-50 my-auto">
          <div className="max-w-[600px]">
            <div className="hero-text-header section-header">
              <span className="small-header text-[#CFE9FC]">
                {heroSectionData.smallHeader}
              </span>
              <h1 className="text-white mt-2 mb-4">{heroSectionData.header}</h1>
            </div>
            <div className="section-body mb-8">
              <p className="text-neutral-300">{heroSectionData.bodyText}</p>
            </div>
            <button className="primary-btn">
              <a href="tel:+91 90043 74468">Call us</a>
            </button>
          </div>
        </div>
        <div className="hero-image-container absolute inset-0 w-full h-full ">
          <img
            src={HeroImage}
            className="h-full w-full object-cover bg-center bg-no-repeat"
            alt="HeroImage"
          />
          <div className="overlay absolute inset-0"></div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
