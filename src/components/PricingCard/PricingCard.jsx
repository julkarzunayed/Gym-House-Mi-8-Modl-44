import React from 'react';
import Features from './Features';

const PricingCard = ({card}) => {
    const {name, price, features, description} = card
    return (
        <div className= 'flex flex-col bg-green-200 text-black p-4 rounded-2xl'>
            <h1 className="text-5xl font-bold mb-2">{name}</h1>
            <h4 className="text-3xl">{price}</h4>
            <div className="flex-1 bg-green-100 p-3 rounded-xl mt-10">
                <p className="">{description}</p>
                {
                    features.map((feature, index) => <Features 
                    key={index}
                    feature={feature}></Features>)
                }
            </div>
            <button className='btn w-full mt-4 rounded-xl bg-gray-700 text-white text-xl p-5 font-bold' >Subscribe</button>
        </div>
    );
};

export default PricingCard;