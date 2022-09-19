import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main";
import reportWebVitals from "./reportWebVitals";
import NotFound from "./NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Exam from "./Exam";
import { Outlet } from "react-router-dom";
import { TopicID, topics } from "./content";

const liste = Object.keys(topics) as TopicID[];

const topicRoutes = liste.map((topic) => ({
  path: `quiz/${topic}`,
  element: <Exam topic={topic} />,
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <NotFound />,
    children: [
      ...[
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "quiz/alle",
          element: <Exam topic="alle" />,
        },
      ],
      ...topicRoutes,
    ],
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
