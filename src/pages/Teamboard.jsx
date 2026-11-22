
import Navbar from "../components/Navbar";

const members = [
    { id: 1, name: "Sabiha", role: "Team Leader"},
    { id: 2, name: "Farhia", role: "create login page"},
    { id: 3, name: "Mercy", role: "UI/UX Designer"},
    { id: 4, name: "David", role: "Developer work on redux" },
    { id: 5, name: "Tamila", role: "Dashboard"},
     { id: 5, name: "Noah", role: "Developer"},
];

const teamTasks = [
    {
        id: 1,
        title: "Design homepage",
        assigned: "Mercy",
        deadline: "Nov 23, 2026",
        priority: "High",
        status: "Completed",
    },
    {
        id: 2,
        title: "Develop login page",
        assigned: "Farhia",
        deadline: "Nov 23, 2026",
        priority: "Medium",
        status: "In progress",
    },
   
    {
        id: 4,
        title: "Redux",
        assigned: "David",
        deadline: "Nov 23, 2026",
        priority: "high",
        status: "Incomplete",
    },
    {
        id: 5,
        title: "Build dashboard",
        assigned: "Tamila",
        deadline: "Nov 23, 2026",
        priority: "Medium",
        status: "Completed",
    },
    {
        id: 6,
        title: "Build Calender page",
        assigned: "Noah",
        deadline: "Nov 23, 2026",
        priority: "Medium",
        status: "Incompleted",
    },
];

function Teamboard() {
    return (
        <div className="flex min-h-screen bg-gray-50">

            <Navbar />

            <main className="flex-1 p-6">

                {/* Heading */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-800"> Teamboard </h1>
                    <p className="text-gray-500 mt-1"> Monitor your team's activities and progress. </p>
                </div>

                {/* Team overview */}
                <div className="grid grid-cols-3 gap-4 mb-8">

                    <div className="bg-white border-gray-200 border p-5 rounded-xl">
                        <h2 className="text-2xl font-bold">6</h2>
                        <p className="text-gray-500 text-sm">Team Members</p>
                    </div>

                    <div className="bg-white border-gray-200 border p-5 rounded-xl">
                        <h2 className="text-2xl font-bold">6</h2>
                        <p className="text-gray-500 text-sm">Total Tasks</p>
                    </div>

                    <div className="bg-white border-gray-200 border p-5 rounded-xl">
                        <h2 className="text-2xl font-bold text-green-600">2</h2>
                        <p className="text-gray-500 text-sm">Completed Tasks</p>
                    </div>

                </div>

                {/* Team members */}
                <div className="bg-white border-gray-200 border rounded-xl mb-8">

                    <div className="p-5 border-b">
                        <h2 className="font-semibold text-gray-800">
                            Team Members
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">

                        {members.map((member) => (
                            <div
                                key={member.id}
                                className="border rounded-lg p-4 border-gray-200 flex items-center gap-3"
                            >

                                <div className="w-11 h-11 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold">
                                    {member.name.charAt(0)}
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        {member.name}
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        {member.role}
                                    </p>

                                    <p className="text-xs text-gray-400 mt-1">
                                        {member.tasks} assigned tasks
                                    </p>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>

                {/* Team tasks */}
                <div className="bg-white border rounded-xl border-gray-200 overflow-x-auto">

                    <div className="p-5 border-b">
                        <h2 className="font-semibold text-gray-800">
                            Team Tasks
                        </h2>
                    </div>

                    <table className="w-full text-left ">

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
                            {teamTasks.map((task) => (
                                <tr key={task.id} className="border-t hover:bg-gray-50">

                                    <td className="p-4 font-medium text-gray-800">
                                        {task.title}
                                    </td>

                                    <td className="p-4 text-gray-600">
                                        {task.assigned}
                                    </td>

                                    <td className="p-4 text-gray-600">
                                        {task.deadline}
                                    </td>

                                    <td className="p-4 text-gray-600">
                                        {task.priority}
                                    </td>

                                    {/* Status colors */}
                                    <td className="p-4">
                                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${task.status === "Completed"
                                                ? "bg-green-100 text-green-700"
                                                : task.status === "In progress"
                                                    ? "bg-blue-100 text-blue-700"
                                                    : task.status === "Pending"
                                                        ? "bg-orange-100 text-orange-700"
                                                        : "bg-red-100 text-red-700"
                                            }`}>
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

export default Teamboard
