
import SectionTitle from '../../../Components/SectionTitle';
import img from '../../../assets/menu/pizza-bg.jpg'


const ChefRecommend = () => {
    const recommendation=[1,2,3]
    return (
        <div className='container mx-auto px-4'>
            <SectionTitle
            time='---Should Try---'
            title='CHEF RECOMMENDS'
            ></SectionTitle>
    
            <div className='grid md:grid-cols-3 grid-cols-1 md:gap-24 gap-10  '>
               {
                recommendation.map(item=><div key={item} className=' pb-10 bg-[#F3F3F3]  text-center'>
         <img className='h-[300px]' src={img} alt="" />   
         <p className='mt-8 text-2xl font-semibold'>Caeser Salad</p>
         <p className='max-w-[345px] mt-2 mx-auto  text-sm'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <button  className="uppercase mx-auto block hover:bg-[#1F2937] hover:border-none border-[#BB8506]  text-[#BB8506]  mt-4  text-xl  font-medium px-7 py-5 border-b-4 rounded-xl cursor-pointer ">View Full  Menu</button>
         </div>)
               }
                
            </div>
            
        </div>
    );
};

export default ChefRecommend;