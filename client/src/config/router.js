import { createBrowserRouter } from "react-router-dom";
import Auth from "../pages/Auth";
import Movies from "../pages/Movies";
import Theatre from "../pages/Theatre";
import MovieDetail from "../pages/MovieDetail";
import HomeLayout from "../components/HomeLayout";
import Profile from "../pages/Profile";
import AddMovie from "../pages/AddMovie";
import MovieLayout from "../components/MovieLayout";
import Admin from "../components/AdminLayout";
import AdminLayout from "../components/AdminLayout";
import MovieList from "../components/MovieList";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Auth />,
  },
  {
    path: "/explore",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Movies />,
      },
    ],
  },
  {
    path: "movies/:movieId",
    element: <MovieLayout />,
    children: [
      {
        path: "",
        element: <MovieDetail />,
      },
      {
        path: "theatre",
        element: <Theatre />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <MovieList />,
      },
      {
        path: "add-movie",
        element: <AddMovie />,
      },
    ],
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
