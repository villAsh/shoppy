
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Features/dataSlice";


import { AiOutlineSearch } from "react-icons/ai";
import ProductCard from "./ProductCard";

export default function Products() {
    //selecting specific state using useSelector
    const { data } = useSelector((state) => state.data)

    //to dispatch fetchData action so that we can fetch products data
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    // console.log(data);

    //this function will prevent the behaviour of link component.


    //mapping products data into this variable
    
    return (
        <div className="my-5 px-5">
            <div className="flex items-center justify-between">
                <h1 className="text-center md:text-left text-3xl sm:text-5xl font-bold text-slate-700">Our <span className="text-indigo-500">Products</span></h1>
                <div className="bg-indigo-200 px-4 py-1 rounded-xl flex items-center text-xl" >
                    <AiOutlineSearch className="mr-2 text-3xl"/>
                    <input type="text" className="bg-indigo-200 focus:outline-none"/>
                </div>

            </div>


            <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {data?.map((item) => <ProductCard item={item} key={item.id}/>)}
            </div>
        </div>
    );
}