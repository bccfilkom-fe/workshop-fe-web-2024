import { createBrowserRouter } from "react-router-dom";

// Component
import ProtectedRoute from "../components/routes/ProtectedRoute";

// Pages
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/overview",
        element: <Home />,
      },
    ],
  },
]);

export default router;
