import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const PlayQuiz = () => {
    const quizesData = useLoaderData();

    const quizes = quizesData.data;
    console.log(quizes);

    const { name, questions } = quizes;



    return (
        <div className=' my-10 p-2  w-full md:w-3/4 mx-auto'>
            <h2 className='text-3xl font-bold text-center my-5'>{name} Quizzes</h2>
            <div>
                {
                    questions.map(question => <QuizQuestion key={question.id} ques={question}></QuizQuestion>)
                }

            </div>

        </div>
    );
};

export default PlayQuiz;