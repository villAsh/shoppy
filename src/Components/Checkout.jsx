import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clear } from "../Features/cartSlice";

export default function Checkout() {
    const { cart } = useSelector(state => state);
    const nav = useNavigate();
    const dispatch = useDispatch();
    const [checkout,setCheckout] = useState({
        fn : '',
        ln : '',
        country : '',
        state : '',
        city : '',
        sa : '',
        zip : '',
        phone : '',
        email : '',
        dtype : '',
    });

    const handleCheckout = (e) =>{
        e.preventDefault();
        console.log(checkout)
        alert("Your data has been submited please view console for your details!!")
        setCheckout({
        ...checkout,     
        fn : '',
        ln : '',
        country : '',
        state : '',
        city : '',
        sa : '',
        zip : '',
        phone : '',
        email : '',
        dtype : '',})
        nav("/")
        dispatch(clear())
    }
    const handleChange = (e) => {       
        setCheckout({
            ...checkout,
            [e.target.name] : e.target.value,
        })
    }
    const getTotal = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.current_price * item.qty;
        });
        return total.toFixed(2)
    }
    return (
        <div className="px-5 mt-10 flex flex-col justify-center items-center">
            <h1 className="text-center md:text-left text-3xl sm:text-5xl font-bold text-slate-700">Checkout <span className="text-indigo-500">Name</span></h1>
            <div className=" mt-10 text-2xl font-semibold text-slate-700">
                <h1>Billing <span className="text-indigo-500">Details</span></h1>
                <form method="post" className="text-lg border border-slate-700 mt-5 p-5 mb-5" onSubmit={handleCheckout}>
                    <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
                        <div className="flex flex-col">
                            <label htmlFor="fn">First Name</label>
                            <input
                                type="text"
                                value={checkout.fn}
                                onChange={handleChange}
                                className="border rounded-md border-slate-700 px-2 font-light focus:outline-1  focus:outline-slate-700"
                                name="fn"
                                required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="ln">Last Name</label>
                            <input
                                type="text"
                                value={checkout.ln}
                                onChange={handleChange}
                                className="border rounded-md px-2 border-slate-700 font-light focus:outline-1  focus:outline-slate-700"
                                name="ln"
                                required />
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="flex flex-col">
                            <label htmlFor="country">Country</label>
                            <input
                                type="text"
                                value={checkout.country}
                                onChange={handleChange}
                                className="border rounded-md border-slate-700 px-2 font-light focus:outline-1  focus:outline-slate-700"
                                name="country"
                                required />
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="state">State</label>
                            <input
                                type="text"
                                value={checkout.state}
                                onChange={handleChange}
                                className="border rounded-md border-slate-700 font-light focus:outline-1  focus:outline-slate-700"
                                name="state"
                                required />
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                value={checkout.city}
                                onChange={handleChange}
                                className="border rounded-md border-slate-700 px-2 font-light focus:outline-1  focus:outline-slate-700"
                                name="city"
                                required />
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="sa">Street Address</label>
                            <textarea
                                type="text"
                                value={checkout.sa}
                                onChange={handleChange}
                                className="border rounded-md border-slate-700 px-2 font-light focus:outline-1 focus:outline-slate-700"
                                name="sa"
                                required />
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="zip">Postal / Zip</label>
                            <input
                                type="number"
                                value={checkout.zip}
                                onChange={handleChange}
                                className="border rounded-md border-slate-700 px-2 font-light focus:outline-1  focus:outline-slate-700"
                                name="zip"
                                required />
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="number"
                                value={checkout.phone}
                                onChange={handleChange}
                                className="border rounded-md border-slate-700 px-2 font-light focus:outline-1  focus:outline-slate-700"
                                name="phone"
                                required />
                        </div>
                        <div className="flex flex-col mt-5">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                value={checkout.email}
                                onChange={handleChange}
                                className="border rounded-md border-slate-700 px-2 font-light focus:outline-1  focus:outline-slate-700"
                                name="email"
                                required />
                        </div>
                    </div>

                    <div className="mt-5">
                        <h1>Your <span className="text-indigo-500">Order</span></h1>
                        <div className="flex flex-col text-base mt-3">
                            {
                                cart.map((item) =>
                                    <div className="flex flex-row justify-between" key={item.id}>
                                        <h5>{item?.name} x {item?.qty}</h5>
                                        <h6>{item?.current_price * item?.qty} &#36;</h6>
                                    </div>
                                )
                            }
                            <div className="flex flex-row justify-between mt-2 font-bold">
                                <h5>Total </h5>
                                <h6>{getTotal()}  &#36;</h6>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h5>Payment <span className="text-indigo-500">Method</span></h5>
                            <div className="mt-3 flex flex-col">
                                <div>
                                    <input type="radio" name="dtype" value="Home Delivery"  className="mr-2" onChange={handleChange}  />
                                    <label htmlFor="hd">Home Delivery</label>
                                </div>
                                <div>
                                    <input type="radio" name="dtype" value="Credit Card" className="mr-2" onChange={handleChange}/>
                                    <label htmlFor="cc">Credit Card</label>
                                </div>
                                <div>
                                    <input type="radio" name="dtype" className="mr-2" value="UPI" onChange={handleChange}/>
                                    <label htmlFor="upi">UPI</label>
                                </div>

                            </div>
                        </div>
                       
                    </div>
                    <div className="text-center mt-5">
                        <button className="px-8 py-1 bg-indigo-500 rounded-lg text-white" ><input type="submit" value="submit"/></button>
                            {/* <input type="submit" className="px-8 py-1 bg-indigo-500 rounded-lg" value="submit"/> */}
                        </div>
                </form>
            </div>
        </div>
    );
}