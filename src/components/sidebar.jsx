
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const links = [
  { label: "Dashboard", filter: "All", path: "/dashboard" },
  { label: "My tasks", filter: "All", path: "/dashboard" },
  { label: "Pending", filter: "Pending", path: "/dashboard" },
  { label: "Completed", filter: "Completed", path: "/dashboard" },
  { label: "Overdue", filter: "Overdue", path: "/dashboard" },
  { label: "Calendar", path: "/calendar" },
];

export default function Sidebar({ onSelectFilter }) {
  const [active, setActive] = useState("Dashboard");
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="w-52 bg-[#17505a] p-3 flex flex-col gap-1.5">
      <h2 className="text-white text-xl font-semibold mb-4 ml-2">
        Team Flow
      </h2>

      {links.map((link) => (
        <a
          key={link.label}
          href={link.path}
          className={`p-2.5 rounded-lg text-[#cfe7e3] hover:bg-[#2a7f86] hover:text-white ${
            active === link.label ||
            (link.label === "Calendar" && location.pathname === "/calendar")
              ? "bg-[#2a7f86] text-white"
              : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            setActive(link.label);
            navigate(link.path);

            if (link.filter && onSelectFilter) {
              onSelectFilter(link.filter);
            }
          }}
        >
          {link.label}
        </a>
      ))}

      <div className="mt-auto p-3 bg-[#1f5f68] rounded-xl">
        <p className="text-white">Amina M.</p>
        <p className="text-[#b8dcd7] text-sm">Designer</p>
      </div>
    </aside>
  );
}
