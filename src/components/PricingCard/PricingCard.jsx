import React from 'react';

const PricingCard = ({card}) => {
    const {name, price, features, description} = card
    return (
        <div>
            <h1 className="text-4xl">{name}</h1>
            <h4 className="text-3xl">{price}</h4>
            <div className="">
                <p className="">{description}</p>
            </div>
        </div>
    );
};

export default PricingCard;