

function Header() {
  return (
    <>
    <header>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
             <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Team Board
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Welcome back! Lets find What is happening with your team today.
          </p>
        </div>
         <div>
            
         </div>

          {/* Profile */}
          <div className="flex items-center gap-3 border-l pl-4 border-gray-200">

            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
              M
            </div>

            <div className="hidden sm:block">
              <h3 className="text-sm font-semibold text-slate-800">Mercy</h3>

              <p className="text-xs text-gray-500">Team Admin
              </p>
            </div>

          </div>

          {/* Create Task */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition">
            + Create Task
          </button>

        </div>
    </header>
    </>
  )
}

export default Header