import AboutShreejiSection from "../components/aboutpage-components/AboutShreejiSection";
import FaqSection from "../components/aboutpage-components/FaqSection";
import OurTeamSection from "../components/aboutpage-components/OurTeamSection";
import ProofOfWorkSection from "../components/aboutpage-components/ProofOfWorkSection";
import WhyUsSection from "../components/aboutpage-components/WhyUsSection";

const Aboutpage = () => {
  return (
    <div className="about-us-page">
      <AboutShreejiSection />
      <WhyUsSection />
      <ProofOfWorkSection />
      <OurTeamSection />
      <FaqSection />
    </div>
  );
};

export default Aboutpage;
