import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';



const PricingOptions = ({ pricingData }) => {
    const pricingPromise = use(pricingData)
        // console.log(pricingPromise)
    return (
        <div>
            <h2 className='text-5xl text-center font-bold mt-16'>Get Our Membership</h2>
            <div className="grid lg:grid-cols-3 gap-5 mt-12">
                {
                    pricingPromise.map(card => <PricingCard 
                        key={card.id}
                        card={card}></PricingCard> )
                }
            </div>
        </div>
    );
};

export default PricingOptions;