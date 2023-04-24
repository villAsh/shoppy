import { Link } from "react-router-dom";
import { add } from "../Features/cartSlice";
import { useDispatch } from "react-redux";
export default function ProductCard({ item }) {
    const dispatch = useDispatch();
    const addToCart = (e, item) => {
        e.preventDefault();
        const copy_item = { ...item }
        copy_item.qty = 1;
        dispatch(add(copy_item));
    }
    return (
        <div className="font-semibold shadow-2xl p-5 sm:mt-10 mt-0">
            <Link to={`product/${item.id}`}>
                <div className="">
                    <img src={item?.images[0]} alt="product" className="w-auto h-[28vh] mx-auto" />
                </div>
                <div>
                    <h1 className="text-blue-500 mt-5">{item?.name}</h1>
                    <h1 className="text-red-500 line-through">{item?.old_price}</h1>
                    <h1 className="text-blue-500">{item?.current_price}</h1>
                </div>

                {/*onclick we are dispatching an action add which will add the specific item to the cart */}
                <button onClick={(e) => addToCart(e, item)}
                    className="bg-indigo-500 px-6 py-1 rounded-lg text-white font-semibold text-base ">Add to Cart</button>
            </Link>
        </div>
    );
}