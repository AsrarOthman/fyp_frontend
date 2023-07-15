import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Users from "./pages/Users";
import Main from "./pages/Main";
import Pricing from "./pages/Pricing";
import Service from "./pages/Service";
import Contect from "./pages/Contect";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/main",
      element: <Main />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "/service",
      element: <Service />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
    {
      path: "/contect",
      element: <Contect />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
