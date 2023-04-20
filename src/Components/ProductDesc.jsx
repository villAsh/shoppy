import { useNavigate, useParams } from "react-router-dom";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSingleData } from "../Features/dataSlice";
export default function ProductDesc(){
    const dispatch = useDispatch();
    //to get id of current product
    const {id} = useParams();

    //to navigate back to homepage
    const nav = useNavigate();
    
    //to call the api with current product id
    useEffect(() => {
        dispatch(fetchSingleData(id))
    },[])
    // console.log(id)
    return(
        <div className="m-5">
            <div className="bg-indigo-400 inline-block px-7 py-1 rounded-3xl shadow-2xl text-center">
             <h1 className="flex items-center font-semibold hover:cursor-pointer text-white" onClick={() => nav(-1)}><AiOutlineArrowLeft className="mr-2"/>  Go back</h1>
            </div>
            <div className="">

            </div>
        </div>
    );
}