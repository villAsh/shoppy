import { BsFillCartCheckFill,} from 'react-icons/bs'

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Profile from '../../Assets/Images/Profile.png';
import {  useState } from 'react';
import { auth } from '../../firebase-config';
import { logout } from '../../Features/userSlice';
import Switch from './Switch';
export default function Navbar() {
    const [dropdown, setDropwdown] = useState(false);
    const dispatch = useDispatch();
    const nav = useNavigate();
    //using cart.length we can check whether the cart has any products or
    const { cart, user } = useSelector((state) => state);


    //function for logout.
    const handleLogout = () => {
        dispatch(logout());
        setDropwdown(false)
        auth.signOut();
        nav('/login')
    }

    return (
        <div className="bg-blue-50 flex flex-row items-center justify-between dark:bg-slate-800">
            <div className="text-indigo-500 text-3xl px-5 py-2 font-bold">
                {
                    user?.isLoggedIn === true ? (
                        <Link to='/home'>
                            <h1 ><span className="text-5xl text-indigo-600">S</span>hoppy</h1>
                        </Link>
                    ) : (
                        <Link to=''>
                            <h1 ><span className="text-5xl text-indigo-600">S</span>hoppy</h1>
                        </Link>
                    )
                }
            </div>

            {
                user?.isLoggedIn === true ? (
                    <div className='flex flex-row items-center float-right relative'>
                        <Switch />
                        <Link to='cart'>
                            <div className='px-5 text-3xl flex items-center text-slate-800 bg-indigo-300 rounded-xl mr-5'>

                                <BsFillCartCheckFill /><span className='ml-2'>{cart.length}</span>

                            </div>
                        </Link>
                        <div className='flex flex-col items-center justify-center hover:cursor-pointer'>
                            <img src={Profile} alt='profile' className='w-[8vw] sm:w-[3vw] mr-2' onClick={() => setDropwdown(!dropdown)} />
                            {
                                dropdown === true ? (
                                    <div className='bg-blue-50 z-10 px-5 py-1 absolute top-12 right-1 text-indigo-500'>
                                        <h6 className='mr-3 font-semibold '>{user?.user?.UserName}</h6>
                                        <hr />
                                        <button onClick={handleLogout} className='mt-2 hover:text-red-500'>Logout</button>
                                    </div>
                                ) : ''
                            }

                        </div>
                    </div>
                ) : (
                    <div>
                    </div>
                )
            }

        </div>
    );
}