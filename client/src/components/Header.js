import React, { useEffect, useState } from "react";
import { UserLogout, VerifyUser } from "../api/user.api";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const [userType, setUserType] = useState("USER");
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await UserLogout();
      if (response.status === 200) {
        localStorage.removeItem("token");
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const getUserDetail = async () => {
    try {
      const response = await VerifyUser();
      if (response.status === 200) {
        setUserType(response?.data?.data?.role);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUserDetail();
  }, []);

  return (
    <header className="flex items-center justify-between px-5">
      <img
        className="w-32"
        src="https://miro.medium.com/v2/resize:fit:1035/1*9WJgQmBw6FIxe8wypznWfQ.jpeg"
      />
      <nav className="mr-auto pl-4">
        <Link>Category</Link>
        <Link>Category</Link>
        <Link>Category</Link>
        <Link>Category</Link>
        <Link>Category</Link>
      </nav>
      <div>
        {userType === "ADMIN" && (
          <Link to="/admin" className="bg-blue-200 border px-3 py-1 rounded">
            Admin
          </Link>
        )}
        <Link to="/profile" className="bg-blue-200 border px-3 py-1 rounded">
          Profile
        </Link>
        <button
          onClick={handleLogout}
          className="bg-blue-200 border px-2  rounded"
        >
          Sign Out
        </button>
      </div>
    </header>
  );
}

export default Header;
