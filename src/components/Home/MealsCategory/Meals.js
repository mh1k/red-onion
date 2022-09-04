import React from 'react';
import { useState } from 'react';
import useMeals from '../../../hooks/useMeals';
import Items from './Items';

const Meals = () => {
    const [category, setCategory] = useState("Breakfast")
    const [meals] = useMeals();

    return (
        <section className='mx-auto my-8 mx-[3%]'>
            <div className='flex text-lg font-medium  items-center w-full justify-center space-x-8'>
                <p onClick={() => setCategory("Breakfast")} className={`cursor-pointer px-4 rounded-full ${category === "Breakfast" && "bg-[#f91944] text-white py-2 transition duration-200"}`}>Breakfast</p>
                <p onClick={() => setCategory("Lunch")} className={`cursor-pointer px-4 rounded-full ${category === "Lunch" && "bg-[#f91944] text-white py-2 transition duration-200"}`}>Lunch</p>
                <p onClick={() => setCategory("Dinner")} className={`cursor-pointer px-4 rounded-full ${category === "Dinner" && "bg-[#f91944] text-white py-2 transition duration-200"}`}>Dinner</p>
            </div>
            <div className='mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    meals?.filter(meal => category === meal.category).map(meal =><Items key={meal._id} meal={meal}></Items> )
                }
            </div>
        </section>
    );
};

export default Meals;