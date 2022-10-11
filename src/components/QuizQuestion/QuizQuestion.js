import React from 'react';
import Option from '../Option/Option';


const QuizQuestion = ({ ques }) => {
    // console.log(ques);
    const { question, correctAnswer, options } = ques;
    // console.log(options);

    return (
        <div className='my-10 mx-2 text-center shadow-lg rounded bg-violet-900 p-4	'>
            <ol className="list-decimal">
                <h2 className='text-xl font-bold text-white'>{question.slice(3, -4)}</h2>
            </ol>
            <div className='grid grid-cols-1 md:grid-cols-2   my-3'>
                {
                    options.map((option, ind) => <Option correctAnswer={correctAnswer} key={ind} option={option}></Option>)
                }
            </div>
        </div>
    );
};

export default QuizQuestion;