import { useState } from "react"
import Navbar from "../components/Navbar";

function Register() {

    const [name, SetName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>

            <div >
                <Navbar />
                <div className="max-w-md mx-auto mt-10 mb-6 text-center">
                    <h1 className="text-3xl font-extrabold text-teal-700 tracking-wide" >Create Account</h1>
                </div>
                <div className="max-w-md mx-auto bg-white border border-teal-100 rounded-2xl shadow-xl p-8">
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                            <input className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                                type="text" placeholder="Enter your full name" value={name} onChange={(e) => SetName(e.target.value)} />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                            <input className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                                type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2"> Password</label>
                            <input className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                                type="password" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 active:scale-95">Register</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register