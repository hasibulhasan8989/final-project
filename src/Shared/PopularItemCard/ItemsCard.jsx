import React from 'react';

const ItemsCard = ({item}) => {
    
 const{name,recipe,price,image}=item
    return (
        <div className=' rounded-2xl  overflow-auto bg-[#F3F3F3] relative  text-center'>
         <img className='h-[300px]' src={image} alt="" />  
         <p className='absolute right-6 font-semibold text-lg rounded-2xl bg-[#111827] text-orange-500 px-4 py-1 top-4'>$ {price}</p> 

         <p className='mt-8 text-2xl font-semibold'>{name}</p>
         <p className='max-w-[345px] mt-2 mx-auto  text-sm'>{recipe}</p>
          <button  className="uppercase mx-auto mb-4 block hover:bg-[#1F2937] hover:border-none border-[#BB8506]  text-[#BB8506]  mt-4  text-xl font-medium px-7 py-5 border-b-4 rounded-xl cursor-pointer">add to cart</button>
        </div>
    );
};

export default ItemsCard;