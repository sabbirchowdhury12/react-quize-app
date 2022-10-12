import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';



const QuizQuestion = ({ ques }) => {


    const { question, correctAnswer, options } = ques;

    const notify = () => toast.info(`Correct answer is: ${correctAnswer}`, { position: 'top-center', theme: 'dark' });

    return (
        <div className='relative my-10 mx-2 text-center shadow-lg rounded bg-violet-900 p-8	'>
            <ol className="list-decimal">
                <h2 className='text-xl font-bold text-white'>{question.slice(3, -4)}</h2>
            </ol>
            <div className='grid grid-cols-1 md:grid-cols-2   my-3'>
                {
                    options.map((option, ind) => <Option correctAnswer={correctAnswer} key={ind} option={option}></Option>)
                }
            </div>
            <button onClick={notify}> <EyeIcon className="absolute top-2  right-4 text-white h-6 w-6"></EyeIcon></button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuizQuestion;