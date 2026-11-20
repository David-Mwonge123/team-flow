import Sidebar from "../components/SideBar";

const stats = [
  { label: "My tasks", value: 3 },
  { label: "Due today", value: 1 },
  { label: "My progress", value: "65%" },
  { label: "Team progress", value: "57%" },
];

const actions = ["Create a task", "Assign a task", "Update my progress", "See the team board"];


export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
     <main className="flex-1 p-6">
  <div className="flex justify-between items-center">
    <div>
      <h1 className="text-2xl font-semibold">Good morning, Amina</h1>
  
    </div>
    <div className="grid grid-cols-4 gap-3 mt-5">
  {stats.map((s) => (
    <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-4">
      <strong className="block text-2xl font-medium">{s.value}</strong>
      <span className="text-gray-500 text-sm">{s.label}</span>
    </div>
  ))}
</div>


    <button className="bg-[#2a9089] text-white px-5 py-2.5 rounded-full">
      + New task
    </button>
  </div>
<h3 className="font-semibold mt-8 mb-3">What you can do</h3>


<div className="grid grid-cols-2 gap-3 ">
{actions.map((a) => (
  <button
    key={a}
    className="bg-white border border-gray-200 rounded-xl p-4 text-left hover:bg-gray-100">
    {a}
  </button>
))}
</div>




</main>
    </div>
  );
}