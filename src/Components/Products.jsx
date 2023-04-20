
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Features/dataSlice";
import { add } from "../Features/cartSlice";
import { Link } from "react-router-dom";
export default function Products() {
    //selecting specific state using useSelector
    const {data} = useSelector((state) => state.data)

    //to dispatch fetchData action so that we can fetch products data
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    // console.log(data);

    //this function will prevent the behaviour of link component.
    const addToCart = (e,item) => {
        e.preventDefault();
        const copy_item = {...item}
        copy_item.qty = 1;
        dispatch(add(copy_item));
    }

    //mapping products data into this variable
    const ProductCard = data?.map((item) => <div key={item.id} className="font-semibold shadow-xl p-5">
        <Link to={`product/${item.id}`}>
            <img src="" alt="product" className="" />
            <h1 className="text-blue-500 ">{item.name}</h1>
            <h1 className="text-red-500 line-through">{item.old_price}</h1>
            <h1 className="text-blue-500">{item.current_price}</h1>
            {/*onclick we are dispatching an action add which will add the specific item to the cart */}
            <button onClick={(e) => addToCart(e,item)}
            className="bg-indigo-500 px-6 py-1 rounded-lg text-white font-semibold text-base">Add to Cart</button>
        </Link>
        </div>
    )
    return (
        <div className="my-5 px-5">
            <h1 className="text-center md:text-left text-3xl sm:text-5xl font-bold text-slate-700">Our <span className="text-indigo-500">Products</span></h1>
            <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {ProductCard}
            </div>
        </div>
    );
}