import { useState } from "react";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <>
   {/* login card */}
    <div className=" bg-white border border-gray-200 rounded-2xl shadow-xl p-8  m-70" >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-cyan-700 tracking-wide">Team Flow</h1>
          <h3 className="text-2xl font-bold text-gray-800 ">Welcome Back!</h3>
          <p>  Login to manage your tasks and team.</p>
        </div>
        
        <div className="">
         <h1  className="text-2xl font-bold text-gray-800 mb-6">Login</h1>
         <form className="space-y-5">
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label> 
                    <input className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-200"type="email" placeholder="Enter your email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2"> Password</label>
            <input className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-200" type="password" placeholder="Enter your password" value={email} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 active:scale-95">Login</button>
         </form>
         </div>
         </div>
          </>
  );
}

export default Login