import { createBrowserRouter } from "react-router-dom";
import Auth from "../pages/Auth";
import Movies from "../pages/Movies";
import Theatre from "../pages/Theatre";
import MovieDetail from "../pages/MovieDetail";
import HomeLayout from "../components/HomeLayout";
import Profile from "../pages/Profile";
import AddMovie from "../pages/AddMovie";
import MovieLayout from "../components/MovieLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "movies",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Movies />,
      },
      {
        path: "add",
        element: <AddMovie />,
      },
      {
        path: "",
        element: <MovieLayout />,
        children: [
          {
            path: ":movieId",
            element: <MovieDetail />,
            children: [
              {
                path: "theatre",
                element: <Theatre />,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    path: "/profile",
    element: <Profile />,
  },
]);
