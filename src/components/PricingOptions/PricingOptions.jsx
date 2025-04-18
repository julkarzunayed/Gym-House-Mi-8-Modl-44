import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';



const PricingOptions = ({ pricingData }) => {
    const pricingPromise = use(pricingData)
        console.log(pricingPromise)
    return (
        <div>
            <h2 className='text-5xl'>Get Our Membership</h2>
            <div className="">
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