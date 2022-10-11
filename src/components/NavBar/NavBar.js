import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import './NavBar.css';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div >
            <nav className='flex items-center justify-between p-5 bg-slate-300  w-full'>

                <div className="logo">
                    <h2 className='font-bold text-2xl'>Daily <span className='text-green-800'>Quizzes</span></h2>
                </div>

                <div>
                    <ul className={`bg-slate-300 w-full duration-1000 ease-linear top-14  ${open ? 'right-0' : 'right-[-800px]'} fixed md:static`} >
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/statitic'>Statitic</NavLink>
                        <NavLink to='/blog'>Blog</NavLink>
                        {/* <NavLink to='/service'>Service</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/users'>Users</NavLink> */}
                    </ul>
                </div>

                <div onClick={() => setOpen(!open)} className="h-7 w-7 md:hidden">
                    {
                        open ? <XMarkIcon /> : <Bars3Icon />
                    }

                </div>
            </nav>

        </div>
    );
};

export default NavBar;