import React from 'react';

const ItemsCard = () => {
    

    return (
        <div className='w-[424px] bg-[#F3F3F3] border text-center'>
         <img className='h-[300px]' src="" alt="" />   
         <p className='mt-8 text-2xl font-semibold'>Caeser Salad</p>
         <p className='max-w-[345px] mt-2 mx-auto  text-sm'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <button  className="uppercase mx-auto block hover:bg-[#1F2937] hover:border-none border-[#BB8506]  text-[#BB8506]  mt-4  text-xl font-medium px-7 py-5 border-b-4 rounded-xl cursor-pointer">View Full  Menu</button>
        </div>
    );
};

export default ItemsCard;