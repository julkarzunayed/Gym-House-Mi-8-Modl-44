import React, { use } from 'react';
import WorkoutCart from '../WorkoutCart/WorkoutCart';

const WorkoutPlans = ({workoutProps}) => {
    const workoutData = use(workoutProps);
    // console.log(workoutData)

    return (
        <div className='mt-16 '>
            <h1 className='text-5xl text-center font-bold'>Our Workout Plans</h1>
            <p className='text-center max-w-4xl mx-auto mt-4'>The structured exercise routines designed to help individuals achieve specific fitness goals, such as weight loss, muscle gain, improved endurance, or overall health. These plans typically include a schedule of exercises, sets, repetitions, and rest periods tailored to the target outcomes.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 border-gray-400">
                {
                    workoutData.map(data => <WorkoutCart
                    data={data}
                    key={data.id}
                    ></WorkoutCart>)
                }
            </div>
        </div>
    );
};

export default WorkoutPlans;