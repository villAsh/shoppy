
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, filterData } from "../Features/dataSlice";


import { AiOutlineSearch } from "react-icons/ai";
import ProductCard from "./ProductCard";

export default function Products() {
    //selecting specific state using useSelector
    const { data } = useSelector((state) => state.data)
    const [term,setTerm] = useState('');
    //to dispatch fetchData action so that we can fetch products data
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const handleChange = (e) => {
        setTerm(e.target.value);
        dispatch(filterData(e.target.value))
    }
    return (
        <div className="my-5 px-5">
            <div className="flex flex-col sm:flex-row items-center justify-between">
                <h1 className="text-center md:text-left text-lg sm:text-xl md:text-5xl font-bold text-slate-700">Our <span className="text-indigo-500">Products</span></h1>
                <div className="bg-indigo-200 px-4 py-1 rounded-xl flex items-center text-xl" >
                    <AiOutlineSearch className="mr-2 text-3xl"/>
                    <input 
                        type="text" 
                        value={term}
                        onChange={(e) => handleChange(e)} 
                        className="focus:outline-none bg-indigo-200"/>
                </div>

            </div>


            <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {data?.map((item) => <ProductCard item={item} key={item.id}/>)}
            </div>
        </div>
    );
}