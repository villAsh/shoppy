import { useDispatch } from "react-redux";
import { minus, plus, remove } from "../Features/cartSlice";
import { BsTrash } from "react-icons/bs";
import { Link} from "react-router-dom";

export default function CartCard({ item }) {
    const dispatch = useDispatch();
    const handleMinus = (e,item) => {
        e.preventDefault();
        dispatch(minus(item.id))
    }
    const handePlus = (e,item) => {
        e.preventDefault();
        dispatch(plus(item.id))
    }
    const handleDelete = (e,item) =>{
        e.preventDefault();
        dispatch(remove(item.id))
    }
    return (
        <div className="shadow-2xl p-5 rounded-lg relative">
            <Link to={`product/${item.id}`}>
            <button onClick={(e) => handleDelete(e,item)}
                className="absolute right-1 text-red-500 text-3xl"><BsTrash /></button>
            <img src={item.images[0]} className="h-[30vh] mx-auto" alt="product" />
            <h1 className="text-xl">{item.name} </h1>
            <h5 className="text-red-600 line-through text-base">{item.old_price} &#36;</h5>
            <b className="text-xl text-blue-500">{item.current_price}&#36;</b>
            <div className="flex justify-between items-center mt-5">
                <button onClick={(e) => handleMinus(e,item)}
                    className="bg-indigo-500 px-10 py-1 rounded-md font-extrabold">-</button>
                <h1 className="text-blue-500 font-extrabold">{item.qty}</h1>
                <button onClick={(e) => handePlus(e,item)}
                    className="bg-indigo-500 px-10 py-1 rounded-md font-extrabold">+</button>
            </div>
            </Link>
        </div>
    );
}