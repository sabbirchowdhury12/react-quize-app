import React from 'react';
import img from '../../img/images.jfif';

const Header = () => {
    return (
        <div className='p-5 bg-slate-500 flex flex-col md:flex-row items-center justify-between gap-5'>
            <img className='h-72 w-72 rounded-full' src={img} alt="" />
            <div className='text-white text-center'>
                <h2 className='text-2xl font-bold '>Play Quiz and Develop Your Knowledge</h2>
                <p className='my-2'>Quizzes have many benefits. It will increase your knowledge and help you learn many things.</p>
                <button className='p-2 bg-black rounded '>Get Started</button>
            </div>
        </div>
    );
};

export default Header;