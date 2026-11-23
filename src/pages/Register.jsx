import{ useState } from "react";


function Register() {

    const [name, setName] = useState ("");
    const [email, setEmail] = useState ("");
    const [ password, setPassword] = useState ("");

    function handleRegister(e) {
    e.preventDefault();

    const newUser = {
        name: name,
        email: email,
        password: password,
    };

    localStorage.setItem("user", JSON.stringify(newUser));

    alert("Registration successful!");
}

return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl p-8 shadow-sm">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800"> Create Account</h1>

          <p className="text-gray-500 mt-2"> Join your team and start managing tasks </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2"> Full Name</label>

            <input type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full border border-gray-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#2a9089] focus:border-[#2a9089]"/>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2"> Email Address </label>

            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border border-gray-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#2a9089] focus:border-[#2a9089]"/>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2"> Password </label>

            <input type="password" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full border border-gray-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#2a9089] focus:border-[#2a9089]" />
          </div>

          <button type="submit" className="w-full bg-[#2a9089] text-white py-3 rounded-full font-medium hover:bg-[#237a74] transition" > Register</button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6"> Already have an account?{" "}
          <a href="/login"className="text-[#2a9089] font-medium hover:underline"> Login </a> </p>

      </div>
    </div>
  );
}

export default Register;