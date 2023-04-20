import { BsFillCartCheckFill } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Navbar() {
    //using cart.length we can check whether the cart has any products or
    const { cart } = useSelector((state) => state);
    return (
        <div className="bg-blue-50 flex flex-row items-center justify-between">
            <div className="text-indigo-500 text-3xl px-5 py-2 font-bold">
                <Link to=''>
                    <h1 ><span className="text-5xl text-indigo-600">S</span>hoppy</h1>
                </Link>
            </div>
            <Link to='cart'>
                <div className='px-5 text-3xl flex items-center text-slate-800 bg-indigo-300 rounded-xl sm:mr-5'>

                    <BsFillCartCheckFill /><span className='ml-2'>{cart.length}</span>

                </div>
            </Link>
        </div>
    );
}