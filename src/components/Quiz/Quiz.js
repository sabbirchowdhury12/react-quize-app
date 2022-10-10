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
        <div className='cart w-72 bg-slate-500'>
            <div className='cart-img'>
                <img className='w-full h-52 p-2' src={logo} alt="" />
            </div>
            <div className="cart-text p-10 text-center">
                <h2 className='text-2xl font-bold'>{name}</h2>
                <h2>{total}</h2>

            </div>
            <Link to={`quiz/${id}`}>
                <button onClick={handleClickToPlay} className='bg-gray-800 w-full py-2 rounded text-white'>Play</button>
            </Link>
        </div>
    );
};

export default Quiz;