import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main";
import reportWebVitals from "./reportWebVitals";
import Router from "./ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Exam from "./Exam";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Router />,
  },
  {
    path: "/quiz/:title",
    element: <Exam />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
