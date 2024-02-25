import { createBrowserRouter } from "react-router-dom";

// Component
import ProtectedRoute from "../components/routes/ProtectedRoute";

// Pages
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
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
