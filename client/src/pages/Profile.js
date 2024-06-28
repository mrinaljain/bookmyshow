import React, { useEffect } from "react";
import { UserProfile } from "../api/user.api";
function Profile() {
  const getProfile = async () => {
    try {
      const response = await UserProfile();
      if (response.success) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getProfile();

    return () => {
      //  second
    };
  }, []);

  return <div>Profile</div>;
}

export default Profile;


//TODO create design of profile page