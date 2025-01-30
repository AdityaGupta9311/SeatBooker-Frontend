import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <div className="w-64 min-h-screen p-4 text-white bg-gray-900">
      <h2 className="mb-6 text-2xl font-bold">Admin Panel</h2>
      <ul className="space-y-4">
        <li><Link to="/admin" className="block p-3 rounded hover:bg-gray-700">Dashboard</Link></li>
        <li><Link to="/admin/users" className="block p-3 rounded hover:bg-gray-700">Users</Link></li>
        <li><Link to="/admin/theaters" className="block p-3 rounded hover:bg-gray-700">Theaters</Link></li>
        <li><Link to="/admin/movies" className="block p-3 rounded hover:bg-gray-700">Movies</Link></li>
        <li><button onClick={handleLogout} className="w-full p-3 text-left rounded hover:bg-red-600">Logout</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;
