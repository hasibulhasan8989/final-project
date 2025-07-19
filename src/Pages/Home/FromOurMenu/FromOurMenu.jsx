import { useEffect, useState } from "react";
import PopularItemCard from "../../../Shared/PopularItemCard/PopularItemCard";
import SectionTitle from "../../../Components/SectionTitle";


const FromOurMenu = () => {
    const [items,setItems]=useState([])

    useEffect(()=>{
     fetch('menu.json')
     .then(res=>res.json())
     .then(data=>{
       const popularItem=data.filter(item=>item.category==='popular')
       setItems(popularItem)
       console.log(popularItem)
     })
    },[])

    return (
        <div className="container mx-auto px-4">
            <SectionTitle
            time='---Check it out---'
            title='FROM OUR MENU'
            ></SectionTitle>
           <div className="grid md:grid-cols-2 gap-6">
            {
                items.map(item=><PopularItemCard item={item}></PopularItemCard>)
            }
           </div>
           <button  className="uppercase mx-auto block md:mt-16  mt-10 mb-16 md:mb-30 text-xl font-medium px-7 py-5 border-b-4 rounded-xl hover:bg-gray-700 cursor-pointer">View Full  Menu</button>
           <p className="md:py-[96px] py-12 cinzel md:text-5xl text-4xl font-medium text-center bg-black text-white ">
            Call Us: +88 01316782380
           </p>
        </div>
    );
};

export default FromOurMenu;