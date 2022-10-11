import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statitic = () => {
    const quizzes = useLoaderData().data;

    return (

        // <div className='my-20 mx-auto text-center'>
        <ResponsiveContainer width="80%" height={400} className='my-20 mx-auto'>
            <LineChart data={quizzes}>
                <Line type='monotone' dataKey="total" stroke='#82ca9d'>
                </Line>
                <XAxis dataKey='name'>
                </XAxis>
                <YAxis></YAxis>
                <Tooltip>
                </Tooltip>
            </LineChart>
        </ResponsiveContainer>

        // </div>
    );
};

export default Statitic;