import { RouterProvider } from "react-router-dom";
import { router } from "./config/router";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;


//TODO Create Admin section to  add . remove update movie