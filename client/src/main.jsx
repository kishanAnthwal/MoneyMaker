import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import CricketBetting from "./pages/CricketBetting";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Articles from "./pages/Articles";
import Batting from "./pages/Batting";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/blog',
        element:<Blog/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:"/cricketbetting",
        element:<CricketBetting/>
      },
      {
        path:"/platform",
        element:<Platform/>
      },
      {
        path: '/articles/:id',
        element: <Articles />
      },
       // {
      //   path:"/batting",
      //   element: (
      //     <ProtectedRoute>
      //       <Batting />
      //     </ProtectedRoute>
      //   ),
      // },
      {
        path:"/batting",
        element:<Batting />
      },
      ,
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:'/payment',
        element:<Payment/>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
