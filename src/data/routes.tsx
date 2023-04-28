import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import CakesShop from "../pages/CakesShop";
import AccountPage from "../pages/AccountPage";
import CakePage from "../pages/CakePage";

export default [
  { path: "/", element: <Home /> },
  { path: "/cakes", element: <CakesShop /> },
  {
    path: "/bento",
    children: [{ path: ":type", element: <CakePage /> }],
  },
  {
    path: "/custom",
    element: <Outlet />,
    children: [{ path: ":type", element: <CakePage /> }],
  },
  {
    path: "/tier",
    element: <Outlet />,
    children: [{ path: ":type", element: <CakePage /> }],
  },
  {
    path: "/cupcake",
    element: <Outlet />,
    children: [{ path: ":type", element: <CakePage /> }],
  },
  {
    path: "/account",
    element: <AccountPage />,
  },
  {
    path: "/*",
    element: <Home />,
  },
];
