import { Button, Heading, Input, Link, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

const AccountPage = () => {
  useEffect(() => {
    document.title = "Account | Baked Goodies by H";
  }, []);
  return (
    <VStack m="60px  0">
      <Heading>Login</Heading>
      <Input type="text" placeholder="Email" />
      <Input type="text" placeholder="Password" />
      <Link fontSize="2xs">Forgot your password?</Link>
      <Button>Sign in</Button>
      <Link fontSize="2xs">Create Account</Link>
    </VStack>
  );
};

export default AccountPage;
