import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch user details from backend
    axios
      .get("http://localhost:8080/user/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Send JWT token
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.error("Error fetching user data:", err));

    // Fetch user booking history
    axios
      .get("http://localhost:8080/user/bookings", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Send JWT token
        },
      })
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => console.error("Error fetching booking history:", err));
  }, []);

  if (!user) return <p className="mt-10 text-center">Loading profile...</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container pt-24 pb-12 mx-auto">
        {/* User Details Section */}
        <div className="max-w-3xl p-6 mx-auto text-center bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800">User Profile</h2>
          <p className="mt-2 text-gray-600">{user.name}</p>
          <p className="mt-1 text-gray-600">{user.email}</p>
          <p className="mt-1 text-gray-500">Joined on: {new Date(user.created_at).toDateString()}</p>
        </div>

        {/* Booking History Section */}
        <div className="max-w-4xl mx-auto mt-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Booking History</h2>
          {bookings.length === 0 ? (
            <p className="text-center text-gray-600">No bookings found.</p>
          ) : (
            <div className="p-6 bg-white rounded-lg shadow-lg">
              {bookings.map((booking, index) => (
                <div key={index} className="py-4 border-b">
                  <p className="text-lg font-bold">{booking.movieName}</p>
                  <p className="text-gray-600">Theater: {booking.theaterName}</p>
                  <p className="text-gray-600">Date: {new Date(booking.date).toDateString()}</p>
                  <p className="text-gray-600">Seats: {booking.seats.join(", ")}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
