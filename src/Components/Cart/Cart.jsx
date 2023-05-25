import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const { cart } = useSelector(state => state);
    const nav = useNavigate();
    // const [persistCart,setPersistCart] = useState([])

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
            total += item.price * item.qty;
            console.log("total...", total);
        });
        return total.toFixed(2)
    }
    return (
        cart.length > 0 ?
            (
                <div className="px-5 pt-10 dark:bg-slate-900">
                    <h1 className="text-center md:text-left text-3xl sm:text-5xl font-bold text-slate-700 dark:text-white">Your <span className="text-indigo-500">Cart</span></h1>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                        {
                            cart.map((item) =>
                                <CartCard item={item} key={item.id} />
                            )
                        }
                        <div className="flex flex-col sm:absolute sm:bottom-10 sm:right-10 float-right">
                            <h1 className="px-7 py-1 bg-blue-200 rounded-xl text-xl font-semibold text-center">Total : <span >{getTotal()} &#36;</span></h1>
                            <button
                            onClick={() => nav('checkout')}
                            className="text-center text-white font-semibold px-7 py-1 bg-indigo-400 rounded-lg mt-5">Checkout</button>
                        </div>
                    </div>
                </div>
            )
            :
            (
                <div className="md:h-[90vh] flex items-center justify-center dark:bg-slate-900 ">
                    <h1 className="text-5xl font-bold text-black mt-72 dark:text-white">Cart is empty</h1>
                </div>
            )
    )
}