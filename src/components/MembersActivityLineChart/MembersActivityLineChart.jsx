import React, { use } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const activityData = [
    {
        "month": "January",
        "membersPresent": 80,
        "durationCompletion": 90,
        "successRate": 85
    },
    {
        "month": "February",
        "membersPresent": 75,
        "durationCompletion": 88,
        "successRate": 82
    },
    {
        "month": "March",
        "membersPresent": 85,
        "durationCompletion": 92,
        "successRate": 80
    },
    {
        "month": "April",
        "membersPresent": 78,
        "durationCompletion": 87,
        "successRate": 83
    },
    {
        "month": "May",
        "membersPresent": 82,
        "durationCompletion": 89,
        "successRate": 83
    },
    {
        "month": "June",
        "membersPresent": 88,
        "durationCompletion": 75,
        "successRate": 90
    },
    {
        "month": "July",
        "membersPresent": 83,
        "durationCompletion": 91,
        "successRate": 86
    },
    {
        "month": "August",
        "membersPresent": 80,
        "durationCompletion": 85,
        "successRate": 78
    },
    {
        "month": "September",
        "membersPresent": 81,
        "durationCompletion": 88,
        "successRate": 82
    },
    {
        "month": "October",
        "membersPresent": 84,
        "durationCompletion": 90,
        "successRate": 84
    },
    {
        "month": "November",
        "membersPresent": 76,
        "durationCompletion": 86,
        "successRate": 79
    },
    {
        "month": "December",
        "membersPresent": 89,
        "durationCompletion": 93,
        "successRate": 91
    }
]

const workoutData = [
    {
        "month": "January",
        "BeginnerFitness": 56,
        "WeightLoss": 76,
        "MuscleGain": 80,
        "FlexibilityMobility": 90
    },
    {
        "month": "February",
        "BeginnerFitness": 75,
        "WeightLoss": 78,
        "MuscleGain": 88,
        "FlexibilityMobility": 75
    },
    {
        "month": "March",
        "BeginnerFitness": 83,
        "WeightLoss": 74,
        "MuscleGain": 81,
        "FlexibilityMobility": 77
    },
    {
        "month": "April",
        "BeginnerFitness": 79,
        "WeightLoss": 72,
        "MuscleGain": 86,
        "FlexibilityMobility": 80
    },
    {
        "month": "May",
        "BeginnerFitness": 85,
        "WeightLoss": 81,
        "MuscleGain": 89,
        "FlexibilityMobility": 82
    },
    {
        "month": "June",
        "BeginnerFitness": 55,
        "WeightLoss": 69,
        "MuscleGain": 95,
        "FlexibilityMobility": 65
    },
    {
        "month": "July",
        "BeginnerFitness": 82,
        "WeightLoss": 73,
        "MuscleGain": 87,
        "FlexibilityMobility": 79
    },
    {
        "month": "August",
        "BeginnerFitness": 89,
        "WeightLoss": 85,
        "MuscleGain": 91,
        "FlexibilityMobility": 88
    },
    {
        "month": "September",
        "BeginnerFitness": 78,
        "WeightLoss": 75,
        "MuscleGain": 84,
        "FlexibilityMobility": 81
    },
    {
        "month": "October",
        "BeginnerFitness": 81,
        "WeightLoss": 79,
        "MuscleGain": 85,
        "FlexibilityMobility": 83
    },
    {
        "month": "November",
        "BeginnerFitness": 74,
        "WeightLoss": 71,
        "MuscleGain": 80,
        "FlexibilityMobility": 76
    },
    {
        "month": "December",
        "BeginnerFitness": 53,
        "WeightLoss": 70,
        "MuscleGain": 45,
        "FlexibilityMobility": 59
    }
]




const MembersActivityLineChart = ({membersPromise}) => {
    const membersDataRes = use(membersPromise)
    const membersWorkoutData = membersDataRes.data;
    
    //data processing for the chart 
    const membersChartData = membersWorkoutData.map((memberData, index) => {
        const member = {
            id: index,
            month: memberData.month,
            BeginnerFitness: memberData.metrics.BeginnerFitness,
            FlexibilityMobility: memberData.metrics.FlexibilityMobility,
            MuscleGain: memberData.metrics.MuscleGain,
            WeightLoss: memberData.metrics.WeightLoss
        }
        const avg = (member.BeginnerFitness + member.FlexibilityMobility + member.MuscleGain + member.WeightLoss) / 4;

        member.avg = avg;

        return member;
    })

    console.log(membersChartData)
    
    return (
        <div className='mt-16 bg-blue-200 p-8 rounded-2xl'>
            <h1 className='text-5xl font-bold text-center mb-16'>Our Member Activity Chart</h1>
            <div className=" grid gap-3 lg:grid-cols-2">
                <ResponsiveContainer style={{"border": "dashed 3px deepSkyBlue"}} width="100%" height={500}>
                    <LineChart width={800} height={300} data={activityData}>
                        <CartesianGrid strokeDasharray={"3 3"} stroke='#fff'></CartesianGrid>
                        <XAxis dataKey={"month"}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Legend ></Legend>
                        <Line type={"monotone"} dataKey={'membersPresent'} stroke='#00ff00' strokeWidth={2}></Line>
                        <Line type={"monotone"} dataKey={'durationCompletion'} stroke='blueViolet' strokeWidth={2}></Line>
                        <Line type={"monotone"} dataKey={'successRate'} stroke='#0000f0' strokeWidth={2}></Line>
                        {/* <Line > </Line> */}
                    </LineChart>
                </ResponsiveContainer>

                <ResponsiveContainer style={{"border": "dashed 3px deepSkyBlue"}} width="100%" height={500}>
                    <BarChart height={300} width={500} data={membersChartData}>
                        <CartesianGrid strokeDasharray={"3 3"} stroke='#fff'></CartesianGrid>
                        <XAxis dataKey={"month"}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                        <Bar dataKey={"avg"} fill='peru' ></Bar>
                        <Bar dataKey={"BeginnerFitness"} fill='blue' ></Bar>
                        <Bar dataKey={"WeightLoss"} fill='orange' ></Bar>
                        <Bar dataKey={"MuscleGain"} fill='gray' ></Bar>
                        <Bar dataKey={"FlexibilityMobility"} fill='tomato' ></Bar>

                    </BarChart>
                </ResponsiveContainer>

                {/* <ResponsiveContainer style={{"border": "dashed 3px deepSkyBlue"}} width="100%" height={500}>
                    <BarChart height={300} width={500} data={workoutData}>
                        <CartesianGrid strokeDasharray={"3 3"} stroke='#fff'></CartesianGrid>
                        <XAxis dataKey={"month"}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                        <Bar dataKey={"BeginnerFitness"} fill='blue' ></Bar>
                        <Bar dataKey={"WeightLoss"} fill='orange' ></Bar>
                        <Bar dataKey={"MuscleGain"} fill='gray' ></Bar>
                        <Bar dataKey={"FlexibilityMobility"} fill='tomato' ></Bar>

                    </BarChart>
                </ResponsiveContainer> */}

            </div>
        </div>
    );
};

export default MembersActivityLineChart;