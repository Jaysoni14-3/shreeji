import ClientImage1 from "../../assets/Images/Clients/Betel-Leaf-Resort.jpg";
import ClientImage2 from "../../assets/Images/Clients/Kinny_sResort_Farmhouse.jpg";
import ClientImage3 from "../../assets/Images/Clients/Osawal-Buliders-Ltd.jpg";
import ClientImage4 from "../../assets/Images/Clients/Living-stones.png";
import ClientImage5 from "../../assets/Images/Clients/Ruby.png";
import ClientImage6 from "../../assets/Images/Clients/Apex.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Zoom } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const ClientSection = () => {
  const clientSectionData = {
    smallHeader: "Our clients",
    header: "Our Valuable clients",
  };

  // Array of images that are imported above
  const clientImages = [
    { id: 1, imgSrc: ClientImage1 },
    { id: 2, imgSrc: ClientImage2 },
    { id: 3, imgSrc: ClientImage3 },
    { id: 4, imgSrc: ClientImage4 },
    { id: 5, imgSrc: ClientImage5 },
    { id: 6, imgSrc: ClientImage6 },
  ];

  return (
    <div className="bg-neutral-50">
      <section className="our-clients-section section max-container text-center flex-center flex-col">
        <div className="text-container w-full ">
          <span className="small-header">{clientSectionData.smallHeader}</span>
          <h2 className="header-text">{clientSectionData.header}</h2>
        </div>
        <div className="section-body client-container w-full mt-8">
          <Swiper
            slidesPerView={2}
            centeredSlides={false}
            spaceBetween={10}
            grabCursor={true}
            freeMode={false}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Zoom, Autoplay]}
            breakpoints={{
              600: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {clientImages.map((image) => (
              <SwiperSlide className="select-none" key={image.id}>
                <div className="client-image-container w-[160px] h-auto overflow-hidden">
                  <img
                    className="bg-center object-cover w-full h-full aspect-video"
                    src={image.imgSrc}
                    alt={image.imgSrc}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default ClientSection;
