import { CircleCheck } from 'lucide-react';
import React from 'react';

const Features = ({feature}) => {
    return (
        <p className='flex gap-3 mt-2 ml-2'>
           <CircleCheck className='text-green-700'></CircleCheck> {feature}
        </p>
    );
};

export default Features;
// circle-check