import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizesObj = useLoaderData();
    const quizes = quizesObj.data;
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-20 m-4'>
                {
                    quizes.map(quize => <Quiz key={quize.id} quize={quize}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Home;