import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cleanUp, fetchSingleData } from "../../Features/dataSlice";
import { add } from "../../Features/cartSlice";


export default function ProductDesc() {
  const { singleData } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  //to get id of current product
  const { id } = useParams();

  //to navigate back to homepage
  const nav = useNavigate();

  //to call the api with current product id
  useEffect(() => {
    dispatch(fetchSingleData(id));

    return () => {
      dispatch(cleanUp());
    };
  }, [dispatch, id]);

  const addToCart = (item) => {
    const copy_item = { ...item };
    copy_item.qty = 1;
    dispatch(add(copy_item));
  };
  // console.log(id)

  return (
    <div className="h-screen p-5 dark:bg-slate-900 dark:text-white">
      <div className="bg-indigo-400 inline-block px-7 py-1 rounded-3xl shadow-2xl text-center">
        <h1
          className="flex items-center font-semibold hover:cursor-pointer text-white"
          onClick={() => nav(-1)}
        >
          <AiOutlineArrowLeft className="mr-2" /> Go back
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 sm:mt-20">
        <div className="sm:mr-10 dark:bg-white">
          <img src={singleData.image} alt="product" className="w-auto h-[50vh] mx-auto" />
        </div>
        <div className="mt-20 sm:mt-0 flex flex-col justify-center items-start text-slate-700 space-y-5 dark:text-white">
          <h1 className="text-3xl font-semibold">{singleData?.name}</h1>
          <p className="text-lg sm:text-xl text-justify">
            {singleData?.description}
          </p>
          <h3 className="text-2xl font-semibold">
            Sale Price :{" "}
            <span className="text-3xl">{singleData?.price} </span> &#36;
          </h3>
          <h3 className="text-2xl font-semibold bg-indigo-300 px-7 py-2 rounded-full">
            {singleData?.category}
          </h3>
          <button
            className="bg-indigo-500 px-8 py-2 rounded-xl text-white text-xl font-semibold"
            onClick={() => addToCart(singleData)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
