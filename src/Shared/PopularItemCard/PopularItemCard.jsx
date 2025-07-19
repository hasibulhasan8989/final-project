


const PopularItemCard = ({item}) => {
    const {name,price,recipe,image}=item
    return (
        <div className="grid grid-cols-5 ">
            <img className="w-[118px]" style={{borderRadius:" 0px 200px 200px 200px"}}  src={image} alt="" />
            <div className="col-span-3 ml-2 ">
                <h1 className="cinzel text-2xl  text-[#151515] ">{name} --------</h1>
                <p className="text-lg">{recipe}</p>
            </div>
            <p className="cinzel text-2xl text-[#BB8506]">{price}</p>
        </div>
    );
};

export default PopularItemCard;