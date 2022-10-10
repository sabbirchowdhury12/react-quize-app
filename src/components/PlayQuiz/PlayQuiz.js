import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const PlayQuiz = () => {
    const quizesData = useLoaderData();

    const quizes = quizesData.data;


    return (
        <div>
            {
                quizes.map(quize => <QuizQuestion></QuizQuestion>)
            }
        </div>
    );
};

export default PlayQuiz;