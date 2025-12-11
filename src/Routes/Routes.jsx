import Home from "../Pages/Home";
import MainLayots from "../Layouts/MainLayots";
import { createBrowserRouter } from "react-router";
import Card from "../Pages/Card";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayots />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "card",
        element: <Card />,
      },
    ],
  },
]);
