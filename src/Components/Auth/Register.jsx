import { useState } from "react";
import { register } from "../../Features/userSlice";
import { auth, createUserWithEmailAndPassword } from "../../firebase-config";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

//user identity toolkit api if console is a some POST error
export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    let nav = useNavigate();


    const createUser = () => {
        if (!name) {
            alert("Please Enter user name")
        } else if (email < 5 || !email.includes('@')) {
            alert("Please Enter valid Email address")
        }
        else if (password < 5) {
            alert("password must be greater than 6 characters")
        }
        else {
            createUserWithEmailAndPassword(auth, email, password).then(
                (res) => {
                        dispatch(register({
                            email: res.user.email,
                            userId: res.user.uid,
                            UserName: name
                        }))
                        nav('login')
                }
            ).catch(error => alert(error))
        }

    }
    return (
        <section className="flex items-center justify-center min-h-[90vh]">
            <div className="container max-w-md mx-auto  flex flex-col items-center justify-center px-2 mt-5 border-2 border-indigo-500">
                <div className="px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name"
                         />

                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />

                    <button
                        onClick={createUser}
                        className="w-full text-center font-semibold py-3 rounded text-black bg-indigo-200 hover:bg-indigo-300 hover:text-white my-1"
                    >Create Account</button>

                </div>
            </div>
        </section >
    );
}