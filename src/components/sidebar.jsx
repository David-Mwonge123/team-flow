import { useState } from "react";

const links = ["Dashboard", "My tasks", "Team board", "Calendar"];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <aside className="w-52 bg-[#17505a] p-3 flex flex-col gap-1.5">
      <h2 className="text-white text-xl font-semibold mb-4 ml-2">Team Flow</h2>

      {links.map((link) => (
        <a
          key={link}
          href="#"
          className={`p-2.5 rounded-lg text-[#cfe7e3] hover:bg-[#2a7f86] hover:text-white ${
            active === link ? "bg-[#2a7f86] text-white" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            setActive(link);
          }}
        >
          {link}
        </a>
      ))}

      <div className="mt-auto p-3 bg-[#1f5f68] rounded-xl">
        <p className="text-white">Amina M.</p>
        <p className="text-[#b8dcd7] text-sm">Designer</p>
      </div>
    </aside>
  );
}