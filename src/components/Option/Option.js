
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';


const Option = ({ option, correctAnswer }) => {


    // console.log(option);
    const alertClick = (option) => {
        if (option === correctAnswer) {
            toast.success(`Welldone..!! Your answer is Correct.`, { position: 'top-center', theme: 'dark' });
        }
        else {
            toast.error(`Oppss..!! Your answer is Wrong. Correct answer is: ${correctAnswer} `, { position: 'top-center', theme: 'dark' });

        }
    };

    return (
        <div className='m-2'>
            <button onClick={() => alertClick(option)} className='p-2 bg-slate-100 w-3/4 font-medium rounded-lg'>{option}</button>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default Option;