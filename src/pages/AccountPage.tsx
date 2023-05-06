import { ReactNode, useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import SignUp from "../components/AccountPage/SignUp";
import Login from "../components/AccountPage/Login";
import { CustomerContext } from "../contexts/CustomerProvider";
import AccountDashboard from "../components/AccountPage/AccountDashboard";

const AccountPage = () => {
  const { customer } = useContext(CustomerContext);

  const [loginMode, setLoginMode] = useState<boolean>(true);

  const methods = useForm();

  useEffect(() => {
    document.title = `Account | Baked Goodies by H`;
  }, []);

  let element: ReactNode;
  if (customer?.name !== "") {
    element = <AccountDashboard />;
  } else if (loginMode) {
    element = <Login setLoginMode={setLoginMode} />;
  } else {
    element = <SignUp setLoginMode={setLoginMode} />;
  }
  return <FormProvider {...methods}>{element}</FormProvider>;
};

export default AccountPage;
