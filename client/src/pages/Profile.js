import React, { useEffect, useState } from "react";
import { UserProfile } from "../api/user.api";
function Profile() {
  const [userData, setUserData] = useState({});

  const getProfile = async () => {
    try {
      const response = await UserProfile();
      if (response.status === 200) {
        console.log(response);
        setUserData(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="flex justify-center">
          <img
            className="w-24 h-24 rounded-full"
            src={userData.imageUrl}
            alt={userData.fullName}
          />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold">{userData.fullName}</h2>
          <p className="text-gray-600">{userData.email}</p>
          <p className="text-gray-600">{userData.role}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;

//TODO create design of profile page
