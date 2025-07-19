import React from 'react';

const SectionTitle = ({title,time}) => {
    return (
        <div className='text-center my-12'>
           <h2 className='text-[#D99904] text-lg'> {time}</h2>
           <p className='text-4xl border-y-4 mt-4 border-gray-300 max-w-[424px] mx-auto py-4'>{title}</p>
        </div>
    );
};

export default SectionTitle;