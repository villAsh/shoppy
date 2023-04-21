import { useDispatch, useSelector } from "react-redux";
import { minus, plus, remove } from "../Features/cartSlice";
import { BsTrash } from "react-icons/bs";

export default function Cart() {
    const { cart } = useSelector(state => state);
    // const [persistCart,setPersistCart] = useState([])
    const dispatch = useDispatch();
    // console.log(persistCart)

    // useEffect(() =>{
    //     const new_cart = JSON.parse(localStorage.getItem('item'));
    //     if(new_cart){
    //         setPersistCart(new_cart);
    //         console.log("persist",new_cart)
    //     }

    // },[])

    //get the total price
    const getTotal = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.current_price * item.qty;
            console.log("total...", total);
        });
        return total.toFixed(2)
    }
    return (
        cart.length > 0 ?
            <div className="px-5 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {
                    cart.map((item) => <div className="bg-indigo-100 p-5 rounded-lg relative">
                        <button onClick={() => dispatch(remove(item.id))} 
                        className="absolute right-1 text-red-500 text-3xl"><BsTrash /></button>
                        <img src={item.images[0]} className="h-[30vh]" alt="product" />
                        <h1 className="text-xl">{item.name} </h1>
                        <h5 className="text-red-600 line-through text-xs">{item.old_price} &#36;</h5>
                        <marquee className="text-xl">{item.current_price}&#36;</marquee>
                        <div className="flex justify-between items-center mt-5">
                            <button onClick={() => dispatch(minus(item.id))} 
                            className="bg-indigo-500 px-10 py-1 rounded-md font-extrabold">-</button>
                            <h1>{item.qty}</h1>
                            <button onClick={() => dispatch(plus(item.id))}
                            className="bg-indigo-500 px-10 py-1 rounded-md font-extrabold">+</button>
                        </div>
                    </div>
                    )

                }
                <div className="flex flex-col sm:absolute sm:bottom-10 sm:right-10 float-right">
                    <h1 className="px-7 py-1 bg-blue-200 rounded-xl text-xl font-semibold text-center">Total : <span >{getTotal()} &#36;</span></h1>
                    <button className="text-center text-white font-semibold px-7 py-1 bg-indigo-400 rounded-lg mt-5">Checkout</button>
                </div>
            </div>
            :
            <div className="flex items-center justify-center">
                <h1 className="text-5xl font-bold text-black mt-72">Cart is empty</h1>
            </div>
    )
}