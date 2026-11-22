import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <aside className="w-64 min-h-screen bg-slate-700 text-white flex flex-col shadow-2xl">
        <div>

       
 <div className="px-6 py-8 border-b border-slate-700">
        <h2 className="text-2xl font-bold text-teal-700">
            Team Flow
        </h2>
    </div >
    <div className="flex-1">
    <nav className="px-4 py-6">
        <ul className="flex flex-col gap-3">
            
            <li><Link to="/Dash" className=" block px-5 py-3 rounded-lg text-slate-300 hover:bg-teal-600 hover:text-white transition duration-300">Dashboard</Link></li>
            <li><Link to="/Mytask" className=" block px-5 py-3 rounded-lg text-slate-300 hover:bg-teal-600 hover:text-white transition duration-300">My task</Link></li>
            <li><Link to="/Teamboard" className=" block px-5 py-3 rounded-lg text-slate-300 hover:bg-teal-600 hover:text-white transition duration-300">Team board</Link></li>
        </ul>
    </nav>
    </div>
     </div>
    </aside>
    </>
  )
}

export default Navbar