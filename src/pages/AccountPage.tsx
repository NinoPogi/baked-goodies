import { useContext, useEffect } from "react";
import { Heading, Spinner } from "@chakra-ui/react";
import Login from "../components/AccountPage/Login";
import { CustomerContext } from "../contexts/CustomerProvider";
import AccountDashboard from "../components/AccountPage/AccountDashboard";

const AccountPage = () => {
  const { customer } = useContext(CustomerContext);
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");

  useEffect(() => {
    document.title = `Account | Baked Goodies by H`;
  }, []);

  return isLoggedIn === "true" ? (
    <AccountDashboard />
  ) : !(isLoggedIn === "true") && !customer._id ? (
    <Login />
  ) : (
    <Heading>Something Happened!</Heading>
  );
};

export default AccountPage;
