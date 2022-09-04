import React from 'react';
import Aboutus from '../AboutUs/Aboutus';
import Banner from '../Header/Banner';
import Meals from '../MealsCategory/Meals';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Meals></Meals>
            <Aboutus></Aboutus>
        </div>
    );
};

export default Home;