import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Class from "../components/Class";
import About from "../components/About";
import Register from "../components/Register";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path:'/class',
        Component: Class
      },
      {
        path:'/aboutus',
        Component:About
      }
    ]
  },
  {
    path: '/login',
    Component: Login
  },
  {
    path:'/register',
    Component: Register
  }
]);

