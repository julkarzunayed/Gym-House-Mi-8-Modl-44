import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='mt-20 p-20 h-[500px] text-white banner-container'>
            <h1 className='text-5xl lg:text-8xl font-bold'>Welcome to Gym<span className='text-green-500 font-black'>H</span>ouse</h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illum suscipit ad sapiente deleniti quis aperiam officiis optio, nesciunt dicta!</p>
        </div>
    );
};

export default Banner;