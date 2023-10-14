import { Link } from "react-router-dom";
import MemberImage1 from "../../assets/Images/lalit.jpg";
import MemberImage2 from "../../assets/Images/mayank.jpg";
import MemberImage3 from "../../assets/Images/sachin.jpg";

import { FaInstagram, FaPhoneAlt } from "react-icons/fa";

const OurTeamSection = () => {
  const memberCardData = [
    {
      id: 1,
      image: MemberImage1,
      name: "Lalit Joshi",
      instgramLink:
        "https://www.instagram.com/lalitjjoshi/?igshid=MzRlODBiNWFlZA%3D%3D",
      phoneNumber: 9004374468,
    },
    {
      id: 2,
      image: MemberImage2,
      name: "Mayank Upadhyay",
      instgramLink:
        "https://www.instagram.com/mayank_30_/?igshid=MzNlNGNkZWQ4Mg%3D%3D",
      phoneNumber: 7977171820,
    },
    {
      id: 3,
      image: MemberImage3,
      name: "Sachin Mohite",
      instgramLink:
        "https://www.instagram.com/sachin_2601/?igshid=OGQ5ZDc2ODk2ZA%3D%3D",
      phoneNumber: 8097798241,
    },
  ];

  return (
    <section className="out-team-section section max-container">
      <div className="section-header mt-2 mb-4">
        <h2 className="text-center">Meet our team</h2>
      </div>
      <div className="section-body grid min-[425px]:grid-cols-2 lg:grid-cols-3 gap-6">
        {memberCardData.map((member) => (
          <div
            key={member.id}
            className="member-card bg-neutral-100 rounded-lg overflow-hidden"
          >
            <div className="image-container h-[350px]">
              <img
                className="w-full h-full object-cover bg-top"
                src={member.image}
                alt={member.name}
              />
            </div>
            <div className="member-details flex-between p-4">
              <p className="member-name">{member.name}</p>
              <div className="contact-links flex gap-2">
                <Link
                  to={member.instgramLink}
                  target="_blank"
                  className="instagram-icon w-12 h-12 flex-center bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                >
                  <FaInstagram className="text-primary-color" size={16} />
                </Link>
                <Link
                  className="phone-icon w-12 h-12 flex-center bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                  target="_blank"
                  to={member.phoneNumber}
                >
                  <FaPhoneAlt className="text-primary-color" size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeamSection;
