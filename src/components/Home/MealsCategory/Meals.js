import React from 'react';
import useMeals from '../../../hooks/useMeals';

const Meals = () => {
    const [meals] =useMeals();
    console.log(meals);
    return (
        <section className='mx-auto mt-8 sm:mx-[3%]'>
            <div className='flex text-lg font-medium  items-center w-full justify-center space-x-10'>
                <p>Breakfast</p>
                <p className=''>Lunch</p>
                <p>Dinner</p>
            </div>
        </section>
    );
};

export default Meals;