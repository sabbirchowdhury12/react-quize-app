import React from 'react';

const Option = ({ option, correctAnswer }) => {
    // console.log(option);
    const alertClick = (option) => {
        if (option === correctAnswer) {
            alert('succes');
        }
        else {
            alert('Wrong', correctAnswer);
        }
    };

    return (
        <div className='m-2'>
            <button onClick={() => alertClick(option)} className='p-2 bg-slate-100 w-3/4 font-medium rounded-lg'>{option}</button>
        </div>
    );
};

export default Option;