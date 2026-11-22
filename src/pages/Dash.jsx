import { useSelector } from "react-redux";
import Sidebar from "../components/SideBar";
import Tasks from "../components/Tasks";

const actions = [
  "Create a task",
  "Assign a task",
  "Update my progress",
  "See the team board",
];

export default function Dashboard() {
  const tasks = useSelector((state) => state.tasks);

  const today = new Date().toISOString().slice(0, 10);
  const total = tasks.length;
  const done = tasks.filter((t) => t.status === "Completed").length;
  const inProgress = tasks.filter((t) => t.status === "In Progress").length;
  const dueToday = tasks.filter(
    (t) => t.dueDate === today && t.status !== "Completed"
  ).length;
  const progress = total ? Math.round((done / total) * 100) : 0;

  const stats = [
    { label: "All tasks", value: total },
    { label: "Due today", value: dueToday },
    { label: "In progress", value: inProgress },
    { label: "Progress", value: `${progress}%` },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold">Good morning, Amina</h1>

        <div className="grid grid-cols-4 gap-3 mt-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-gray-200 rounded-xl p-4"
            >
              <strong className="block text-2xl font-medium">{s.value}</strong>
              <span className="text-gray-500 text-sm">{s.label}</span>
            </div>
          ))}
        </div>

        <h3 className="font-semibold mt-8 mb-3">What you can do</h3>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((a) => (
            <button
              key={a}
              className="bg-white border border-gray-200 rounded-xl p-4 text-left hover:bg-gray-100"
            >
              {a}
            </button>
          ))}
        </div>

        <Tasks />
      </main>
    </div>
  );
}