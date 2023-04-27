import { useState } from "react";

export default function Login(){
    const [name ,setName] = useState('')
    return(
        <section className="flex items-center justify-center min-h-[90vh]">
        <div className="container max-w-md mx-auto  flex flex-col items-center justify-center px-2 mt-5 border-2 border-indigo-500">
            <div className="px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">Login</h1>
                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email" />

                <input
                    type="password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password" />

                <button
                    className="w-full text-center font-semibold py-3 rounded text-black bg-indigo-200 hover:bg-indigo-300 hover:text-white my-1"
                >Login</button>
            </div>
        </div>
    </section >
    );
}