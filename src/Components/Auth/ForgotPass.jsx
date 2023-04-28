import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "../../firebase-config";


export default function ForgotPass(){
    const [email,setEmail] = useState('');

    const nav = useNavigate();
    const setPassword = (email) => {
        if(email === ''){
            alert("Please Enter password");
        }else{
            sendPasswordResetEmail(auth,email);
            alert("please check your email!!")
            setEmail('')
        }
    
    }
    return(
        <section className="flex items-center justify-center min-h-[90vh]">
        <div className="container max-w-md mx-auto  flex flex-col items-center justify-center px-2 mt-5 border-2 border-indigo-500">
            <div className="px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">Set New Password</h1>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email" />

                <button
                    onClick={() =>setPassword(email)}
                    className="w-full text-center font-semibold py-3 rounded text-black bg-indigo-200 hover:bg-indigo-300 hover:text-white my-1"
                >
                    Reset Now
                </button>
                <div className="mt-3">
                    <p className="text-indigo-600 hover:cursor-pointer" onClick={() => nav('/login')}>Login</p>
                    <p>New to shoppy <span className="text-indigo-600 hover:cursor-pointer" onClick={() => nav('/')}>Register here</span></p>
                </div>
            </div>
        </div>
    </section >
    );
}