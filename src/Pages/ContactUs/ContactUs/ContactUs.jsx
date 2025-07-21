import { FaPhone, FaTimes } from "react-icons/fa";
import img from "../../../assets/contact/banner.jpg";
import SectionTitle from "../../../Components/SectionTitle";
import MenuCover from "../../../Shared/MenuCover/MenuCover";
import InfoCard from "../InfoCard/InfoCard";
import { FaLocationDot } from "react-icons/fa6";
import ContactFrom from "../ContactForm/ContactFrom";

const ContactUs = () => {
  const info = [
    {
      title: "PHONE",
      content: "+38 (012) 34 56 789",
      icon:<FaPhone></FaPhone>
    },
    {
      title: "ADDRESS",
      content: "+38 (012) 34 56 789",
      icon:<FaLocationDot></FaLocationDot>
    },
    {
      title: "WORKING HOURS",
      content: `Mon - Fri: 08:00 -   22:00 Sat - Sun: 10:00 - 23:00 `,
      icon:<FaTimes></FaTimes>
    },
  ];
  return (
    <div>
      <MenuCover
        img={img}
        title={"CONTACT US"}
        content={"Would you like to try a dish?"}
      ></MenuCover>
     <div className="container mx-auto">
         <SectionTitle
        time={"---Visit Us---"}
        title={"OUR LOCATION"}
      ></SectionTitle>

      <div className="flex gap-6">
        {info.map((item,idx) => (
          <InfoCard key={idx}  title={item.title} content={item.content} icon={item.icon} ></InfoCard>
        ))}
      </div>
      <SectionTitle
        time={"---Send Us a Message---"}
        title={"CONTACT FORM"}
      ></SectionTitle>
      <ContactFrom></ContactFrom>
     </div>
    </div>
  );
};

export default ContactUs;
