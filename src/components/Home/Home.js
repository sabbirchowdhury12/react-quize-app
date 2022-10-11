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
            <div className='bg-violet-100'>
                <div className='grid grid-cols-1  gap-10 md:grid-cols-2 p-2  py-10 sm:px-14 lg:w-3/4 lg:mx-auto'>
                    {
                        quizes.map(quize => <Quiz key={quize.id} quize={quize}></Quiz>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;