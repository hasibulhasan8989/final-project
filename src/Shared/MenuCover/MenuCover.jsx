

const MenuCover = ({title,content,img}) => {
    return (
        <div
  className="hero min-h-[300px] md:min-h-[750px]"
  style={{
    backgroundImage:
      `url(${img})`,
  }}
>
  {/* <div className="hero-overlay"></div> */}
  <div className="hero-content cinzel text-white text-center">
    <div className=" md:w-4xl w-sm py-4 md:py-20  bg-[#15151599] ">
      <h1 className="mb-5  text-2xl md:text-6xl  font-bold">{title}</h1>
      <p className="mb-5">
       {content}
      </p>
      
    </div>
  </div>
</div>
    );
};

export default MenuCover;