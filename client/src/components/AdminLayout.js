import React from "react";
import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div>
      <header>
        <nav>
          <Link to="">Movie Listing </Link>
          <Link to="add-movie"> Create Movies</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default AdminLayout;

// create movie
// movielisting
// delete movie
// update movie
