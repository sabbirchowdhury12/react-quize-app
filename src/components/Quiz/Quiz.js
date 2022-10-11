import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Quiz.css';

const Quiz = ({ quize }) => {

    const { id, name, logo, total } = quize;

    const navigate = useNavigate();
    const handleClickToPlay = () => {
        navigate(`quiz/${id}`);
    };
    return (
        <div className='cart w-full lg:w-3/4  bg-slate-900 rounded'>
            <img className='w-full h-52 p-2' src={logo} alt="" />
            <div className="cart-text text-white p-10 text-center">
                <h2 className='text-2xl font-bold'>{name}</h2>
                <h2>Total Quiz: {total}</h2>

            </div>
            <Link to={`quiz/${id}`}>
                <button onClick={handleClickToPlay} className='bg-violet-900 font-bold text-xl w-full py-2 rounded text-white hover:bg-violet-800'>Play</button>
            </Link>
        </div>
    );
};

export default Quiz;