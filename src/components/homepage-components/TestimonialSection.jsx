import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Zoom } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { FaQuoteRight } from "react-icons/fa";

const TestimonialSection = () => {
  const testimonialSectionData = {
    smallHeader: "Testimonial",
    header: "What people says about us",
  };

  const reviews = [
    {
      id: 1,
      reviewText:
        "We are absolutely thrilled with the new pool that Shreeji Swimming Pool built for us. The team was professional, knowledgeable, and went above and beyond to ensure that every detail was perfect. The pool has completely transformed our backyard and has become the focal point of our home. Thank you for making our dreams come true!",
      userName: "Eva Cruz",
    },
    {
      id: 2,
      reviewText:
        "We have been using the maintenance and cleaning services provided by this swimming pool company for several years now, and we couldn't be happier. The technicians are always on time, thorough, and professional. Our pool looks and feels amazing, and we know that we can always count on them to keep it in top condition.",
      userName: "Navin Raman",
    },
    {
      id: 3,
      reviewText:
        "I recently hired this swimming pool company to renovate our outdated pool, and I was blown away by the results. The team was incredibly creative and came up with a design that exceeded our expectations. The entire process was smooth and stress-free, and the finished product is nothing short of stunning. I would highly recommend this company to anyone looking to upgrade their pool.",
      userName: "Shiva Balwinder",
    },
    {
      id: 4,
      reviewText:
        "We are absolutely thrilled with the new pool that Shreeji Swimming Pool built for us. The team was professional, knowledgeable, and went above and beyond to ensure that every detail was perfect. The pool has completely transformed our backyard and has become the focal point of our home. Thank you for making our dreams come true!",
      userName: "Ajit Shresth",
    },
    {
      id: 5,
      reviewText:
        "We are absolutely thrilled with the new pool that Shreeji Swimming Pool built for us. The team was professional, knowledgeable, and went above and beyond to ensure that every detail was perfect. The pool has completely transformed our backyard and has become the focal point of our home. Thank you for making our dreams come true!",
      userName: "Anil Shah",
    },
    {
      id: 6,
      reviewText:
        "We are absolutely thrilled with the new pool that Shreeji Swimming Pool built for us. The team was professional, knowledgeable, and went above and beyond to ensure that every detail was perfect. The pool has completely transformed our backyard and has become the focal point of our home. Thank you for making our dreams come true!",
      userName: "John doe",
    },
  ];

  return (
    <div className="bg-neutral-100">
      <section className="testimonial-section section max-container text-center flex-center flex-col">
        <div className="text-container w-full ">
          <span className="small-header">
            {testimonialSectionData.smallHeader}
          </span>
          <h2 className="header-text">{testimonialSectionData.header}</h2>
        </div>
        <div className="section-body w-full my-4">
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            spaceBetween={16}
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
              500: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="testimonial-card py-6 px-4 flex justify-start flex-col bg-white border border-neutral-500 rounded-2xl">
                  <h2 className="testimonial-icon mb-2">
                    {" "}
                    <FaQuoteRight className="text-primary-color" size={24} />
                  </h2>
                  <div className="testimonial-text w-full mb-6">
                    <p className="text-neutral-900 text-start overflow-hidden">
                      {review.reviewText}
                    </p>
                  </div>
                  <div className="poster-name mt-auto">
                    <h4 className="text-start">{review.userName}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
