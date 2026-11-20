import{ useState } from "react"

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
    <div>
        <h1>Create Account</h1>
        <form onSubmit={handleRegister}> 
            <div>
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Email</label>
                <input type="email" placeholder="Enter your email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label> Password</label>
                <input type="password"  placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit">Register</button>
        </form>
        </div>
  );
}

export default Register