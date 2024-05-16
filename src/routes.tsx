import { createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "@/containers/ErrorBoundary";
import Home from "@/containers/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
]);
