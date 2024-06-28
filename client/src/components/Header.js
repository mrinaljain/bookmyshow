import React from "react";
import { UserLogout } from "../api/user.api";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      //?axios API call
      const response = await UserLogout();
      if (response.data.success) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
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
        <Link to="/admin" className="bg-blue-200 border px-3 py-1 rounded">
          Admin
        </Link>
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
