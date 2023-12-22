import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import UserAuth from "../pages/UserAuthentication/UserAuth";
import Dashboard from "../pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/sign-in",
        element: <UserAuth></UserAuth>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default router;
