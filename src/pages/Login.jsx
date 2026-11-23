import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No account found. Please register first.");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      dispatch(login(savedUser));

      alert("Login successful!");

      navigate("/dashboard");
    } else {
      alert("Invalid email or password.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">
            {" "}
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            {" "}
            Login to access your Team Task Manager
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {" "}
              Email Address{" "}
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#2a9089] focus:border-[#2a9089]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {" "}
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-[#2a9089] focus:border-[#2a9089]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2a9089] text-white py-3 rounded-full font-medium hover:bg-[#237a74] transition"
          >
            Login{" "}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          {" "}
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-[#2a9089] font-medium hover:underline"
          >
            {" "}
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;