import { useSelector } from "react-redux";
import CartCard from "./CartCard";

export default function Cart() {
    const { cart } = useSelector(state => state);
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
            total += item.current_price * item.qty;
            console.log("total...", total);
        });
        return total.toFixed(2)
    }
    return (
        cart.length > 0 ?
            (
                <div className="px-5 mt-10">
                    <h1 className="text-center md:text-left text-3xl sm:text-5xl font-bold text-slate-700">Your <span className="text-indigo-500">Cart</span></h1>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                        {
                            cart.map((item) =>
                                <CartCard item={item} key={item.id} />
                            )
                        }
                        <div className="flex flex-col sm:absolute sm:bottom-10 sm:right-10 float-right">
                            <h1 className="px-7 py-1 bg-blue-200 rounded-xl text-xl font-semibold text-center">Total : <span >{getTotal()} &#36;</span></h1>
                            <button className="text-center text-white font-semibold px-7 py-1 bg-indigo-400 rounded-lg mt-5">Checkout</button>
                        </div>
                    </div>
                </div>
            )
            :
            (
                <div className="flex items-center justify-center">
                    <h1 className="text-5xl font-bold text-black mt-72">Cart is empty</h1>
                </div>
            )
    )
}