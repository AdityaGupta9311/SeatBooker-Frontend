import 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import LoginTheater from './pages/LoginTheater';
import RegisterTheater from './pages/RegisterTheater';
import UserDashboard from './pages/UserDashboard';
import UserProfile from './pages/UserProfile';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/theater/login" element={<LoginTheater />} />
        <Route path="/theater/register" element={<RegisterTheater />} />
        <Route path="/" element={<UserDashboard />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;