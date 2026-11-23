import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/SideBar";
import Tasks from "../components/Tasks";
import { logout } from "../features/auth/authSlice";

const filters = ["All", "To Do", "In Progress", "Completed", "Overdue"];

export default function Dashboard() {
  const tasks = useSelector((state) => state.tasks);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [filter, setFilter] = useState("All");

  function handleLogout() {
    dispatch(logout());
    navigate("/login");
  }

  const today = new Date().toISOString().slice(0, 10);

  const total = tasks.length;

  const done = tasks.filter(
    (t) => t.status === "Completed"
  ).length;

  const pending = tasks.filter(
    (t) => t.status !== "Completed"
  ).length;

  const overdue = tasks.filter(
    (t) =>
      t.dueDate &&
      t.dueDate < today &&
      t.status !== "Completed"
  ).length;

  const progress = total
    ? Math.round((done / total) * 100)
    : 0;

  const stats = [
    { label: "All tasks", value: total },
    { label: "Completed", value: done },
    { label: "Pending", value: pending },
    { label: "Overdue", value: overdue },
    { label: "Progress", value: '${progress}%' },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">
            Good morning, {user?.name || "User"}
          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-5 py-2.5 rounded-full"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-5 gap-3 mt-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-gray-200 rounded-xl p-4"
            >
              <strong className="block text-2xl font-medium">
                {s.value}
              </strong>

              <span className="text-gray-500 text-sm">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#2a9089] h-2 rounded-full"
              style={{ width: ${progress}% }}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm border ${
                filter === f
                  ? "bg-[#2a9089] text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <Tasks filter={filter} />
      </main>
    </div>
  );
}
