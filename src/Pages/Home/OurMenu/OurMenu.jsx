import SectionTitle from "../../../Components/SectionTitle";
import img from "../../../assets/home/featured.jpg";

const OurMenu = () => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="bg-cover bg-center  mt-32 bg-fixed  text-white "
    >
     <div className="bg-[#151515B2]">
         <div className="pt-2 md:pt-8">
            <SectionTitle
      
        time="---Check it out---"
        title="FROM OUR MENU"
      ></SectionTitle>
         </div>

      <div className=" items-center flex  justify-center flex-col md:flex-row  md:pb-[130px] md:px-[300px] gap-4 md:gap-20 mx-auto  ">
        <img  className="w-[648px]" src={img} alt="" />
        <div className=" md:pt-14 text-center md:text-left px-4 md:px-0 space-y-1.5">
          <h3 className="text-2xl">March 20, 2023</h3>
          <p className="text-2xl">WHERE CAN I GET SOME?</p>
          <p className="text-xl">
            At our restaurant, every dish tells a story — crafted with fresh ingredients, seasoned with tradition, and served with passion. Whether you're craving a classic favorite or exploring something new, our menu offers a delightful experience for every palate. Join us and indulge in flavors that bring people together.
          </p>
          <button  className="uppercase  md:mt-16  mt-4 mb-6 md:mb-30 text-xl font-medium px-7 py-5 border-b-4 rounded-xl cursor-pointer hover:bg-gray-700">Read More</button>
        </div>
      </div>
     </div>
    </div>
  );
};

export default OurMenu;
