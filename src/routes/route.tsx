import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import LayoutDashboard from "../componant/layouts/LayoutDashboard";
import ForgetPassword from "../pages/auth/forgePassword/forgetPassword";
import VerificationCode from "../pages/auth/verificationCode/VerificationCode";
import VerificationSuccess from "../pages/auth/verificationSuccess/VerificationSuccess";
import ChangePassword from "../pages/auth/changePassword/ChangePassword";
import Users from "../pages/users/Users";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/forgetPassword",
    element: <ForgetPassword />,
  },
  {
    path: "/verificationCode",
    element: <VerificationCode />,
  },
  {
    path: "/verifictionSuccess",
    element: <VerificationSuccess />,
  },
  {
    path: "/changePassword",
    element: <ChangePassword />,
  },
  {
    path: "/dashboard",
    element: <LayoutDashboard />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "user", element: <Users /> },
    ],
  },
]);
