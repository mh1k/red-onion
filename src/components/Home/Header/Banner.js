import React from 'react';

const Banner = () => {
    return (

        <section className="bg-[url('https://i.ibb.co/RbrFxZx/bannerbackground.png')] h-[85vh] bg-center bg-[#fcf4e0] bg-cover bg-no-repeat">
            <div className='flex items-center text-center justify-center flex-col h-full w-auto'>
                <h1 className='text-3xl sm:text-5xl font-semibold text-[#f91944]'>Best food waiting for your belly</h1>
                <div className='rounded-full p-1 mx-auto mt-8 bg-white sm:w-[35%] sm:mt-10 flex items-center'>
                    <input className='rounded-full w-full px-4 py-2 focus:outline-none bg-transparent' type="text" name="" id="" />
                    <button className='py-3 px-4 w-1/3 rounded-full text-white  active:ring-red-200 active:ring-4 active:scale-110  duration-200 transition ease-in-out bg-[#f91944]'>Search</button>
                </div>
            </div>

        </section>


    );
};

export default Banner;