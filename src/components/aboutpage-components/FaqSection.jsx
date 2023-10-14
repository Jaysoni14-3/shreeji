import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FaqSection = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "What services does Shreeji offer?",
      answer:
        "Shreeji specializes in swimming pool consulting, providing expert advice and guidance throughout the entire process of designing, building, and maintaining swimming pools. We also offer a wide range of swimming pool filtration systems and accessories, as well as jacuzzis, fountains, steam rooms, and saunas.",
    },
    {
      id: 2,
      question:
        "How can Shreeji help with swimming pool design and construction?",
      answer:
        "At Shreeji, we have a team of experienced consultants who can assist you in designing and constructing the perfect swimming pool for your needs. We provide comprehensive guidance, taking into account your preferences, space availability, budget, and other factors to create a customized swimming pool solution.",
    },
    {
      id: 3,
      question:
        "What types of swimming pool filtration systems and accessories does Shreeji offer?",
      answer:
        "Shreeji offers a diverse range of swimming pool filtration systems and accessories to ensure clean and crystal-clear water. Our selection includes high-quality filters, pumps, chemical controllers, cleaning accessories, and other essential equipment that enhance the efficiency and maintenance of your swimming pool.",
    },
    {
      id: 4,
      question:
        "Can Shreeji help with the installation and maintenance of jacuzzis, fountains, steam rooms, and saunas?",
      answer:
        "Absolutely! In addition to swimming pools, Shreeji specializes in the installation, maintenance, and repair of jacuzzis, fountains, steam rooms, and saunas. Our knowledgeable team can guide you in choosing the right products and provide professional installation services to ensure optimal performance and longevity.",
    },
    {
      id: 5,
      question:
        "Are there any specific maintenance requirements for swimming pools and related products?",
      answer:
        "Proper maintenance is essential for the longevity and performance of swimming pools, filtration systems, and related products. Shreeji offers comprehensive maintenance services and can provide guidance on routine cleaning, water testing, chemical balancing, and other essential tasks to keep your pool and associated features in top condition.",
    },
    {
      id: 6,
      question:
        "What is the typical timeline for designing and constructing a swimming pool?",
      answer:
        "The timeline for designing and constructing a swimming pool can vary depending on several factors, including the complexity of the design, site conditions, required permits, and customization. At Shreeji, we work closely with our clients to establish realistic timelines and ensure a smooth and efficient process from start to finish.",
    },
    {
      id: 7,
      question:
        "How can I get in touch with Shreeji for swimming pool consulting or product inquiries?",
      answer: `We have a dedicated customer support team ready to assist you. You can reach us by phone at +91 90043 74468 or email us at shreejigroupmumbai@gmail.com. We are also available for in-person consultations at our office located at Shop No 2, Shree Giriraj CHS, Anand Nagar, Near Rajendra Complex, Dahisar (East), Mumbai - 400068.`,
    },
    {
      id: 8,
      question:
        "Does Shreeji offer warranties on swimming pool products and installations?",
      answer:
        "Yes, we stand behind the quality of our products and installations. Shreeji offers warranties on swimming pool products, and our installations are carried out by skilled professionals to ensure the highest standards of workmanship.",
    },
  ]);

  const toggleFAQ = (index) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index].isOpen = !updatedFaqs[index].isOpen;
    setFaqs(updatedFaqs);
  };

  return (
    <section className="faq-section max-container mb-6">
      <div className="section-header mt-2 mb-4">
        <h2 className="text-center">FAQs</h2>
      </div>
      <div className="section-body grid place-content-center gap-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="faq-container overflow-hidden max-w-[700px] border border-neutral-300 rounded-lg"
          >
            <div
              className={`faq-question flex-between bg-slate-100 py-2 px-6 cursor-pointer gap-2 
              ${faq.isOpen ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <h4 className="text-neutral-900 select-none">{faq.question}</h4>
              <div className="icon-container">
                {faq.isOpen ? (
                  <FaChevronUp size={16} className="text-primary-color" />
                ) : (
                  <FaChevronDown size={16} className="text-primary-color" />
                )}
              </div>
            </div>

            {faq.isOpen && (
              <div className="faq-answer py-2 px-6">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
