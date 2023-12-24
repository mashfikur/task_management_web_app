import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import UserAuth from "../pages/UserAuthentication/UserAuth";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import DashBoardHome from "../pages/Dashboard/DashBoardHome";
import AddTask from "../pages/Dashboard/AddTask";
import MyTasks from "../pages/Dashboard/MyTasks";
import ErrorPage from "../pages/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/sign-in",
        element: <UserAuth></UserAuth>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashBoardHome></DashBoardHome>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-task",
        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-tasks",
        element: (
          <PrivateRoute>
            <MyTasks></MyTasks>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
