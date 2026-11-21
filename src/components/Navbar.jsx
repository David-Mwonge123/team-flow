
function Navbar() {
  return (
    <>
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col shadow-lg">
 <div lassName="px-6 py-6 border-b border-slate-700">
        <h2 className="text-2xl font-bold text-blue-400">
            Team Flow
        </h2>
    </div >
    <nav className="flex flex-col gap-2 px-4 py-6">
        <ul>
            <a href="#"className="px-4 py-3 rounded-lg text-slate-300 hover:bg-blue-600 hover:text-white transition duration-300">Login</a>
            <a href="#" className="px-4 py-3 rounded-lg text-slate-300 hover:bg-blue-600 hover:text-white transition duration-300">Register</a>
            <a href="#" className="px-4 py-3 rounded-lg text-slate-300 hover:bg-blue-600 hover:text-white transition duration-300">Dashboard</a>
            <a href="#" className="px-4 py-3 rounded-lg text-slate-300 hover:bg-blue-600 hover:text-white transition duration-300">My task</a>
            <a href="#" className="px-4 py-3 rounded-lg text-slate-300 hover:bg-blue-600 hover:text-white transition duration-300">Team board</a>
        </ul>
    </nav>
    </aside>
    </>
  )
}

export default Navbar