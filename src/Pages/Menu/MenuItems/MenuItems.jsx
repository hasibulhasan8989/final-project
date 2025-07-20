import { Link } from "react-router-dom";
import PopularItemCard from "../../../Shared/PopularItemCard/PopularItemCard";


const MenuItems = ({items,use}) => {
    const[item]=items

   
    return (
       <div className="mt-12">
        <div className="grid md:grid-cols-2 gap-6">
            {
                items.map(item=><PopularItemCard key={item._id} item={item}></PopularItemCard>)
            }
           </div>
           <Link to={`/our-shop/${use?'drinks':item?.category}`} ><button className="uppercase mx-auto block md:mt-16  mt-10 mb-16 md:mb-30 text-xl font-medium px-7 py-5 border-b-4 rounded-xl hover:bg-gray-700 cursor-pointer">ORDER YOUR FAVORITE FOOD</button></Link>
       </div>
    );
};

export default MenuItems;