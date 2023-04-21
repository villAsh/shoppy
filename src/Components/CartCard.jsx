import { useDispatch } from "react-redux";
import { minus, plus, remove } from "../Features/cartSlice";
import { BsTrash } from "react-icons/bs";

export default function CartCard({ item }) {
    const dispatch = useDispatch();
    return (
        <div className="bg-indigo-100 p-5 rounded-lg relative">
            <button onClick={() => dispatch(remove(item.id))}
                className="absolute right-1 text-red-500 text-3xl"><BsTrash /></button>
            <img src={item.images[0]} className="h-[30vh]" alt="product" />
            <h1 className="text-xl">{item.name} </h1>
            <h5 className="text-red-600 line-through text-base">{item.old_price} &#36;</h5>
            <b className="text-xl">{item.current_price}&#36;</b>
            <div className="flex justify-between items-center mt-5">
                <button onClick={() => dispatch(minus(item.id))}
                    className="bg-indigo-500 px-10 py-1 rounded-md font-extrabold">-</button>
                <h1>{item.qty}</h1>
                <button onClick={() => dispatch(plus(item.id))}
                    className="bg-indigo-500 px-10 py-1 rounded-md font-extrabold">+</button>
            </div>
        </div>
    );
}