import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import LayoutDashboard from "../componant/layouts/LayoutDashboard";
import ForgetPassword from "../pages/auth/forgePassword/forgetPassword";
import VerificationCode from "../pages/auth/verificationCode/VerificationCode";
import VerificationSuccess from "../pages/auth/verificationSuccess/VerificationSuccess";
import ChangePassword from "../pages/auth/changePassword/ChangePassword";
import Users from "../pages/users/Users";
import EditMainCategory from "../pages/pagesMainCategory/editMainCategory/EditMainCategory";
import MainCategory from "../pages/pagesMainCategory/mainCategory/MainCategory";
import CreateMainCategory from "../pages/pagesMainCategory/createMainCategory/CreateMainCategory";
import SubCategory from "../pages/pagesSubCategory/subCategory/SubCategory";
import CreateSubCategory from "../pages/pagesSubCategory/createSubCategory/CreateSubCategory";
import EditSubCategory from "../pages/pagesSubCategory/editSubCategory/EditSubCategory";
import CreateCities from "../pages/pagesCities/createCities/CreateCities";
import Cities from "../pages/pagesCities/cities/Cities";
import EditCities from "../pages/pagesCities/editCities/EditCities";
import CreateProduct from "../pages/pagesProduct/createProduct/CreateProduct";
import Product from "../pages/pagesProduct/product/Product";
import Orders from "../pages/pagesOrders/Orders";
import Reports from "../pages/pagesReports/Reports";
import Comments from "../pages/pagesComment/Comments";
import Advertisement from "../pages/pagesAdvertisement/advertisement/Advertisement";
import CreateAdvertisement from "../pages/pagesAdvertisement/createAdvertisement/CreateAdvertisement";
import EditAdvertisement from "../pages/pagesAdvertisement/editSubCategory/EditAdvertisement";
import EditProduct from "../pages/pagesProduct/editProduct/EditProduct";

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
      { path: "mainCategory", element: <MainCategory /> },
      { path: "CreateMainCategory", element: <CreateMainCategory /> },
      { path: "EditMainCategory", element: <EditMainCategory /> },
      { path: "subCategory", element: <SubCategory /> },
      { path: "createSubCategory", element: <CreateSubCategory /> },
      { path: "EditSubCategory", element: <EditSubCategory /> },
      { path: "createCity", element: <CreateCities /> },
      { path: "cities", element: <Cities /> },
      { path: "editCity", element: <EditCities /> },
      { path: "createProduct", element: <CreateProduct /> },
      { path: "products", element: <Product /> },
      { path: "editProduct", element: <EditProduct /> },
      { path: "orders", element: <Orders /> },
      { path: "reports", element: <Reports /> },
      { path: "comments", element: <Comments /> },
      { path: "advertisement", element: <Advertisement /> },
      { path: "createAdvertisement", element: <CreateAdvertisement /> },
      { path: "editAdvertisement", element: <EditAdvertisement /> },
    ],
  },
]);
