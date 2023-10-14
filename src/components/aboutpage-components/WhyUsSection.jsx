const WhyUsSection = () => {
  const benefitCards = [
    {
      id: 1,
      icon: "01",
      header: "Expertise",
      text:
        "We have the expertise to guide you through the entire process, from design to construction and maintenance.",
    },
    {
      id: 2,
      icon: "02",
      header: "Customized Solutions",
      text:
        "We offer tailored solutions that cater to your specific needs, ensuring that you get a swimming pool that perfectly aligns with your vision.",
    },
    {
      id: 3,
      icon: "03",
      header: "Timely Delivery",
      text:
        "Our team works diligently to adhere to agreed-upon timelines and deliver your swimming pool on schedule, without compromising on quality",
    },
    {
      id: 4,
      icon: "04",
      header: "Affordable Prices",
      text:
        "While the pricing for servicing an average swimming pool throughout all the seasons of the year may be pricy, we charge the real amount, no extras.",
    },
  ];

  return (
    <section className="why-us-section max-container mb-8">
      <div className="section-header mt-2 mb-4">
        <h2 className="text-center">Why us?</h2>
      </div>
      <div className="section-body grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {benefitCards.map((card) => (
          <div
            key={card.id}
            className="benefit-card  flex flex-col p-4 border border-neutral-200 rounded-2xl"
          >
            <div className="icon-container h-[76px] w-[76px] bg-blue-50 rounded-full mb-4 flex-center">
              <h3 className="text-blue-700">{card.icon}</h3>
            </div>
            <div className="benefit-card-body">
              <div className="benefit-header mb-4">
                <h4 className="text-neutral-950">{card.header}</h4>
              </div>
              <div className="benefit-text">
                <p className="text-neutral-700">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUsSection;
