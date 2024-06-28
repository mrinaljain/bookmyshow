import React, { useEffect } from "react";
import { OPTIONS, USER_PROFILE } from "../utils/constants";
import { UserProfile } from "../api/users";
function Profile() {
  const getProfile = async () => {
    try {
      // const response = await fetch(USER_PROFILE, OPTIONS);
      // const data = await response.json();
      // console.log("data", data);
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
