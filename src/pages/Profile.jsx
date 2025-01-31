import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = ({ userId, token }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user data when the component mounts
    axios
      .get(`http://localhost:8080/auth/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass JWT token in Authorization header
        },
      })
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching user data", err);
        setError("Error fetching user data");
        setLoading(false);
      });
  }, [userId, token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="profile">
      {userData ? (
        <div>
          <h1>{userData.name}</h1>
          <p>Email: {userData.email}</p>
          <p>Username: {userData.username}</p>
          {/* Add more fields as per your Users object */}
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default Profile;
