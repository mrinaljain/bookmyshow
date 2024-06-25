import React, { useEffect } from "react";
import { OPTIONS, USER_PROFILE } from "../utils/constants";
import { useCookies } from "react-cookie";
function Profile() {
  const [cookies, setCookie] = useCookies(["name"]);
  const getProfile = async () => {
    try {
      const response = await fetch(USER_PROFILE, OPTIONS);

      const data = await response.json();
      console.log("data", data);
    } catch (error) {}
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
