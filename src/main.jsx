import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Dashboard from "./pages/app/dashboard";
import Settings from "./pages/app/settings";
import User from "./pages/app/user";
import App from "./App";
import Root from "./routes/root";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/register",
//         element: <Register />,
//       },
//       {
//         path: "/app",
//         element: <App />,
//         children: [
//           {
//             path: "/dashboard",
//             element: <Dashboard />,
//           },
//           {
//             path: "/settings",
//             element: <Settings />,
//           },
//           {
//             path: "/user",
//             element: <User />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
