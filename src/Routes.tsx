import { useRoutes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AccountPage from "./pages/AccountPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import ShopPage from "./pages/ShopPage";
import Login from "./components/AccountPage/Login";
import SignUp from "./components/AccountPage/SignUp";

const Routes = () => {
  const element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/shop", element: <ShopPage /> },
    {
      path: "/cakes",
      children: [
        {
          path: ":type",
          element: <ProductPage />,
        },
      ],
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/account",
      element: <AccountPage />,
    },
    {
      path: "/account/signup",
      element: <SignUp />,
    },
    {
      path: "/*",
      element: <NotFoundPage />,
    },
  ]);
  return <>{element}</>;
};

export default Routes;
