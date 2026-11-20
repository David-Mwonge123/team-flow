import Sidebar from "../components/SideBar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
     <main className="flex-1 p-6">
  <div className="flex justify-between items-center">
    <div>
      <h1 className="text-2xl font-semibold">Good morning, Amina</h1>
  
    </div>

    <button className="bg-[#2a9089] text-white px-5 py-2.5 rounded-full">
      + New task
    </button>
  </div>
</main>
    </div>
  );
}