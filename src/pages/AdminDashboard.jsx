import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

const AdminDashboard = () => {
  const [stats, setStats] = useState({ users: 0, theaters: 0, movies: 0 });

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/stats", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setStats(res.data))
      .catch((err) => console.error("Error fetching stats:", err));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen p-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800">Admin Dashboard</h2>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <Card title="Users" count={stats.users} color="bg-blue-500" />
          <Card title="Theaters" count={stats.theaters} color="bg-green-500" />
          <Card title="Movies" count={stats.movies} color="bg-purple-500" />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, count, color }) => (
  <div className={`p-6 rounded-lg shadow-md text-white ${color}`}>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-3xl">{count}</p>
  </div>
);

export default AdminDashboard;
