import { createBrowserRouter } from "react-router-dom";
import Auth from "../pages/Auth";
import Movies from "../pages/Movies";
import Theatre from "../pages/Theatre";
import MovieDetail from "../pages/MovieDetail";
import MoviesLayout from "../components/MoviesLayout";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/movies",
    element: <MoviesLayout />,
    children: [
      {
        path: "",
        element: <Movies />,
      },
      {
        path: ":movieId",
        element: <MovieDetail />,
      },
    ],
  },
  {
    path: "/theatre",
    element: <Theatre />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
