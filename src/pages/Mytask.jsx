
import Navbar from "../components/Navbar";

const tasks = [
  {
    id: 1,
    title: "Design homepage",
    assigned: "Amina",
    deadline: "Nov 24, 2026",
    priority: "High",
    status: "Incomplete",
  },
  {
    id: 2,
    title: "Create login page",
    assigned: "Amina",
    deadline: "Nov 25, 2026",
    priority: "Medium",
    status: "To do",
  },
  {
    id: 3,
    title: "Develop dashboard",
    assigned: "Amina",
    deadline: "Nov 27, 2026",
    priority: "Low",
    status: "Completed",
  },
];

function MyTasks() {
  return (
    <div className="flex min-h-screen bg-gray-50">

      <Navbar />

      <main className="flex-1 p-6">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800"> My Tasks</h1>
          </div>

          <button className="bg-[#2a9089] text-white px-5 py-2 rounded-lg"> + Add Task
          </button>
        </div>

        {/* Task Summary */}
        <div className="grid grid-cols-3 gap-4 mb-8">

          <div className="bg-white border-gray-200 border p-4 rounded-lg">
            <h2 className="text-2xl font-bold">3</h2>
            <p className="text-gray-500 text-sm">Total Tasks</p>
          </div>

          <div className="bg-white border-gray-200 border p-4 rounded-lg">
            <h2 className="text-2xl font-bold text-orange-600">2</h2>
            <p className="text-gray-500 text-sm">Pending</p>
          </div>

          <div className="bg-white border-gray-200 border p-4 rounded-lg">
            <h2 className="text-2xl font-bold text-green-600">1</h2>
            <p className="text-gray-500 text-sm">Completed</p>
          </div>

        </div>

        {/* Task Table */}
        <div className="bg-white border-gray-200 border rounded-lg overflow-x-auto">

          <div className="p-4 border-gray-200 border-b">
            <h2 className="font-semibold">All My Tasks</h2>
          </div>

          <table className="w-full text-left border-collapse border border-gray-400">

            <thead className="bg-gray-50 text-gray-500 text-sm">
              <tr>
                <th className="p-4">Task</th>
                <th className="p-4">Assigned To</th>
                <th className="p-4">Deadline</th>
                <th className="p-4">Priority</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task) => (
                <tr key={task.id} className="border-t">

                  <td className="p-4 font-medium">{task.title}</td>

                  <td className="p-4 text-gray-600"> {task.assigned} </td>

                  <td className="p-4 text-gray-600"> {task.deadline} </td>

                  <td className="p-4"> {task.priority}</td>

                  <td className="p-4">
                    <span  className={`text-sm px-3 py-1 rounded-full font-medium ${
      task.status === "Completed"
        ? "bg-green-100 text-green-700"
        : task.status === "incomplete"
        ? "bg-orange-100 text-orange-700"
        : "bg-red-100 text-red-700"
    }`}
  >
    {task.status}
                    </span>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </main>
    </div>
  )
}

export default MyTasks
