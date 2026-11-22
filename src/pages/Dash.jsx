
import Sidebar from "../components/SideBar";
import Tasks from "../components/Tasks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

const stats = [
  { label: "My tasks", value: 3 },
  { label: "Due today", value: 1 },
  { label: "My progress", value: "65%" },
  { label: "Team progress", value: "57%" },
];

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  function handleLogout() {
    dispatch(logout());
    navigate("/login");
  }

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

        <div className="grid grid-cols-4 gap-3 mt-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-gray-200 rounded-xl p-4"
            >
              <strong className="block text-2xl font-medium">
                {s.value}
              </strong>
              <span className="text-gray-500 text-sm">{s.label}</span>
            </div>
          ))}
        </div>

        <Tasks />
      </main>
    </div>
  );
}

