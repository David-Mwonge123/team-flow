import Sidebar from "../components/SideBar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1>Good morning, Amina</h1>
      </main>
    </div>
  );
}