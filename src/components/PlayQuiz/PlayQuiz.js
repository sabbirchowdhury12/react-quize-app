import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const PlayQuiz = () => {
    const quizesData = useLoaderData();

    const quizes = quizesData.data;

    const { id, logo, name, questions, total } = quizes;


    return (
        <div>
            <h2 className='text-3xl font-bold text-center m-3'>{name}</h2>
            <div>
                {
                    questions.map(question => <QuizQuestion key={question.id} ques={question}></QuizQuestion>)
                }
            </div>

        </div>
    );
};

export default PlayQuiz;