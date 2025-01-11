import React from "react";
import styled from "styled-components";
import MainHolder from "./page/MainHolder";
import Login from "./page/auth/Login";
import Forgot from "./page/auth/Forgot";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AfterLogInPage from "./page/AfterLogInPage";
import ShowSha from "./page/AfterLogin/ShowSha";
import SignUp from "../src/page/auth/SignUp";
import Paid from "../src/page/AfterLogin/Paid";
import ResetPassword from "../src/page/auth/ResetPassword";
import DashBoard from "./page/AfterLogin/Dashboard";
import UserPrivate from "./UserPrivate";
import MainAdmin from "./page/AfterLogin/Admin/MainAdmin";
import AdminPrivateroute from "./page/AfterLogin/Admin/AdminPrivateroute";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainHolder />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/reset",
      element: <ResetPassword />,
    },
    {
      path: "/forgot",
      element: <Forgot />,
    },
    {
      element: <UserPrivate />,
      children: [
        {
          path: "/afterlogin",
          element: <AfterLogInPage />,
        },
        {
          path: "/order-payment",
          element: <ShowSha />,
        },
        {
          path: "/success",
          element: <Paid />,
        },
        {
          path: "/dash-board",
          element: <DashBoard />,
        },
      ],
    },
    {
      element:<AdminPrivateroute/>,
      children:[
        {
          path: "/mainAdminDashBoard",
          element: <MainAdmin />,
        },
      ]
    }
  ]);

  return (
    <AppHolder>
      <div>
        <RouterProvider router={router} />
      </div>
     </AppHolder>
  );
};

export default App;

const AppHolder = styled.div`
  width: 100%;
  height: max-content;
  /* background: red; */
  /* padding: 10px; */
  overflow-x: hidden;
`;
