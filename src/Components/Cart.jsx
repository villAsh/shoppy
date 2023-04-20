import { useDispatch, useSelector } from "react-redux";
import { minus, plus, remove } from "../Features/cartSlice";

export default function Cart() {
    const { cart } = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(cart)

    return (
        cart.length > 0 ?
            <div className="px-5 mt-10">
                <table className="text-xl font-semibold w-full table-auto">
                    <thead className="">
                        <tr className="bg-indigo-400 text-white">
                            <th className="py-3">Item</th>
                            <th className="py-3">Name</th>
                            <th className="py-3">Quantity</th>
                            <th className="py-3">Price</th>
                            <th className="py-3">Total</th>
                            <th className="py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center text-blue-400">
                        {
                            cart.map((item) => <tr key={item.id}>
                                <td className="py-3">
                                    <img src={item.images[0]} alt="product" />
                                </td>
                                <td className="py-3">
                                    {item.name}
                                </td>
                                <td className="py-3">
                                    <button onClick={() => dispatch(minus(item.id))}
                                     className="px-7 bg-indigo-400 rounded-full text-black mr-1">
                                        -
                                    </button>
                                    {item.qty}
                                    <button onClick={() => dispatch(plus(item.id))} 
                                    className="px-7 bg-indigo-400 rounded-full text-black ml-1">
                                        +
                                    </button>
                                </td>
                                <td className="py-3">
                                    {item.current_price}
                                </td>
                                <td className="py-3">
                                    {(item.current_price * item.qty).toFixed(2)}
                                </td>
                                <td>
                                    <button onClick={() => dispatch(remove(item.id))}
                                     className="px-7 py-1 rounded-lg bg-indigo-400 text-white">
                                        Remove
                                    </button>
                                </td>
                            </tr>
                            )

                        }
                    </tbody>
                </table>
            </div>
            :
            <div className="flex items-center justify-center">
                <h1 className="text-5xl font-bold text-black mt-72">Cart is empty</h1>
            </div>
    )
}