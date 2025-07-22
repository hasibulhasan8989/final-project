

const InfoCard = ({icon,title,content}) => {
    return (
        <div className="bg-white border shadow-sm w-full md:w-1/3">
    <div className="bg-[#D1A054] text-white flex justify-center items-center h-12">
      {icon}
    </div>
    <div className="bg-gray-100 px-12 py-16 text-center">
      <h4 className="font-semibold  text-lg mb-1">{title}</h4>
      <p className="text-gray-700 whitespace-pre-line">{content}</p>
    </div>
  </div>
    );
};

export default InfoCard;