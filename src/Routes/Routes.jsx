import Home from "../Pages/Home";
import MainLayots from "../Layouts/MainLayots";
import { createBrowserRouter } from "react-router";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppsDetails from "../Components/AppsDetails";
import ErrorPage from "../Components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <MainLayots />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "/appsdetails/:id",
        element: <AppsDetails />,
      },
    ],
  },
]);
