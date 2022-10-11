import React from 'react';
import Option from '../Option/Option';


const QuizQuestion = ({ ques }) => {
    // console.log(ques);
    const { question, correctAnswer, options } = ques;
    // console.log(options);

    return (
        <div className='m-3'>
            <ol className="list-decimal">

                {question.slice(3, -4)}

            </ol>
            <div className='grid grid-cols-1 md:grid-cols-2 border p-2 my-3'>
                {
                    options.map((option, ind) => <Option correctAnswer={correctAnswer} key={ind} option={option}></Option>)
                }
            </div>
        </div>
    );
};

export default QuizQuestion;