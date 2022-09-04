import React from 'react';

const Items = ({meal}) => {
    return (
        <div className='p-4 group hover:scale-105 border-gray-200 border transform-gpu transition duration-700 rounded-lg ease-in-out hover:shadow-xl'>
            <h3 className='bg-[#fcf4e0] border border-[#f91944] py-1 px-5 text-[#f91944] w-fit rounded-full'>{meal?.category}</h3>
            <img className='group-hover:scale-105 transition duration-700 mx-auto w-[70%] ' src={meal?.mealImg} alt="" />
            <div className='text-center mt-2 space-y-2'>
                <h2 className='text-lg font-medium text-gray-900'>{meal?.mealName}</h2>
                <p className='text-[1rem] text-gray-600'>{meal?.mealDetails.slice(0,50)}</p>
                <h3 className='text-2xl font-bold text-gray-900'>${meal?.price}</h3>
                <button className='bg-[#f91944] text-lg text-white px-4 py-2 rounded-full active:scale-110 transition duration-200'>Order Now</button>
            </div>
        </div>
    );
};

export default Items;